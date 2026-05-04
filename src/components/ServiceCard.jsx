export default function ServiceCard({ service, onSelect }) {
    return (
      <div className="bg-white rounded-2xl shadow hover:shadow-xl transition p-5">
        <h2 className="text-xl font-bold">{service.name}</h2>
        <p className="text-gray-500 mt-1">{service.desc}</p>
  
        <div className="flex justify-between items-center mt-4">
          <span className="font-semibold text-blue-600">{service.price}</span>
  
          <button
            onClick={() => onSelect(service)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Book
          </button>
        </div>
      </div>
    );
  }