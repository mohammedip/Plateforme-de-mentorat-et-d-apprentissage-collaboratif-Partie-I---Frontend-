import React from 'react';

export default function CategoryCard({ category, onEditCategory, onDeleteCategory }) {
    
    if (!category) {
        return <div>No category data available</div>;
    }

    const { name, parent_category, subcategories } = category;

    return (
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105 text-center">
        <h3 className="text-xl font-semibold text-white">{name}</h3>
        
        {parent_category && (
                <h5 className="text-lg font-medium text-white">
                <span className="text-lg font-medium text-green-500">Parent Category:</span> 
                {parent_category}
                </h5>
            )}
        {subcategories && subcategories.length > 0 && (
            <div>
            <h5 className="text-lg font-medium text-blue-500">Subcategories:</h5>
            <ul className="text-sm text-white">
                {subcategories.map((subcategory) => (
                <li key={subcategory.id}>{subcategory.name}</li>
                ))}
            </ul>
            </div>
        )}
        <div className="flex  mt-4">
            <button onClick={() => onEditCategory(category)} className="text-white bg-blue-500 hover:bg-blue-700 mr-2 rounded px-2 py-1">Edit</button>
            <button onClick={() => onDeleteCategory(category.id)} className="text-white bg-red-500 hover:bg-red-700 rounded px-2 py-1">Delete</button>
        </div>
        </div>
    );
}
