import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Screens/Home'
import CreateUsers from './Components/CreateUsers'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/createUser' element={<CreateUsers/>}/>
    </Routes>
    </>
  )
}

export default App
