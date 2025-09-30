import React from 'react';
import { useBookingState, useBookingDispatch } from '../context/BookingContext';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react'; 

const BookingCart = () => {
  const { cart } = useBookingState();
  const dispatch = useBookingDispatch();

  const total = cart.reduce((sum, e) => sum + e.price, 0);

  return (
    <div className="max-w-3xl mx-auto mt-10">
      <h1 className="text-4xl font-extrabold mb-8 text-gray-800 text-center">
        Your Booking Cart
      </h1>

      {cart.length === 0 ? (
        <div className="bg-white p-10 rounded-2xl shadow-md text-center">
          <ShoppingCart className="mx-auto mb-4 text-gray-400" size={48} />
          <p className="mb-4 text-gray-600 text-lg">Your cart is empty.</p>
          <Link
            to="/"
            className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:opacity-90 transition"
          >
            Browse Events
          </Link>
        </div>
      ) : (
        <div className="space-y-6">
          {cart.map(item => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <div>
                <h3 className="font-semibold text-xl text-gray-800">{item.title}</h3>
                <p className="text-sm text-gray-500 mt-1">
                  {item.location} • {new Date(item.date).toLocaleDateString()}
                </p>
              </div>
              <div className="flex items-center gap-6">
                <span className="font-bold text-blue-600 text-lg">₹{item.price}</span>
                <button
                  onClick={() => dispatch({ type: 'REMOVE', payload: item.id })}
                  className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-600 transition cursor-pointer"
                 
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-6 rounded-xl shadow flex justify-between items-center text-white">
            <strong className="text-lg">Total:</strong>
            <span className="text-3xl font-extrabold">₹{total}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingCart;
