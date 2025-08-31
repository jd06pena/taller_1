import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <img id='logo_p' src="/logo.png" alt="logo" />
      <h1>BIENVENIDO AL TALLER 1</h1>
      <p className="read-the-docs">
        Dale click a los botones para incrementar o decrementar el contador
      </p>
      <div className="card">
        <input type="text" />
        <button>Guardar</button>
      </div>
      
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
      
    </>
  )
}

export default App
