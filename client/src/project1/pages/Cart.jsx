import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  clearCart,
} from "../store/features/cart/cartSlice";
import { FaTrashAlt, FaPlus, FaMinus, FaShoppingBag } from "react-icons/fa";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems, totalPrice } = useSelector((state) => state.cart);
  const uniqueProductCount = cartItems.length;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="text-center">
          <div className="mb-6">
            <FaShoppingBag className="w-24 h-24 text-gray-300 mx-auto" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            Your cart is empty
          </h2>
          <p className="text-gray-500 mb-6">
            Looks like you haven't added any items yet
          </p>
          <Link
            to="/products"
            className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-200 font-medium"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
          <p className="text-gray-600 mt-1">
            {uniqueProductCount} {uniqueProductCount === 1 ? "item" : "items"}{" "}
            in your cart
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="flex-1">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              {/* Header Row */}
              <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 bg-gray-50 border-b border-b-gray-200 text-sm font-medium text-gray-600">
                <div className="col-span-6">Product</div>
                <div className="col-span-2 text-center">Price</div>
                <div className="col-span-2 text-center">Quantity</div>
                <div className="col-span-1 text-center">Total</div>
                <div className="col-span-1"></div>
              </div>

              {/* Cart Items List */}
              <div className="divide-y divide-gray-200">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="p-2 hover:bg-gray-50 transition-colors duration-150"
                  >
                    <div className="flex flex-col sm:flex-row gap-4">
                      {/* Product Image & Info */}
                      <div className="flex-1">
                        <div className="flex gap-4">
                          <div className="w-24 h-24 shrink-0 bg-gray-100 rounded-lg overflow-hidden">
                            <img
                              src={item.thumbnail}
                              alt={item.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900 mb-1">
                              {item.title}
                            </h3>
                            <p className="text-sm text-gray-500">In Stock</p>
                            {/* Mobile Price */}
                            <div className="md:hidden mt-2">
                              <span className="text-lg font-semibold text-gray-900">
                                ${(item.price * item.quantity).toFixed(2)}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Desktop Price */}
                      <div className="hidden md:flex md:items-center md:justify-center md:w-32">
                        <span className="text-gray-900 font-medium">
                          ${item.price.toFixed(2)}
                        </span>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center justify-between sm:justify-center gap-3">
                        <div className="flex items-center gap-3 bg-gray-100 rounded-lg px-3 py-2">
                          <button
                            onClick={() => dispatch(decrementQuantity(item.id))}
                            className="text-gray-600 hover:text-blue-600 transition-colors p-1"
                            aria-label="Decrease quantity"
                          >
                            <FaMinus size={12} />
                          </button>
                          <span className="w-8 text-center font-medium text-gray-900">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => dispatch(incrementQuantity(item.id))}
                            className="text-gray-600 hover:text-blue-600 transition-colors p-1"
                            aria-label="Increase quantity"
                          >
                            <FaPlus size={12} />
                          </button>
                        </div>

                        {/* Desktop Total & Remove */}
                        <div className="hidden md:flex md:items-center md:w-24 md:justify-center">
                          <span className="font-semibold text-gray-900">
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>

                        <button
                          onClick={() => dispatch(removeFromCart(item.id))}
                          className="text-red-500 hover:text-red-700 transition-colors p-2"
                          aria-label="Remove item"
                        >
                          <FaTrashAlt size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="px-4 sm:px-6 py-4 bg-gray-50 border-t border-t-gray-200">
                <button
                  onClick={() => dispatch(clearCart())}
                  className="text-red-600 hover:text-red-700 font-medium transition-colors"
                >
                  Clear Cart
                </button>
              </div>
            </div>

            {/* Continue Shopping Link */}
            <div className="mt-6">
              <Link
                to="/"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                ← Continue Shopping
              </Link>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:w-96">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Order Summary
              </h2>

              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal ({uniqueProductCount} items)</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="border-t border-t-gray-200 pt-3 mt-3">
                  <div className="flex justify-between text-lg font-bold text-gray-900">
                    <span>Total</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 mb-3">
                Proceed to Checkout
              </button>

              <p className="text-xs text-gray-500 text-center">
                Shipping and taxes calculated at checkout
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
