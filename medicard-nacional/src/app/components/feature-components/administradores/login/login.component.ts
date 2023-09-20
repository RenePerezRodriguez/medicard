import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Login } from 'src/app/interfaces/login'; 
import { User } from 'src/app/models/user';
import { ErrorService } from 'src/app/services/error.service';
import { AdminService } from 'src/app/services/admin.service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  usuarioForm: FormGroup;
  userName: string = '';
  password: string = '';
  listUsers: User[] = [];

  constructor(private toastr: ToastrService,
              private _adminService: AdminService,
              private router: Router,
              private _errorService: ErrorService) 
  { 
    this.usuarioForm = new FormGroup({
      'userName': new FormControl(this.userName, Validators.required),
      'password': new FormControl(this.password, Validators.required)
    })
  }
  ngOnInit(): void {
  }

  login(){
    //validar que usuario ingrese datos
    if (this.userName== '' || this.password == '') 
    {
      this.toastr.warning('Todos los campos son obligatorios', 'Error');
      return
    }
    //Creamos el body
    const usuario: Login = {
      userName: this.userName,
      password: this.password
    }
    this._adminService.login(usuario).subscribe({
      next: (token) => {
        //console.log(token);
        localStorage.setItem('token', token);
        const decodedToken: any = jwt_decode(token);
        // Obtener el userType del token
        const userType = decodedToken.userType;
        if(userType === 'SUPER_ROLE'){
          this.router.navigate(['/super-user']); 
        }
        else if (userType === 'ADMIN_ROLE') {
          this.router.navigate(['/list-users']);
        }
        
      },
      error: (e: HttpErrorResponse) => {
        this._errorService.msgError(e);
      }
    })
  }
 
  /*getUsers() {
    this._userService.getUsers().subscribe(data => {
      console.log(data);
      this.listUsers = data;
    }, error => {
      console.log(error);
    })
  }*/
}
