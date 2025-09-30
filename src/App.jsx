import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import EventList from './pages/EventList';
import EventDetails from './pages/EventDetails';
import BookingCart from './pages/BookingCart';

const App = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<EventList />} />
          <Route path="/events/:id" element={<EventDetails />} />
          <Route path="/cart" element={<BookingCart />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
