import React from "react";

const Course = ({ title, description, price, rating, label, image }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg overflow-hidden border transition-shadow duration-300 ">
     
        {image && (
          <img src={image} alt={title} className="object-cover w-full h-48 " />
        )}
        <div>
        {label && (
          <span className="absolute top-2 right-2 bg-purple-500 text-white text-sm px-2 py-1 rounded-full">
            {label}
          </span>
        )}
      </div>
      <h3 className="text-lg font-semibold p-2">{title}</h3>
      <p className="text-sm text-gray-600 p-2">{description}</p>
      <div className="mt-2 flex justify-between tex-sm p-2">
        <span className="text-yellow-500">★ {rating}</span>
        <span className="text-gray-500">{price} 🪙</span>
      </div>
      <p className="text-xs text-muted-foreground mt-1 p-4">📘 Lifetime access</p>
    </div>
  );
};

export default Course;
