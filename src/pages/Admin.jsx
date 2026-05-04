export default function Admin() {
  const bookings = [
    { service: "Haircut", name: "John", time: "10:00" },
    { service: "Massage", name: "Mary", time: "14:00" },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">

      <h1 className="text-3xl font-bold mb-6">
        Admin Dashboard
      </h1>

      <div className="grid gap-4">

        {bookings.map((b, i) => (
          <div key={i} className="card p-4 flex justify-between items-center">

            <div>
              <h2 className="text-cyan-400 font-semibold">
                {b.service}
              </h2>
              <p className="text-slate-400 text-sm">{b.name}</p>
            </div>

            <span className="text-sm text-slate-300">
              {b.time}
            </span>

          </div>
        ))}

      </div>

    </div>
  );
}