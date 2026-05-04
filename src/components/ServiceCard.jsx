export default function ServiceCard({ service, onSelect }) {
    return (
      <div className="card p-5 hover:border-cyan-500/30 transition">
  
        <h2 className="text-lg font-bold">{service.name}</h2>
  
        <p className="text-slate-400 text-sm mt-2">
          {service.desc}
        </p>
  
        <div className="flex justify-between items-center mt-5">
  
          <span className="text-cyan-400 font-semibold">
            {service.price}
          </span>
  
          <button
            onClick={() => onSelect(service)}
            className="btn-primary"
          >
            Book
          </button>
  
        </div>
      </div>
    );
  }