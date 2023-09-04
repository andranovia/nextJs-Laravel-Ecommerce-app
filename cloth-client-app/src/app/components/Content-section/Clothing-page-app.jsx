'use client';

import React, { useState } from 'react';
import ClothingCardComponent from './Clothing-card-app';

const ClothingPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('price');
  const [filterBy, setFilterBy] = useState('all');

  return (
    <div className="min-h-screen">
      <div className="container max-w-8xl mx-auto sm:max-w-7xl">
        <div className="bg-white  mb-4">
          <h1 className="text-2xl font-semibold my-4 ml-7">Browse</h1>
          <div className="flex flex-col justify-center md:flex-row gap-4">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-4 py-2 rounded-lg border focus:outline-none focus:ring focus:border-blue-400 flex-grow"
            />

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 rounded-lg border focus:outline-none focus:ring focus:border-blue-400"
            >
              <option value="price">Sort by Price</option>
              <option value="name">Sort by Name</option>
            </select>

            <select
              value={filterBy}
              onChange={(e) => setFilterBy(e.target.value)}
              className="px-4 py-2 rounded-lg border focus:outline-none focus:ring focus:border-blue-400"
            >
              <option value="all">All Items</option>
              <option value="men">Men's Clothing</option>
              <option value="women">Women's Clothing</option>
            </select>
          </div>
          <div className="mt-[2rem] p-4">
            <ClothingCardComponent
              searchQuery={searchQuery}
              sortBy={sortBy}
              filterBy={filterBy}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClothingPage;