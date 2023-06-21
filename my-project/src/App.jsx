import React from 'react'
import './App.css'
import Navbar from './Navbar'

function App() {
const currentWidth = window.innerWidth
 const [screen, setScreen] = React.useState(currentWidth)

 window.addEventListener('resize', ()=>setstate(window.innerWidth))
  return (
    <>
      <Navbar/>
    </>
  )
}

export default App
