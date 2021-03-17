import React, { useState } from 'react'

import './AdicionarUsuario.css'

function AdicionarUsuario() {
  
  const [nome, setNome] = useState('')
  const [sobrenome, setSobrenome] = useState('')
  const [email, setEmail] = useState('')

  const onSubmitHandler = event => {
    event.preventDefault()

    const usuario = { nome, sobrenome, email }

    fetch('https://reqres.in/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(usuario)
    })
      .then(resposta => {
        if(resposta.ok) {
        setNome('')
        setSobrenome('')
        setEmail('')
        alert('User successfully registered!')
        }
      })
  }

  return (
    <div className="AdicionarUsuario">
      <h2>User register</h2>
      <form onSubmit={onSubmitHandler}>
        <div className="Linha">
          <div className="Coluna">
            <label>Name</label>
            <input
              type="text"
              name="nome"
              value={nome}
              onChange={event => setNome(event.target.value)}
              required>
            </input>
          </div>
          <div className="Coluna">
            <label>Last Name</label>
            <input
              type="text"
              name="sobrenome"
              value={sobrenome}
              onChange={event => setSobrenome(event.target.value)}
              required>
            </input>
          </div>
        </div>
        <div className="Linha">
          <div className="Coluna">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={event => setEmail(event.target.value)}
              required>
            </input>
          </div>
        </div>
        <button type="submit">
        Sign up
        </button>
      </form>
    </div>
  )
}

export default AdicionarUsuario