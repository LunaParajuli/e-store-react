import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet";


const ProductDetail = () => {
  const [product, setProduct] = useState({})
  const param = useParams()
  const id = param.productId
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(
        res => setProduct(res.data)
      )
      .catch(err => console.log(err))

  }, [id])

  const addtocart = () => {

    const cartItems = JSON.parse(localStorage.getItem('cartData')) || []

    const productItem = {
      id: product.id,
      title: product.title,
      price: product.price,
      description: product.description,
      category: product.category,
      image: product.image,
      quantity: 1
    }
    console.log(cartItems)

    //Check if item is present in the cart or not
    const existingItem = cartItems.find(item => item.id === product.id)
    if (existingItem) {
      toast.error(`${product.title} is already present in cart.`)
    }
    else {
      cartItems.push(productItem)
      localStorage.setItem('cartData', JSON.stringify(cartItems))
      toast.success(`${product.title} is successfully added  to cart.`)
    }




  }

  return (
    <>
      <ToastContainer theme='colored' position='top-center' />

      <div className="product-section mb-5 ">
        <h1 className="text-center text-3xl my-5  font-bold">Product Detail</h1>
        <div className="flex flex-wrap justify-center my-5 align-center ">

          <div className="card-img w-[550px] h-[400px]  shadow-lg shadow-orange-300 mr-5  mt-5">
            <img src={product.image} alt="laptop" className="w-full  h-full hover:translate-y-[-10px] transistion-all delay-150" />
          </div>

          <div className="card-content border-1 border-black shadow-lg shadow-black hover:shadow-blue-400 w-[550px] h-[450px] py-5 ">
            <div className="w-full">
              <h2 className="font-bold  text-center w-full">{product.title}</h2>
              <h2 className="text-lg"><span className="font-semibold pl-5">Price-</span>Rs. {product.price}</h2>
              <p className="text-base"><span className="font-semibold pl-5">Category-</span>{product.category}</p>
              <p className="text-base mt-3 text-justify pl-5 pr-2">{product.description}</p>
            </div>

            <Link to={`/cart/${id}`}>
              <button className="mt-5 bg-blue-500 py-2 px-3 rounded-lg text-white hover:font-bold hover:shadow-lg hover:shadow-cyan-300 hover:translate-y-[-2px] transition-all delay-150 ml-5" onClick={addtocart}>Add to Cart</button>
            </Link>
          </div>

        </div>

      </div >

    </>
  )
}

export default ProductDetail