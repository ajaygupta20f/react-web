import React, { useState, useMemo } from 'react';
import events from '../data/events.json';
import EventCard from '../components/EventCard';

const EventList = () => {
  const [sortBy, setSortBy] = useState('date');

  const sortedEvents = useMemo(() => {
    const copy = [...events];
    if (sortBy === 'price-asc') return copy.sort((a, b) => a.price - b.price);
    if (sortBy === 'price-desc') return copy.sort((a, b) => b.price - a.price);
    return copy.sort((a, b) => new Date(a.date) - new Date(b.date));
  }, [sortBy]);

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Events</h1>
        <select
          value={sortBy}
          onChange={e => setSortBy(e.target.value)}
          className="border rounded px-2 py-1"
        >
          <option value="date">Sort by date</option>
          <option value="price-asc">Price: low to high</option>
          <option value="price-desc">Price: high to low</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {sortedEvents.map(ev => (
          <EventCard key={ev.id} event={ev} />
        ))}
      </div>
    </div>
  );
};

export default EventList;
