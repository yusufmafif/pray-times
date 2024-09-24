import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [time, setTime] = useState({})

  useEffect(() => {
    fetch('https://api.myquran.com/v2/sholat/jadwal/1204/2024/09/24')
      .then((res) => res.json())
      .then((data) => setTime(data.data))
      .catch((error) => console.log(error))
  }, [])


  return (
    <>
      <div>
        {time.jadwal?.subuh}
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{time.jadwal?.subuh}
      </h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
