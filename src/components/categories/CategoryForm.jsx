import React, { useState, useEffect } from "react";

const CategoryForm = ({ closeModal }) => {
  const [name, setName] = useState({
    name: ""
  });

  const onCreateCategory = (category) => {

    try {
      

    } catch (error) {
      console.error("error in adding category : "+ error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setName({
      [name]: value,
    });
  };

  return (
    <div className="category-form flex flex-col ">
      <button
        className="text-white bg-gray-700 hover:bg-gray-600 rounded-full p-2 self-end"
        onClick={closeModal}
      >
        X
      </button>
      <h2 className="text-2xl font-bold mb-4">Add New Category</h2>
      <form>
        
        <div>
          <input
            type="text"
            name="name"
            value={name.value}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Category Name"
          />
        </div>
        <button
        onClick={() => onCreateCategory(category)}
          type="submit"
          className="mt-4 bg-blue-500 text-white p-2 rounded"
        >
          Create Category
        </button>
      </form>
    </div>
  );
};

export default CategoryForm;
