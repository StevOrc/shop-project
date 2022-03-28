import React from "react";
import "./directory.styles.scss";
import CategoryItem from "../components/category-tiem/category-item.component";

function Directory({ categories }) {
  return (
    <div className="categories-container">
      {categories.map((category) => {
        return <CategoryItem key={category.id} category={category} />;
      })}
    </div>
  );
}

export default Directory;
