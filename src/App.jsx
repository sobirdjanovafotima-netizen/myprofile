import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import Sidebar from './components/Sidebar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=" min-h-screen w-full flex flex-col">
        <div className="flex flex-1 ">
          <Sidebar />
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default App
