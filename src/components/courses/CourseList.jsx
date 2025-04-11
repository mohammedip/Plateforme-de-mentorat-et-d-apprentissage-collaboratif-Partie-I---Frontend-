import { useEffect, useState } from 'react';
import { course } from '../../services/api';
import CoursCard from './CourseCard';

export default function CoursList() {
    const [Courses, setCourses] = useState([]);
  
      useEffect(() => {
        const getCourses = async () => {
          try {
            const response = await course.getCourses();
            setCourses(response.data.data);
          } catch (error) {
            console.log(error);
          }
        };
        getCourses();
      }, []);
  
    return (
      <section className="p-6 bg-gray-50 min-h-screen">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Courses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Courses.map((Cours, index) => (
            <CoursCard
              key={index}
              title={Cours.title}
              description={Cours.description}
              difficulty={Cours.difficulty}
              mentor={Cours.mentor_id}
              videos={Cours.videos}
              category_id={Cours.category_id}
            />
          ))}
        </div>
      </section>
    );
  }
  
