import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center px-6 py-20">
      <h1 className="text-5xl font-bold leading-tight">
        Smart Booking System for <span className="text-blue-600">Modern Businesses</span>
      </h1>

      <p className="mt-6 text-gray-600 max-w-xl">
        Manage appointments, reduce no-shows, and let customers book services in seconds.
      </p>

      <Link
        to="/services"
        className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700"
      >
        Get Started
      </Link>
    </div>
  );
}