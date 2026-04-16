import React from 'react'
import { useSelector } from 'react-redux';
import {Link } from "react-router-dom"

const Navbar = () => {
  // Get unique product count (number of different products)
  const uniqueProductCount = useSelector((state) => state.cart.cartItems.length);
  return (
    <div className=' flex justify-between px-18 p-3 fixed left-0 right-0 border border-gray-300 bg-white z-10'>
      <div>Menu</div>
      <div className=' flex gap-4'>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
      </div>
      <div>
        <div className="relative">
          <Link to="/cart">
            Cart
            {uniqueProductCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-semibold rounded-full h-5 w-5 flex items-center justify-center">
                {uniqueProductCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
