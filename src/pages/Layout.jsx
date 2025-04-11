import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>

      <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="bg-gray-900 text-white shadow-lg py-4 px-6">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-3xl font-bold text-blue-500 hover:text-blue-400 transition-all duration-300">
                MyApp
                </h1>
                <ul className="flex space-x-8">
                <li>
                    <Link
                    to="/home"
                    className="text-lg font-semibold hover:text-blue-400 transition-all duration-300 transform hover:scale-105"
                    >
                    Home
                    </Link>
                </li>
                <li>
                    <Link
                    to="/categories"
                    className="text-lg font-semibold hover:text-blue-400 transition-all duration-300 transform hover:scale-105"
                    >
                    Categories
                    </Link>
                </li>
                <li>
                    <Link
                    to="/courses"
                    className="text-lg font-semibold hover:text-blue-400 transition-all duration-300 transform hover:scale-105"
                    >
                    Courses
                    </Link>
                </li>
                <li>
                    <Link
                    to="/tags"
                    className="text-lg font-semibold hover:text-blue-400 transition-all duration-300 transform hover:scale-105"
                    >
                    Tags
                    </Link>
                </li>
                </ul>
            </div>
            </nav>

      </header>
      <main className="min-h-[80vh]">
        <Outlet />
      </main>
      <footer className="bg-gray-100 text-center py-6 mt-10 border-t">
        <p className="text-gray-500">&copy; {new Date().getFullYear()} MyApp. All rights reserved.</p>
      </footer>
    </>
  );
}
