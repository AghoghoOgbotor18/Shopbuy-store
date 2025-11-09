import React from "react";
import { FaMinus, FaPlus, FaRegTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromCart, updateQuantity } from "../Features/Cart/CartSlice";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-semibold mb-2">Your Cart is Empty</h2>
        <p className="text-gray-600 mb-6">Add some products to your cart.</p>
        <Link
          to="/"
          className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-10 text-center md:text-left">
        Shopping Cart
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Cart Items Section */}
        <div className="lg:col-span-2 bg-white shadow-md rounded-lg p-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row md:items-center justify-between gap-6 py-6 border-b border-gray-200"
            >
              <div className="flex items-center gap-4">
                <Link to={`/product/${item.id}`}>
                  <img
                    src={item.images}
                    alt={item.title}
                    className="w-24 h-24 object-cover rounded-lg border"
                  />
                </Link>

                <div>
                  <Link
                    to={`/product/${item.id}`}
                    className="font-semibold text-lg hover:text-blue-600"
                  >
                    {item.title}
                  </Link>
                  <p className="text-gray-600 mt-1">&#8358;{item.price}</p>
                  <div className="flex items-center gap-3 mt-3">
                    <button
                      onClick={() =>
                        dispatch(
                          updateQuantity({
                            id: item.id,
                            quantity: Math.max(0, item.quantity - 1),
                          })
                        )
                      }
                      className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full"
                    >
                      <FaMinus size={10} />
                    </button>
                    <span className="text-sm font-medium w-6 text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        dispatch(
                          updateQuantity({
                            id: item.id,
                            quantity: Math.max(0, item.quantity + 1),
                          })
                        )
                      }
                      className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full"
                    >
                      <FaPlus size={10} />
                    </button>
                    <button
                      onClick={() => dispatch(removeFromCart(item.id))}
                      className="ml-6 text-red-500 hover:text-red-700"
                    >
                      <FaRegTrashAlt size={18} />
                    </button>
                  </div>
                </div>
              </div>

              <div className="text-right md:pr-4">
                <p className="font-semibold text-gray-800">
                  &#8358;{(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary Section */}
        <div className="bg-white shadow-md rounded-lg p-6 h-fit">
          <h3 className="text-xl font-bold mb-6 text-gray-800">
            Order Summary
          </h3>

          <div className="space-y-3 text-gray-700">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>&#8358;{total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between border-t pt-3">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between border-t pt-3 font-semibold text-lg">
              <span>Total</span>
              <span>&#8358;{total.toFixed(2)}</span>
            </div>
          </div>

          <button className="mt-6 w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
