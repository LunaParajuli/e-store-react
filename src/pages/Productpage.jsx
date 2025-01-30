import React, { useState, useEffect } from 'react'
import Cards from '../components/usercomponents/Cards'
import axios from 'axios'
import { Helmet } from "react-helmet";

const Productpage = () => {
  const [product, setProduct] = useState([])

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products`)
      .then(
        res => setProduct(res.data)
      )
      .catch(err => console.log(err))
  })

  return (

    <>

      <Helmet>
        <title>Estore|Productpage</title>
        <meta name="description" content="Helmet application" />
      </Helmet>



      <div className="product-section">
        <h1 className="text-center text-3xl my-5 font-bold">All Products</h1>
        <div className="flex flex-wrap justify-evenly">
          {product.map((item) =>
            <Cards data={item} />

          )}

        </div>
      </div>


    </>
  )
}

export default Productpage