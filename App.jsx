import React from 'react'
// import './App.css'
import ViewStudent from './components/ViewStudent'
import Navbar from './components/Navbar'
import AddStudent from './components/AddStudent'
import { Routes,Route } from 'react-router-dom'


function App() {
  return (
    <>
  
      <Navbar/>
        <Routes>
      <Route path='/' element={<AddStudent/>}></Route>
      <Route path='/view' element={<ViewStudent/>}></Route>


     </Routes> 
       
    </>
  )
}

export default App
