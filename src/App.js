// src/App.js
import React, { useState } from 'react';
import UserForm from './components/UserForm';
import UserList from './components/UserList';

const App = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [usuarioEditado, setUsuarioEditado] = useState(null);

  const addUser = (nuevoUsuario) => {
    setUsuarios([...usuarios, nuevoUsuario]);
  };

  const deleteUser = (index) => {
    const nuevosUsuarios = usuarios.filter((_, i) => i !== index);
    setUsuarios(nuevosUsuarios);
  };

  const updateUser = (index, usuarioActualizado) => {
    const nuevosUsuarios = usuarios.map((user, i) => (i === index ? usuarioActualizado : user));
    setUsuarios(nuevosUsuarios);
    setUsuarioEditado(null);
  };

  return (
    <div>
      <h1>CRUD de Usuarios</h1>
      <UserForm agregarUsuario={addUser} usuarioEditado={usuarioEditado} actualizarUsuario={updateUser} />
      
      {/* Mostrar el total de usuarios */}
      <h2>Total de usuarios: {usuarios.length}</h2> {/* Mostrar el total de usuarios aquí */}
      
      <UserList usuarios={usuarios} eliminarUsuario={deleteUser} setUsuarioEditado={setUsuarioEditado} />
    </div>
  );
};

export default App;
