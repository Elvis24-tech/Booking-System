import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold text-blue-600">BookEase</h1>

        <div className="space-x-6 font-medium">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/book">Book</Link>
          <Link to="/admin" className="text-blue-600">
            Admin
          </Link>
        </div>
      </div>
    </nav>
  );
}