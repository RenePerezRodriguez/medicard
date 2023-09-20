import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ActivateUser, User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { HttpClient } from '@angular/common/http';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-super-user',
  templateUrl: './super-user.component.html',
  styleUrls: ['./super-user.component.scss']
})
export class SuperUserComponent implements OnInit{
  userForm: FormGroup;
  searchTerm: string = '';
  userId: number= 47;
  listUsers: User[] = [];
  currentPage = 1; // Página actual
  itemsPerPage = 10; // Cantidad de elementos por página

  //@ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  //dataSource: any;
  //ngAfterViewInit() {
    //this.dataSource.paginator = this.paginator;
  //}
  constructor(private _userService: UserService,
              private toastr: ToastrService,
              private router: Router,
              private http: HttpClient,
              private fb: FormBuilder,
              private aRouter: ActivatedRoute,)
  {
    this.userForm = this.fb.group({})
    
  }

  ngOnInit(): void {
    this.getUsers();
    this.aRouter.params.subscribe(params => {
      const userId = +params['userId']; // Accede a 'userId' desde 'params'
      console.log('User ID:', this.userId);
  
      // Luego, puedes usar userId en tu componente según sea necesario.
    });
  }
  searchUser() {
    if (this.searchTerm.trim() === '') {
      // Si no hay término de búsqueda, mostrar la lista completa
       this.getUsers();
    } else {
      // Filtrar la lista de asegurados por término de búsqueda
      const searchTermLowerCase = this.searchTerm.toLowerCase();
      this.listUsers = this.listUsers.filter(user =>
        user.nombres.toLowerCase().includes(searchTermLowerCase) ||
        user.apellidos.toLowerCase().includes(searchTermLowerCase) ||
        user.ci.includes(this.searchTerm)
      );
    }
  }
  getUsers() {
    this._userService.getUsers().subscribe(data => {
      console.log(data);
      this.listUsers = data;
    }, error => {
      console.log(error);
    })
  }
  deleteUser(ci: any){
    this._userService.deleteUser(ci).subscribe(data =>{
      this.toastr.show('El asegurado fue eliminado con exito', 'Asegurado Eliminado');
      this.getUsers();
    }, error => {
      console.log(error);
    })
  }
  logOut() {
    localStorage.removeItem('token');
    this.router.navigate(['/login'])
  }
  /*updateActivationDate() {
    const ACTIVATEUSER: ActivateUser = {
      id: this.userForm.get('id')?.value,
      

    }
    if(this.id !== null){
      // Realiza una solicitud HTTP al servidor para actualizar la fecha de activación
    this._userService.updateActivationDate(this.id, ACTIVATEUSER).subscribe(
      (data) => {
        console.log('Fecha de activación actualizada con éxito', data);

        this.toastr.info('La fecha de activación fue actualizada con éxito!', 'Fecha de Activación Actualizada!');
        this.router.navigate(['/list-users']);
      },
      (error) => {
        console.log(error);
        this.userForm.reset();
      }
    );
    }

  }*/
  /*
  updateActivationDate(userId: string) {
    // Lógica para obtener los datos de activación, por ejemplo, mediante un formulario o una ventana modal
    const requestData  = {
      // Aquí debes incluir los datos necesarios para la actualización de la fecha de activación
      id: userId,
    // Aquí debes incluir los datos de activación, por ejemplo:
   
    };
  
    // Llama al servicio para realizar la actualización
    this._userService.updateActivationDate(userId, USER).subscribe(
      (data) => {
        // Maneja la respuesta del servidor (éxito)
        this.toastr.success('Fecha de activación actualizada con éxito', 'Éxito');
        this.getUsers(); // Vuelve a cargar la lista de usuarios
      },
      (error) => {
        // Maneja cualquier error que pueda ocurrir durante la solicitud
        console.error(error);
        this.toastr.error('Ocurrió un error al actualizar la fecha de activación', 'Error');
      }
    );
    
  }
  */
}
