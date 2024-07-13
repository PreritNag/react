import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("white")
   
  return (
    <>
    <body className="w-screen h-screen" style={{ backgroundColor: color }}>
        <div className="bg-gray-500 p-4">
          <button onClick={() => setColor("blue")} className="bg-blue-700 text-white p-2 m-2">blue</button>
          <button onClick={() => setColor("yellow")} className="bg-yellow-300 text-white p-2 m-2">yellow</button>
          <button onClick={() => setColor("black")} className="bg-black text-white p-2 m-2">black</button>
          <button onClick={() => setColor("pink")} className="bg-pink-500 text-white p-2 m-2">pink</button>
          <button onClick={() => setColor("red")} className="bg-red-700 text-white p-2 m-2">red</button>
          <button onClick={() => setColor("gray")} className="bg-gray-600 text-white p-2 m-2">gray</button>
        </div>
    </body>
      
      
    </>
  )
}

export default App
