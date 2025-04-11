import { useEffect, useState } from "react";
import { category } from "../../services/api";
import CategoryCard from "./CategoryCard";
import CategoryForm from "./CategoryForm";

export default function CategoryList() {
  const [categories, setCategories] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await category.getCategories();
        setCategories(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCategories();
  }, []);

  const onEditCategory = (category) => {
    
    setIsModalOpen(true);

    try {

    } catch (error) {
      
    }
  };

  const onDeleteCategory = (categoryId) => {

  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
        Categories
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <CategoryCard
            key={index}
            category={category}
            onEditCategory={() => onEditCategory(category.id)}
            onDeleteCategory={() => onDeleteCategory(category.id)}
          />
        ))}
      </div>

      <button
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-md"
        onClick={openModal}
      >
        Add Category
      </button>

      {isModalOpen && (
        <div
          className="fixed inset-0 flex justify-center items-center z-50"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
        >
          <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 sm:w-96">
            <CategoryForm closeModal={closeModal} />
          </div>
        </div>
      )}
    </section>
  );
}
