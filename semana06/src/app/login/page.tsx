'use client'
import { useState } from "react";
import "./styles.css";
export default function login(){
    const [email, setEmail] = useState<string> ('')
    const [password, setPassword] = useState<string> ('')

    function handleSubmit(){
        console.log(email)
        console.log(password)
    }

    return(
        <div className="container">
            <div className="form">
                <h2>Login</h2>
                <input 
                    type="text" 
                    placeholder="E-mail"
                    className="input"
                    value = {email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    className="input"
                    value = {password}
                    onChange={(event) => setPassword(event.target.value)}
                />
                <button className="button" onClick={handleSubmit}>Entrar</button>
            </div>
        </div>
    )
}
