import React from 'react';
import { Link } from 'react-router-dom';

const EventCard = ({ event }) => {
  const { id, title, date, location, price } = event;

  return (
    <div className="bg-white p-5 rounded-2xl shadow hover:shadow-lg transform hover:-translate-y-1 transition">
      <h3 className="text-lg font-bold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-500 font-bold">{new Date(date).toLocaleDateString()}</p>
      <p className="text-sm text-gray-600 font-bold">{location}</p>
      <p className=" text-blue-600 mt-3 font-bold">₹{price}</p>
      <Link
        to={`/events/${id}`}
        className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        View Details
      </Link>
    </div>
  );
};

export default EventCard;
