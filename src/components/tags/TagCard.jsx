export default function TagCard({ name }) {
    return (
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105 text-center">
            <h3 className="text-xl font-semibold text-white">{name}</h3>
        </div> 
    );
  }
  