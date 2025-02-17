// write the book component code here
import React from "react";

const BookCard = ({ book }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-4 m-4 w-64 transform transition duration-500 hover:scale-105">
      <img
        src={book.image}
        alt={book.name}
        className="w-full h-40 object-cover rounded-lg"
      />
      <h3 className="text-lg font-semibold mt-2">{book.name}</h3>
      <p className="text-gray-500 text-sm">{book.author}</p>
      <button className="mt-3 bg-blue-500 text-white py-1 px-3 rounded-lg hover:bg-blue-600">
        View Details
      </button>
    </div>
  );
};

export default BookCard;
