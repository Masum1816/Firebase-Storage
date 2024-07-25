import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router';
import Home from './Components/Home/Home';
import AddData from './Components/AddData/AddData';
import ViewData from './Components/ViewData/ViewData';
import UpdateData from './Components/UpdateData/UpdateData';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/AddData' element={<AddData />} />
        <Route path='/ViewData' element={<ViewData />} />
        <Route path='/UpdateData/:id' element={<UpdateData />} />
      </Routes>
    </>
  )
}

export default App
