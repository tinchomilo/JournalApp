import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import validator from 'validator';

export const RegisterScreen = () => {

    const [inputValues, handleInputChange] = useForm({
        name: 'Tincho',
        email: 'tincho@gmail.com',
        password: '123456789',
        password2: '123456789'
    })

    const { name, email, password, password2 } = inputValues

    const handleRegister = (e) => {
        e.preventDefault()
        console.log(name, email, password, password2)

        if( isFormValid () )
            console.log('formulario correcto')
    }

    const isFormValid = () => {
        if( name.trim().length === 0 ) {
            console.log('el nombre es requerido')
            return false
        } else if ( !validator.isEmail( email ) ) {
            console.log('ingresa un email valido')
            return false
        } else if( password != password2 || password.length < 5) {
            console.log('el poassword debe ser mayor a 5 caracteres y coincidir')
            return false
        }
        return true
    }


    return (
        <>
         <h3 className="auth__title">Login</h3>

         <form onSubmit={ handleRegister }>
            
             <div className="auth__alert-error">
                 hola mundo
             </div>

             <input 
                type="text"
                placeholder="Name"
                name="name"
                autoComplete="off"
                className="auth__input"
                onChange={ handleInputChange }
                value={ name }
             />

            <input 
                type="Email" 
                placeholder="Email"
                name="email" 
                autoComplete="off"
                className="auth__input"
                onChange={ handleInputChange }
                value={ email }     
            />

            <input 
                type="password" 
                placeholder="Password"
                name="password" 
                className="auth__input"
                onChange={ handleInputChange }
                value={ password }               
            />

            <input 
                type="password"
                placeholder="confirm password"
                name="password2"
                autoComplete="off"
                className="auth__input"
                onChange={ handleInputChange }
                value={ password2 }
             />             

            <button 
                className="btn btn-primary btn-block mb-1"
                type="submit"
            >
                Register
            </button>

            <Link 
                className="link"
                to="auth/login"
                >
                Already register?
            </Link>

         </form>
        </>
    )
}
