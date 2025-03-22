import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Dishes from './pages/Dishes'
import Contacts from './pages/Contacts'
import Offeres from './pages/Offeres'

function App() {
 

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='cart' element={<Cart/>}/>
            <Route path='dishes' element={<Dishes/>}/>
            <Route path='contact' element={<Contacts/>}/>
            <Route path='offers' element={<Offeres/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
