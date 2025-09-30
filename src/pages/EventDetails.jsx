import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import events from '../data/events.json';
import { useBookingDispatch, useBookingState } from '../context/BookingContext';

const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useBookingDispatch();
  const { cart } = useBookingState();

  const event = events.find(e => e.id === id);
  if (!event) return <p className="text-center mt-10">Event not found.</p>;

  const handleBook = () => {
    if (cart.find(e => e.id === event.id)) {
      navigate('/cart');
      return;
    }
    dispatch({ type: 'ADD', payload: event });
    navigate('/cart');
  };

  return (
    
    <div className="bg-white max-w-2xl mx-auto p-8 rounded-2xl shadow-md mt-6">
        <h1 className="text-4xl font-extrabold mb-8 text-gray-800 text-center">
        Event Details
      </h1>
      <h2 className="text-3xl font-extrabold mb-4 text-gray-800">{event.title}</h2>
      <p className="mb-2 text-gray-600 font-bold">
        {new Date(event.date).toLocaleString()} • {event.location}
      </p>
      <p className="mb-6 text-gray-700 leading-relaxed font-bold">{event.description}</p>
      <p className="text-2xl font-bold text-blue-600 mb-6 ">₹{event.price}</p>
      <button
        onClick={handleBook}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition w-full"
      >
        Book Now
      </button>
    </div>
  );
};

export default EventDetails;
