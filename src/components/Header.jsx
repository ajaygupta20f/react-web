import React from 'react';
import { Link } from 'react-router-dom';
import { useBookingState } from '../context/BookingContext';
import { ShoppingCart } from 'lucide-react'; 

const Header = () => {
  const { cart } = useBookingState();

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
     
        <Link
          to="/"
          className="text-2xl font-extrabold text-white tracking-wide hover:scale-105 transition-transform"
        >
          EventBook
        </Link>

     
        <nav className="flex items-center gap-4">
          <Link
            to="/"
            className="flex items-center gap-2 bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition"
          >
            Events
          </Link>

          <Link
            to="/cart"
            className="flex items-center gap-2 bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition"
          >
            <ShoppingCart size={18} />
            <span>Cart ({cart.length})</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
