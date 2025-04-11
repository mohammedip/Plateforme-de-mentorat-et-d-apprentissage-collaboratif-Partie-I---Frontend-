import { useEffect, useState } from 'react';
import { statistique } from '../services/api';

export default function Stats() {
  const [stats, setStats] = useState({
    courses: 0,
    categories: 0,
    tags: 0,
  });

  useEffect(() => {
    const getStats = async () => {
      try {
        const [coursesRes, categoriesRes, tagsRes] = await Promise.all([
          statistique.getCoursesStat(),
          statistique.getCategoriesStat(),
          statistique.getTagsStat(),
        ]);

        setStats({
          courses: coursesRes.data.data.CoursCount ,
          categories: categoriesRes.data.data.CategoryCount ,
          tags: tagsRes.data.data.TagCount ,
        });
      } catch (error) {
        console.error("Error fetching stats:", error);
      }
    };

    getStats();
  }, []);

  return (
    <section className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Platform Statistics</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-xl font-bold text-gray-700">Courses</h3>
          <p className="text-3xl text-blue-600 mt-2">{stats.courses}</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-xl font-bold text-gray-700">Categories</h3>
          <p className="text-3xl text-green-600 mt-2">{stats.categories}</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-xl font-bold text-gray-700">Tags</h3>
          <p className="text-3xl text-purple-600 mt-2">{stats.tags}</p>
        </div>
      </div>
    </section>
  );
}
