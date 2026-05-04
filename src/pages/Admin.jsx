import { useState } from "react";

export default function Admin() {
  const [bookings] = useState([
    {
      service: "Haircut",
      name: "John Doe",
      date: "2026-05-10",
      time: "10:00",
    },
    {
      service: "Car Wash",
      name: "Mary Wanjiku",
      date: "2026-05-11",
      time: "14:00",
    },
  ]);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

      <div className="grid gap-4">
        {bookings.map((b, i) => (
          <div key={i} className="bg-white p-4 rounded-xl shadow">
            <h2 className="font-bold text-lg">{b.service}</h2>
            <p>{b.name}</p>
            <p className="text-gray-500">{b.date} - {b.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
}