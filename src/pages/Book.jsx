import { useLocation } from "react-router-dom";
import { useState } from "react";

export default function Book() {
  const { state } = useLocation();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking confirmed 🚀");
  };

  return (
    <div className="max-w-xl mx-auto px-6 py-12">

      <h1 className="text-2xl font-bold mb-6">
        Booking: <span className="text-cyan-400">{state?.name}</span>
      </h1>

      <form onSubmit={handleSubmit} className="card p-6 space-y-4">

        <input
          placeholder="Full Name"
          className="input"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          placeholder="Phone"
          className="input"
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />

        <input
          type="date"
          className="input"
          onChange={(e) => setForm({ ...form, date: e.target.value })}
        />

        <input
          type="time"
          className="input"
          onChange={(e) => setForm({ ...form, time: e.target.value })}
        />

        <button className="btn-primary w-full">
          Confirm Booking
        </button>

      </form>
    </div>
  );
}