// src/components/UserForm.js
import React, { useState, useEffect } from 'react';

const UserForm = ({ agregarUsuario, actualizarUsuario, usuarioEditado }) => {
  const [usuario, setUsuario] = useState({ nombre: '', correo: '', edad: '' });

  useEffect(() => {
    if (usuarioEditado) {
      setUsuario(usuarioEditado); // Carga los datos del usuario a editar
    }
  }, [usuarioEditado]);

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setUsuario({ ...usuario, [name]: value });
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (usuarioEditado) {
      actualizarUsuario(usuarioEditado.index, usuario); // Actualiza el usuario existente
    } else {
      agregarUsuario(usuario); // Agrega un nuevo usuario
    }
    setUsuario({ nombre: '', correo: '', edad: '' });
  };

  return (
    <form onSubmit={manejarEnvio}>
      <input
        type="text"
        name="nombre"
        value={usuario.nombre}
        onChange={manejarCambio}
        placeholder="Nombre"
        required
      />
      <input
        type="email"
        name="correo"
        value={usuario.correo}
        onChange={manejarCambio}
        placeholder="Correo"
        required
      />
      <input
        type="number"
        name="edad"
        value={usuario.edad}
        onChange={manejarCambio}
        placeholder="Edad"
        required
      />
      <button type="submit">{usuarioEditado ? 'Actualizar Usuario' : 'Agregar Usuario'}</button>
    </form>
  );
};

export default UserForm;
