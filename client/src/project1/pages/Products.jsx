import React, { useEffect, useState } from "react";
import { FaRegStar } from "react-icons/fa";
import { addToCart } from "../store/features/cart/cartSlice";
import { useDispatch } from "react-redux";

const Products = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showProductQty, setShowProductQty] = useState(10);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setValue(data.products);
    } catch (error) {
      console.log(`message:${error.message}`);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  const startIndex = (currentPage - 1) * showProductQty;
  const endIndex = startIndex + showProductQty;
  const currentProducts = value.slice(startIndex, endIndex);

  const handleAddToCart = (item) => {
    // Prepare the item with correct structure for DummyJSON
    const cartItem = {
      id: item.id, // DummyJSON uses 'id', not '_id'
      title: item.title,
      price: item.price,
      thumbnail: item.thumbnail,
      quantity: 1,
      rating: item.rating,
    };
    dispatch(addToCart(cartItem));
  };
  return (
    <>
      <div>
        <div className="flex flex-wrap gap-4 justify-center ">
          {currentProducts?.map((item) => (
            <div
              key={item.id}
              className="border border-gray-300 w-48 p-1 space-y-2 shadow-2xl"
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="h-36 w-48 object-cover bg-gray-200 p-2"
              />
              <h2 className="font-bold text-gray-700">
                {item.title.slice(0, 18)}
              </h2>
              <div className="flex justify-between px-3 text-sm font-bold text-gray-600">
                <p>
                  <span>$ </span>
                  {item.price}
                </p>
                <p className="flex items-center gap-1">
                  <span className="text-yellow-600">
                    <FaRegStar />
                  </span>
                  {item.rating}
                </p>
              </div>
              <button
                onClick={() => handleAddToCart(item)}
                className="w-full bg-blue-400 p-2 text-white font-bold"
              >
                Add To Cart
              </button>
            </div>
          ))}
        </div>
        <div className="my-2">
          <span>
            Page {currentPage} of {Math.ceil(value.length / showProductQty)}
          </span>
        </div>
        <div className="space-x-2 my-3">
          <button
            onClick={() => setCurrentPage((prev) => prev - 1)}
            disabled={currentPage === 1}
            className="border p-2 w-24"
          >
            Previous
          </button>
          <button
            onClick={() => setCurrentPage((prev) => prev + 1)}
            disabled={endIndex >= value.length}
            className="border p-2 w-24"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Products;
