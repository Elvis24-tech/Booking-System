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

    console.log("BOOKING:", booking);
    alert("Booking successful!");
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">
        Book: {state?.name || "Service"}
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 shadow rounded-xl">
        <input
          placeholder="Full Name"
          className="w-full p-3 border rounded"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          placeholder="Phone Number"
          className="w-full p-3 border rounded"
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />

        <input
          type="date"
          className="w-full p-3 border rounded"
          onChange={(e) => setForm({ ...form, date: e.target.value })}
        />

        <input
          type="time"
          className="w-full p-3 border rounded"
          onChange={(e) => setForm({ ...form, time: e.target.value })}
        />

        <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
          Confirm Booking
        </button>
      </form>
    </div>
  );
}