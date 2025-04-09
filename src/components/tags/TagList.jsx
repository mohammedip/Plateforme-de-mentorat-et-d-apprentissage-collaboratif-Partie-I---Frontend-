import { useEffect, useState } from 'react';
import { fetchTags } from '../../services/api';
import TagCard from './TagCard';

export default function TagList() {
  const [Tags, setTags] = useState([]);

  useEffect(() => {
    fetchTags()
      .then((data) => setTags(data))
      .catch((error) => console.error('Erreur API :', error));
  }, []);

  return (
    <section className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Tags</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {Tags.map((Tag, index) => (
          <TagCard key={index} name={Tag.name} />
        ))}
      </div>
    </section>
  );
}
