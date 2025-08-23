import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <img src="./public/p_roja.png" alt="logo" />
      </div>
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
      
    </>
  )
}

export default App
