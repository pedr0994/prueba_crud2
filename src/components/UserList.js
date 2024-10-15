// src/components/UserList.js
import React from 'react';

const UserList = ({ usuarios, eliminarUsuario, setUsuarioEditado }) => {
  return (
    <ul>
      {usuarios.map((user, index) => (
        <li key={index}>
          {user.nombre} - {user.correo} - {user.edad}
          <button onClick={() => eliminarUsuario(index)}>Eliminar</button>
          <button onClick={() => setUsuarioEditado({ ...user, index })}>Editar</button> {/* Pass user to edit */}
        </li>
      ))}
    </ul>
  );
};

export default UserList;
