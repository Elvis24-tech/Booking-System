export default function ServiceCard({ service, onSelect }) {
    return (
      <div className="bg-white/5 border border-white/10 p-5 rounded-2xl hover:bg-white/10 transition">
  
        <h2 className="text-lg font-bold">{service.name}</h2>
  
        <p className="text-gray-400 text-sm mt-2">
          {service.desc}
        </p>
  
        <div className="flex justify-between items-center mt-5">
          <span className="text-cyan-400 font-bold">
            {service.price}
          </span>
  
          <button
            onClick={() => onSelect(service)}
            className="px-4 py-2 rounded-lg bg-cyan-500 text-black text-sm font-semibold hover:bg-cyan-400"
          >
            Book
          </button>
        </div>
      </div>
    );
  }