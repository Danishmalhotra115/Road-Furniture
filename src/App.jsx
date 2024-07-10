import { useState } from 'react'
import './App.css'
import Carousel from "./components/Carousel"
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)
  
let slides=["https://cdn.pixabay.com/photo/2020/03/09/08/44/road-construction-4914987_1280.jpg","https://www.reliance-foundry.com/wp-content/uploads/pedestrian-security-bollard-768x512.jpg","https://images.pexels.com/photos/17131269/pexels-photo-17131269/free-photo-of-rocks-in-antelope-canyon.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"]
  return (
    <>
    <Navbar/>
    
     <Carousel slides={slides} />
     
    
    </>
  )
}

export default App
