export default function Admin() {
  const bookings = [
    { service: "Haircut", name: "John", time: "10:00" },
    { service: "Massage", name: "Mary", time: "14:00" },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">

      <h1 className="text-3xl font-bold mb-6">
        Admin Dashboard
      </h1>

      <div className="grid gap-4">
        {bookings.map((b, i) => (
          <div
            key={i}
            className="bg-white/5 border border-white/10 p-4 rounded-xl"
          >
            <h2 className="font-bold text-cyan-400">
              {b.service}
            </h2>

            <p className="text-gray-300">{b.name}</p>
            <p className="text-gray-500 text-sm">{b.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
}