import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">

      <div className="text-center max-w-3xl">

        <p className="text-cyan-400 text-sm mb-3">
          Smart Booking System
        </p>

        <h1 className="text-5xl font-bold leading-tight">
          Build a booking system that actually <span className="text-cyan-400">sells</span>
        </h1>

        <p className="text-slate-400 mt-5">
          Simple, fast and modern scheduling system for service businesses.
        </p>

        <Link to="/services" className="btn-primary inline-block mt-8">
          Get Started
        </Link>

      </div>
    </div>
  );
}