import { useEffect, useState } from 'react';
import { course as courseAPI } from '../../services/api';
import CoursCard from './CourseCard';
import CoursForm from './CourseForm';

export default function CoursList() {
  const [courses, setCourses] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCourse, setEditingCourse] = useState(null);

  // Fetch all courses
  const fetchCourses = async () => {
    try {
      const response = await courseAPI.getCourses();
      setCourses(response.data.data);
    } catch (error) {
      console.log("Error fetching courses:", error);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const openModal = () => {
    setEditingCourse(null); // Reset form
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleEdit = async (courseId) => {
    try {
      const response = await courseAPI.getCourse(courseId);
      setEditingCourse(response.data.data);
      setIsModalOpen(true);
    } catch (error) {
      console.error("Error loading course:", error);
    }
  };

  const handleDelete = async (courseId) => {
    if (!window.confirm("Are you sure you want to delete this course?")) return;

    try {
      await courseAPI.deleteCourse(courseId);
      setCourses(courses.filter((c) => c.id !== courseId));
    } catch (error) {
      console.error("Error deleting course:", error);
    }
  };

  const handleSuccess = (savedCourse, isEdit) => {
    if (isEdit) {
      setCourses((prev) =>
        prev.map((c) => (c.id === savedCourse.id ? savedCourse : c))
      );
    } else {
      setCourses((prev) => [...prev, savedCourse]);
    }
    closeModal();
  };

  return (
    <section className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Courses</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {courses.map((cours, index) => (
          <CoursCard
            key={index}
            course={cours}
            onEdit={() => handleEdit(cours.id)}
            onDelete={() => handleDelete(cours.id)}
          />
        ))}
      </div>

      <button
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-md"
        onClick={openModal}
      >
        Add Course
      </button>

      {isModalOpen && (
        <div
          className="fixed inset-0 flex justify-center items-center z-50"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
        >
          <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 sm:w-96">
            <CoursForm
              closeModal={closeModal}
              onSuccess={handleSuccess}
              course={editingCourse}
            />
          </div>
        </div>
      )}
    </section>
  );
}
