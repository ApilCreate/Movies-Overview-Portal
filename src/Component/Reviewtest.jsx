import React from 'react';
import { Star } from 'lucide-react';

export function Reviews({ poster, rating, title, review, date, user, ratings }) {
  return (
    <div className="container mx-auto bg-indigo-500 p-5 w-4/5 flex flex-row rounded-xl my-5 shadow-lg shadow-indigo-500/50">
      <div className="flex">
        <img className='w-1/3 h-auto bg-indigo-400 p-1 rounded-3xl my-3 mx-auto object-cover shadow-lg shadow-indigo-700' src={poster} alt="Poster" />
        <div className="text-white p-5 w-2/3">
          <div className="flex flex-row gap-1 items-center mb-2">
            <h1>Rating:</h1>
            <Star fill="#ff980a" color="#ff980a" />
            <p>{rating}</p>
          </div>
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="my-2">{review}</p>
          <p className="font-semibold">Published Date: {date}</p>
          <p className="font-semibold">Published By: {user}</p>
          <div className="mt-4">
            <h2 className="text-lg font-bold">Ratings:</h2>
            {ratings.map((rating, index) => (
              <p key={index} className="text-sm">
                {rating.Source}: {rating.Value}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
