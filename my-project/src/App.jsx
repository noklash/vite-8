import React from 'react'
import './App.css'
import Navbar from './Navbar'

function App() {
const currentWidth = window.innerWidth
 const [screen, setScreen] = React.useState(currentWidth)

 window.addEventListener('resize', ()=>setScreen(window.innerWidth))
  return (
    <>
      <Navbar screen={screen}/>
    </>
  )
}

export default App
