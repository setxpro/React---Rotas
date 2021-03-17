import React, {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom'

function DetalhesUsuario() {

    const {id} = useParams()

    const [usuario, setUsuarios] = useState({})

    useEffect(() =>{
        fetch(`https://reqres.in/api/users/${id}`)
        .then(resposta => resposta.json())
        .then(dados => {
            if(dados.data) {
                setUsuarios({
                    id: dados.data.id,
                    nome: dados.data.first_name,
                    sobrenome: dados.data.last_name,
                    email: dados.data.email,
                    foto: dados.data.avatar
                })
            }
        })
    }, [id])

    if(usuario !== undefined) {
        return <>
            <h1>{usuario.nome} {usuario.sobrenome}</h1>
            <img src={usuario.foto} alt={usuario.nome}/>
            <p>{usuario.email}</p> 
            <strong><Link to="/usuarios">Back</Link></strong>
        </>
    }

    return<>
        <h1>User not found!</h1>
        <Link to="/usuarios">Back</Link>
    </>
}


export default DetalhesUsuario