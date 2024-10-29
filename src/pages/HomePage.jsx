import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../components/Card';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://fakestoreapi.com/products'); 
        setProducts(response.data);
      } catch (err) {
        setError(err.message || 'An error occurred while fetching data.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-200 to-purple-300">
      <header className="bg-white shadow-md sticky top-0 z-10">
        <div className="max-w-7xl mx-auto p-6">
          <h1 className="text-4xl font-extrabold text-center text-gray-800">
            Product Gallery
          </h1>
        </div>
      </header>
      <div className="p-8 max-w-7xl mx-auto">
        {loading && (
          <div className="flex justify-center items-center text-purple-600 font-semibold text-xl">
            Loading products...
          </div>
        )}
        {error && (
          <div className="flex justify-center items-center text-red-600 font-semibold text-xl">
            Error: {error}
          </div>
        )}
        {!loading && !error && (
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product) => (
              <Card key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
