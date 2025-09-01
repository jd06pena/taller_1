import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [tarea, setTarea] = useState("")
  const [tareas, setTareas] = useState([]) // el array

  return (
    <>
    <div className='app'>
      <img id='logo_p' src="/logo.png" alt="logo" />
      <h1>BIENVENIDO AL TALLER 1</h1>
      <p className="read-the-docs">
        Dale click a los botones para incrementar o decrementar el contador
      </p>
      

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Incremento
        </button>
        <button onClick={() => setCount((count) => count -1)}>
          Decremento  
        </button>
        <p>
          SOY EL CONTADOR: {count}
        </p>
      </div>

      <div className="card">
        <input
          type="text"
          className='tarea'
          value={tarea}
          onChange={e => setTarea(e.target.value)}
        />
        <button onClick={() => {
          if (tarea.trim() !== "") {
            setTareas([...tareas, tarea]);
            setTarea(""); 
          }
        }}>
          Guardar Tarea
        </button>
      </div>

      {/* Muestra las tareas guardadas */}
      <div className="card">
        <h2>Tareas guardadas:</h2>
        <ul>
          {tareas.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
      
      </div>
    </>
  )
}

export default App
