import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-3xl">

        <div className="text-cyan-400 text-sm mb-4">
          ✨ Smart Booking System for Modern Businesses
        </div>

        <h1 className="text-5xl font-bold leading-tight">
          Turn Walk-ins into <span className="text-cyan-400">Online Bookings</span>
        </h1>

        <p className="text-gray-400 mt-6">
          A fast, modern booking system for salons, barbershops, clinics and service businesses.
        </p>

        <Link
          to="/services"
          className="mt-8 inline-block px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold shadow-lg shadow-cyan-500/20"
        >
          Start Booking
        </Link>
      </div>
    </div>
  );
}