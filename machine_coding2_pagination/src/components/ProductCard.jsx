import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="flex w-80 border rounded-lg shadow-lg p-4 bg-white hover:shadow-xl transition-shadow duration-300">
      {/* Image */}
      <div className="w-1/3">
        <img
          className="h-32 w-32 object-cover rounded-lg"
          src={product.images[0]}
          alt={product.title}
        />
      </div>

      {/* Product Info */}
      <div className="w-2/3 pl-4 flex flex-col justify-between">
        <h2 className="text-lg font-bold text-gray-800">{product.title}</h2>
        <p className="text-sm text-gray-600 line-clamp-2">
          {product.description}
        </p>
        <p className="text-lg font-semibold text-green-600">${product.price}</p>
        <p className="text-sm text-yellow-500">Rating: {product.rating}</p>
        <p className="text-sm text-gray-500">
          {product.returnPolicy || "No Return Policy"}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
