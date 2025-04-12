export default function CoursCard({ course, onEdit, onDelete }) {
  const { title, description, difficulty, mentor_id, category_id, videos = [] } = course;

  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105 text-center relative">
      <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>

      <p className="text-gray-400 mb-2">
        <span className="text-lg text-white font-bold">Difficulty:</span> {difficulty}
      </p>

      <p className="text-gray-400 mb-2">
        <span className="text-lg text-white font-bold">Mentor:</span> {mentor_id || mentor || 'N/A'}
      </p>

      <p className="text-gray-400 mb-4">
        <span className="text-lg text-white font-bold">Category:</span> {category_id || 'N/A'}
      </p>

      <div className="mt-4">
        <h4 className="text-lg font-medium text-white mb-2">Videos:</h4>
        {/* {videos.length > 0 ? (
          <div className="flex flex-col gap-4">
            {videos.map((video) => (
              <div key={video.id} className="mb-4">
                <h6 className="text-gray-200">{video.title}</h6>
                <video
                  className="w-full rounded-xl"
                  controls
                  preload="metadata"
                  src={`http://localhost:5000/public/storage/${video.url}`}
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            ))}
          </div>
        ) : ( */}
          <p className="text-gray-400">No videos available.</p>
        {/* )} */}
      </div>

      <div className=" space-x-2 mt-2">
        <button
          onClick={onEdit}
          className="text-sm bg-yellow-400 text-black px-3 py-1 rounded hover:bg-yellow-500"
        >
          Edit
        </button>
        <button
          onClick={onDelete}
          className="text-sm bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
