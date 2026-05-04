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

    const booking = {
      service: state?.name,
      price: state?.price,
      ...form,
    };

    console.log(booking);
    alert("Booking confirmed 🚀");
  };

  return (
    <div className="max-w-xl mx-auto px-6 py-10">

      <h1 className="text-2xl font-bold mb-6">
        Book: <span className="text-cyan-400">{state?.name}</span>
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white/5 border border-white/10 p-6 rounded-2xl space-y-4"
      >
        <input
          placeholder="Full Name"
          className="w-full p-3 bg-black/30 border border-white/10 rounded-lg"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          placeholder="Phone Number"
          className="w-full p-3 bg-black/30 border border-white/10 rounded-lg"
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />

        <input
          type="date"
          className="w-full p-3 bg-black/30 border border-white/10 rounded-lg"
          onChange={(e) => setForm({ ...form, date: e.target.value })}
        />

        <input
          type="time"
          className="w-full p-3 bg-black/30 border border-white/10 rounded-lg"
          onChange={(e) => setForm({ ...form, time: e.target.value })}
        />

        <button className="w-full bg-cyan-500 text-black py-3 rounded-lg font-semibold hover:bg-cyan-400">
          Confirm Booking
        </button>
      </form>
    </div>
  );
}