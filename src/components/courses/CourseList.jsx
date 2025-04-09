import { useEffect, useState } from 'react';
import { fetchCourses } from '../../services/api';
import CoursCard from './CourseCard';

export default function CoursList() {
  const [Courses, setCourses] = useState([]);

  useEffect(() => {
    fetchCourses()
      .then((data) => setCourses(data))
      .catch((error) => console.error('Erreur API :', error));
  }, []);

  return (
    <section className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Courses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {Courses.map((Cours, index) => (
          <CoursCard key={index} title={Cours.title} />
        ))}
      </div>
    </section>
  );
}
