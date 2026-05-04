import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="fixed top-0 w-full z-50 bg-[#0b1220]/80 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

        <h1 className="text-cyan-400 font-bold text-xl">
          BookFlow
        </h1>

        <div className="flex gap-6 text-sm text-slate-300">
          <Link className="hover:text-white" to="/">Home</Link>
          <Link className="hover:text-white" to="/services">Services</Link>
          <Link className="hover:text-white" to="/admin">Admin</Link>
        </div>

      </div>
    </div>
  );
}