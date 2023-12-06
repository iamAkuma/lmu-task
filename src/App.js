import React from 'react'
import Home from './Home'
import { Routes, Route } from "react-router-dom"
import Navbar from './Navbar'
import SelectedMovie from './SelectedMovie'
import Error from './Error'
const App = () => {
  return (
    <>

        <Routes>
          <Route element={<Navbar />} />
          <Route path="/" element={<Home />} />
          <Route path="movie/:id" element={<SelectedMovie />} />
          <Route path = "*" element={<Error/>} />
        </Routes>
      </>

  )
}

export default App
