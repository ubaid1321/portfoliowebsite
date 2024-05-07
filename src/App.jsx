import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Aos from "Aos"
import "aos/dist//aos.css"
import { useEffect } from 'react'


function App() {
  
useEffect(() => {
  Aos.init();


 
}, [])

  return (
    <>
     <Navbar/>
     <div className="container">
      <Home/>
      <Experience/>
      <Skills/>
      <Projects/>
      <Contact/>
     </div>
    </>
  )
}

export default App
