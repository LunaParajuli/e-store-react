import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Layout from './components/Layout'
import Homepage from './pages/Homepage'
import Productpage from './pages/Productpage'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import Register from './pages/Register'


import CartItems from './redux/CartItems'



const Myroute = () => {
  return (
    <>
      <Router>
        <Routes>


          <Route path='/' element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path='product' element={<Productpage />} />
            <Route path='productdetail/:productId' element={<ProductDetail />} />
            <Route path='cart/:productId' element={<Cart />} />
            <Route path='register' element={<Register />} />



            <Route path='redux/cart' element={<CartItems />} />



          </Route>

        </Routes>
      </Router >
    </>
  )
}

export default Myroute

