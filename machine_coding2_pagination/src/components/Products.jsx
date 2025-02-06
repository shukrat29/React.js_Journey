import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const PAGE_SIZE = 10;

const Products = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const fetchProduct = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=500");
    const data = await res.json();
    console.log(data);
    setProducts(data.products);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  const totalProducts = products.length;
  const numberOfPages = Math.ceil(totalProducts / PAGE_SIZE);
  const start = currentPage * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  console.log(totalProducts);

  const handlePageChange = (n) => {
    setCurrentPage(n);
  };

  const gotoPreviousPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const gotoNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  return (
    <>
      <div className="p-5">
        <button
          disabled={currentPage === numberOfPages}
          onClick={() => gotoPreviousPage()}
        >
          ⬅️
        </button>
        {[...Array(numberOfPages).keys()].map((n) => (
          <button
            key={n}
            className="p-2 m-2 border border-black cursor-pointer"
            onClick={() => handlePageChange(n)}
          >
            {n}
          </button>
        ))}
        <button onClick={() => gotoNextPage()}>➡️</button>
      </div>
      <div className="flex flex-wrap gap-4 p-8">
        {products.slice(start, end).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Products;
