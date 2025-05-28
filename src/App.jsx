import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StateBasics from './components/StateBasics'
import Example from './components/Example'
import Counter from './components/Counter'
import TextInput from './components/TextInput'
import DataForm from './components/DataForm'
import {Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import DataFetch from './components/DataFetch'
import DataCard from './components/DataCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
     <Routes>
      <Route path='/' element={<DataFetch/>}></Route>
      <Route path='/l' element={<DataForm/>}></Route>
      <Route path='/e' element={<Example/>}></Route>
      <Route path='/c' element={<Counter/>}></Route>
      <Route path='/cd' element={<DataCard/>}></Route>


     </Routes>
    </>
  )
}

export default App
