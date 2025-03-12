'use client'
import { useState } from "react";
import "./home.css";


export default function Home() {
  //let contador = 0;
  const [contador, setContador] = useState<number>(0);

  function incrementar() {
    console.log("Foi executada")
    setContador(contador + 1)
    console.log(`Contador ${contador}`)
  }
  function resetar() {
    setContador(0);
  }

return (
    <div className="container">
      <h1>Contador: {contador}</h1>
      <button onClick={() => incrementar()}>Incrementar</button>
      <button onClick={() => resetar()}>Resetar</button>
    </div>
    
  );
}
