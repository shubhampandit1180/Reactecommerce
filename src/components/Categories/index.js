import React, { useEffect, useState } from "react";
import FeatureCard from "../../components/FeatureCard"; // Add this line

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchcategories = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      const data = await response.json();
      console.log(data);
      setCategories(data);
    };
    fetchcategories();
  }, []);

  if (categories.length === 0) return <div>Loading....</div>;

  return <FeatureCard cards={categories} />;
};

export default Categories;
