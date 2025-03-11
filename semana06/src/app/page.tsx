import Link from "next/link";
import "./home.css";
import Person from "@/components/Person";


export default function Home() {
  const lista = [
    {
      name: "Mateus",
      age: 17
    },
    {
      name: "Maria",
      age: 18
    },
    {
      name: "Jorge",
      age: 52
    }
  ]

  return (
    <div>
      <h1>Home</h1>
      <Link href="/login">
      <button>Login</button></Link>

      <div className="container">
        {
          lista.map((item) => (
            <Person nome = {item.name} idade={item.age}/>
           ))}  
      </div>
    </div>
    
  );
}
