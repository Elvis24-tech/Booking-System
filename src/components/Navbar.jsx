import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/5 border-b border-white/10">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold tracking-wide text-cyan-400">
          BookFlow
        </h1>

        <div className="flex gap-6 text-sm text-gray-300">
          <Link className="hover:text-white" to="/">Home</Link>
          <Link className="hover:text-white" to="/services">Services</Link>
          <Link className="hover:text-white" to="/admin">Admin</Link>
        </div>
      </div>
    </div>
  );
}