import React from 'react'
import './App.css'
// import Navbar from './Navbar'
import Hero from './Hero'

function App() {
const currentWidth = window.innerWidth
 const [screen, setScreen] = React.useState(currentWidth)

 window.addEventListener('resize', ()=>setScreen(window.innerWidth))
  return (
    <div className=''>
      {/* <Navbar screen={screen}/> */}
      <Hero screen={screen}/>
    </div>
  )
}

export default App
