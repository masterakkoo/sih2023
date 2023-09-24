import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MakeRequest from './components/MakeRequest'
import Agency from './components/Agency'
import Message from './components/Message'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Agency_Profile from './components/Agency_Profile'
import Take_Req from './components/Take_Req'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Routes>
        <Route exact path="/" element={<MakeRequest />} />
        <Route exact path="/profile" element={<Agency_Profile />} />
      </Routes>
      {/* <Take_Req /> */}
    </>
  )
}

export default App
