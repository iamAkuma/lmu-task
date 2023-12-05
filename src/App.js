import React from 'react'
import Home from './Home'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './Navbar'
import Screen2 from './Screen2'
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Navbar />} />
          <Route path="/" element={<Home />} />
          <Route path="movie/:id" element={<Screen2 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
