import getConnection from "./../database/database.js";

//nombre, apellido, ci, codigo, ciudad, fecha de activacion*
//nombre, apellido, ci, codigo, ciudad, fecha de activacion, celular*

// Mostrar todos los usuarios Activos
const getActiveUsers = async (req, res) => {
  try {
    const connection = await getConnection();
    const result = await connection.query(
      "SELECT id, nombres, apellidos, fecha_nacimiento, telefono, sexo, ci, ciudad, codigo, fecha_activacion, dias_restantes FROM usuarios WHERE rol='USER_ROLE' AND estado = 1"
    );
    connection.release();
    // Calcular los días restantes para la fecha de activación
    const today = new Date();
    result.forEach(user => {
      const fechaActivacion = new Date(user.fecha_activacion);
      const diffInDays = Math.floor((today - fechaActivacion) / (1000 * 60 * 60 * 24));
      user.diasRestantes = Math.max(365 - diffInDays, 0); // Dias restantes, mínimo 0
    });
    
    res.json(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
// Mostrar todos los usuarios Activos/Inactivos
const getAllUsers = async (req, res) => {
  try {
    const connection = await getConnection();
    const result = await connection.query(
      "SELECT id, nombres, apellidos, fecha_nacimiento, telefono, sexo, ci, ciudad, codigo, fecha_activacion FROM usuarios WHERE rol='USER_ROLE'"
    );
    connection.release();

    // Calcular los días restantes para la fecha de activación
    const today = new Date();
    result.forEach(user => {
      const fechaActivacion = new Date(user.fecha_activacion);
      const diffInDays = Math.floor((today - fechaActivacion) / (1000 * 60 * 60 * 24));
      user.diasRestantes = Math.max(365 - diffInDays, 0); // Dias restantes, mínimo 0
    });

    res.json(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Buscar usuario por ID
const getUserByID = async (req, res) => {
  try {
    const { id } = req.params;
    const connection = await getConnection();
    const result = await connection.query(
      "SELECT nombres, apellidos, rol, fecha_nacimiento, telefono, sexo, ci, ciudad, codigo, fecha_activacion FROM usuarios WHERE id = ?",
      id
    );
    connection.release();
    res.json(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Buscar usuario por CI
const getUserByCI = async (req, res) => {
  try {
    const { ci } = req.params;
    const connection = await getConnection();
    const result = await connection.query(
      "SELECT nombres, apellidos, fecha_nacimiento, telefono, sexo, ci, ciudad, codigo, fecha_activacion FROM usuarios WHERE ci = ?",
      ci
    );
    connection.release();
    res.json(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Buscar usuario por Codigo
const getUserByCode = async (req, res) => {
  try {
    const { codigo } = req.params;
    const connection = await getConnection();
    const result = await connection.query(
      "SELECT nombres, apellidos, fecha_nacimiento, telefono, sexo, ci, ciudad, codigo, fecha_activacion FROM usuarios WHERE codigo = ?",
      codigo
    );
    connection.release();
    res.json(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Actualizar Usuario por ID
const updateUserID = async (req, res) => {
  try {
    const { id } = req.params;
    const { ci, nombres, apellidos, fecha_nacimiento, telefono, sexo, ciudad, codigo } = req.body;

    if (![nombres, apellidos, fecha_nacimiento, telefono, ci, ciudad, codigo].every(Boolean)) {
      res.status(400).json({ message: "Por favor llene todos los campos." });
      return;
    }

    const formattedNombres = nombres.split(" ").map((nombre) => nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase()).join(" ");
    const formattedApellidos = apellidos.split(" ").map((apellido) => apellido.charAt(0).toUpperCase() + apellido.slice(1).toLowerCase()).join(" ");
    const users = {
      nombres: formattedNombres,
      apellidos: formattedApellidos,
      fecha_nacimiento,
      telefono,
      sexo,
      ci,
      ciudad,
      codigo,
    };

    const connection = await getConnection();
    const result = await connection.query("UPDATE usuarios SET ? WHERE id = ?", [users, id]);
    res.json(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//Actualizar Fecha de Activacion solo para super usuario
const updateActivationDate = async (req, res) => {
  try {
    const { id } = req.params;

    // Obtener la fecha actual del sistema
    const currentDate = new Date();

    const connection = await getConnection();

    // Actualizar la fecha de activación del usuario utilizando la fecha actual del sistema
    const result = await connection.query("UPDATE usuarios SET fecha_activacion = ? WHERE id = ?", [currentDate, id]);

    res.json(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Agregar usuario a la base de datos
const addUser = async (req, res) => {
  try {
    const { nombres, apellidos, fecha_nacimiento, telefono, sexo, ci, ciudad, codigo } = req.body;

    if (![nombres, apellidos, fecha_nacimiento, telefono, ci, ciudad, codigo].every(Boolean)) {
      res.status(400).json({ message: "Por favor llene todos los campos." });
      return;
    }

    const connection = await getConnection();

    //Validación 0: Verificar si el CI ya esta usado por otro usuario
    const rows = await connection.query("SELECT * FROM usuarios WHERE ci = ?", ci);

    if (rows.length > 0) {
      res.status(400).json({ message: "La persona con el C.I. que desea registrar ya existe" });
      return;
    }

    // Validación 1: Verificar si el código existe en la tabla codigos
    const codeRows = await connection.query("SELECT * FROM codigos WHERE codigo = ?", codigo);
    if (codeRows.length === 0) {
      res.status(400).json({ message: "El código ingresado no existe." });
      connection.release();
      return;
    }

    // Validación 2: Verificar si el código ya está en uso por otro usuario
    const userWithCodeRows = await connection.query("SELECT * FROM usuarios WHERE codigo = ?", codigo);
    if (userWithCodeRows.length > 0) {
      res.status(400).json({ message: "El código ingresado ya está en uso por otro usuario." });
      connection.release();
      return;
    }

    const formattedNombres = nombres.split(" ").map((nombre) => nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase()).join(" ");
    const formattedApellidos = apellidos.split(" ").map((apellido) => apellido.charAt(0).toUpperCase() + apellido.slice(1).toLowerCase()).join(" ");
    const tiempoTranscurrido = Date.now();
    const fecha_activacion = new Date(tiempoTranscurrido);

    const users = {
      nombres: formattedNombres,
      apellidos: formattedApellidos,
      fecha_nacimiento,
      telefono,
      sexo,
      ci,
      ciudad,
      codigo,
      fecha_activacion,
    };

    await connection.query("INSERT INTO usuarios SET ?", users);
    connection.release();
    res.json({ message: "Usuario Agregado." });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Eliminar Usuario por C.I.
const deleteUser = async (req, res) => {
  try {
    const { ci } = req.params;
    const connection = await getConnection();
    const result = await connection.query("DELETE FROM usuarios WHERE ci = ?", ci);
    res.json(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const methods = {
  getActiveUsers,
  getAllUsers,
  getUserByID,
  updateUserID,
  addUser,
  deleteUser,
  getUserByCI,
  getUserByCode,
  updateActivationDate,
};
