import React, { useEffect, useState } from "react";
import { course as courseAPI, category as categoryAPI } from "../../services/api";

const CoursForm = ({ closeModal, onSuccess, course }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category_id: "",
    mentor_id: "",
    price: "",
    difficulty: "",
  });

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await categoryAPI.getCategories();
        setCategories(response.data.data);
      } catch (err) {
        console.error("Failed to load categories:", err);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    if (course) {
      setFormData({
        title: course.title || "",
        description: course.description || "",
        category_id: course.category_id || "",
        mentor_id: course.mentor_id || "",
        price: course.price || "",
        difficulty: course.difficulty || "",
      });
    }
  }, [course]);

  const handleChange = (e) => {
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
      if (course) {
        response = await courseAPI.updateCourse(course.id, formData);
      } else {
        response = await courseAPI.createCourse(formData);
      }

      onSuccess(response.data.data, !!course);
      closeModal();
    } catch (error) {
      console.error("Error saving course:", error);
      alert("Failed to save course.");
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg">
      <button
        onClick={closeModal}
        className="text-white bg-gray-700 hover:bg-gray-600 rounded-full p-2 self-end mb-4"
      >
        X
      </button>
      <h2 className="text-xl font-bold mb-4">
        {course ? "Edit Course" : "Add New Course"}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          placeholder="Course Title"
          required
        />

        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          placeholder="Description"
          rows={4}
          required
        />

        <select
          name="category_id"
          value={formData.category_id}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>

        <input
          type="number"
          name="mentor_id"
          value={formData.mentor_id}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          placeholder="Mentor ID"
          required
        />

        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          placeholder="Price"
          required
        />

        <select
          name="difficulty"
          value={formData.difficulty}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Select Difficulty</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          {course ? "Update Course" : "Create Course"}
        </button>
      </form>
    </div>
  );
};

export default CoursForm;
