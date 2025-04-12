import React, { useState, useEffect } from "react";
import { category as categoryAPI } from "../../services/api";

const CategoryForm = ({ closeModal, category, onSuccess }) => {
  const [formData, setFormData] = useState({
    name: "",
    category_id: "",
  });

  const [allCategories, setAllCategories] = useState([]);

  useEffect(() => {
    // Fetch all categories for parent dropdown
    const fetchCategories = async () => {
      try {
        const response = await categoryAPI.getCategories();
        setAllCategories(response.data.data);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    if (category) {
      setFormData({
        name: category.name,
        category_id: category.category_id || "", // ensure fallback
      });
    }
  }, [category]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response;

      if (category) {
        response = await categoryAPI.updateCategory(category.id, formData);
      } else {
        response = await categoryAPI.createCategory(formData);
      }

      onSuccess(response.data.data, !!category);
    } catch (error) {
      console.error("Error saving category:", error);
      alert("Failed to save category.");
    }
  };

  return (
    <div className="category-form flex flex-col">
      <button
        className="text-white bg-gray-700 hover:bg-gray-600 rounded-full p-2 self-end"
        onClick={closeModal}
      >
        X
      </button>
      <h2 className="text-2xl font-bold mb-4">
        {category ? "Edit Category" : "Add New Category"}
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Category Name"
            required
          />
        </div>

        <div className="mb-4">
          <select
            name="category_id"
            value={formData.category_id}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="">-- No Parent (Top Level) --</option>
            {allCategories
              .filter((cat) => !category || cat.id !== category.id)
              .map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
          </select>
        </div>

        <button
          type="submit"
          className="mt-2 bg-blue-500 text-white p-2 rounded w-full"
        >
          {category ? "Update Category" : "Create Category"}
        </button>
      </form>
    </div>
  );
};

export default CategoryForm;
