import React, { useState } from 'react';
import { Reviews } from '../Component'; // Make sure this path is correct

export function TestMovie() {
  const [searchTerm, setSearchTerm] = useState("");
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchReviews = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`http://www.omdbapi.com/?apikey=928b6b52&t=${searchTerm}`);
      const data = await response.json(); // Correctly parse the JSON response
      if (data.Response === "False") {
        throw new Error(data.Error);
      }
      setReviews([data]); // Ensuring the response is stored in an array
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchReviews();
  };

  return (
    <div className="container mx-auto p-4 bg-indigo-100 rounded-3xl my-3 gap-3">
      <form onSubmit={handleSearch} className="my-4">
        <input 
          type="text"
          className="border border-gray-300 rounded-xl p-4 w-full shadow-lg "
          placeholder="Search for a movie..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit" className="bg-indigo-500 text-white rounded-2xl mt-2 p-4 w-auto">Search</button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {reviews.map(review => (
        <Reviews
          key={review.imdbID}
          poster={review.Poster}
          rating={review.imdbRating}
          title={review.Title}
          review={review.Plot}
          date={review.Released}
          user={review.Actors}
          ratings={review.Ratings} // Passing the ratings array
        />
      ))}
    </div>
  );
}
