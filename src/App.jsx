import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [tarea, setTarea] = useState("")
  const [tareas, setTareas] = useState([]); // el array

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
      <h4>Agrega una tarea</h4>

      <div className="card">
        <input
          type="text"
          className='tarea'
          value={tarea}
          onChange={e => setTarea(e.target.value)}
        />
        <button
          onClick={() => {
            if (tarea.trim() !== "") {
              setTareas([...tareas, { texto: tarea, confirmada: false }]);
              setTarea("");
            }
          }}
        >
          Guardar Tarea
        </button>
      </div>

      {/* Muestra las tareas guardadas */}
      <div className="card">
        <h2>Tareas guardadas:</h2>
        <ul>
          {tareas.map((item, idx) => (
            <li key={idx}>
              <span style={{ textDecoration: item.confirmada ? "underline" : "none" }}>
                {item.texto}
              </span>
              <button
                style={{ marginLeft: "5px" }}
                onClick={() => {
                  const nuevasTareas = tareas.filter((_, i) => i !== idx);
                  setTareas(nuevasTareas);
                }}
              >
                Eliminar
              </button>
              <input type="checkbox" style={{ marginLeft: "5px" }}
                disabled={item.confirmada}
                onClick={() => {
                  const nuevasTareas = tareas.map((t, i) =>
                    i === idx ? { ...t, confirmada: true } : t
                  );
                  setTareas(nuevasTareas);
                }} />confirmar
            </li>
          ))}
        </ul>
      </div>

      </div>
    </>
  )
}

export default App
