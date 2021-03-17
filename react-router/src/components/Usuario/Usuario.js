import React from 'react'
import {Link} from 'react-router-dom'

import './Usuario.css'

function Usuario(props) {
  return (
    <div className="Usuario">
      <ul>
        <li><strong>ID:</strong> {props.usuario.id}</li>
        <li><strong>Full name:</strong> {props.usuario.nome} {props.usuario.sobrenome}</li>
        <li><strong>Email:</strong> {props.usuario.email}</li>
        <li><strong><Link to={`/usuarios/${props.usuario.id}`}>Details</Link></strong></li>
      </ul>
      <button onClick={props.removerUsuario}>&times;</button>
    </div>
  )
}

export default Usuario