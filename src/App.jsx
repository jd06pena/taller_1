import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
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
