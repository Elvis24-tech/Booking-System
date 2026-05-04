import { useState } from "react";
import ServiceCard from "../components/ServiceCard";
import { useNavigate } from "react-router-dom";

export default function Services() {
  const navigate = useNavigate();

  const [services] = useState([
    { id: 1, name: "Haircut", price: "KES 500", desc: "Professional haircut" },
    { id: 2, name: "Car Wash", price: "KES 800", desc: "Full exterior wash" },
    { id: 3, name: "Massage", price: "KES 1500", desc: "Relaxing therapy" },
  ]);

  const handleSelect = (service) => {
    navigate("/book", { state: service });
  };

  return (
    <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-3 gap-6">
      {services.map((s) => (
        <ServiceCard key={s.id} service={s} onSelect={handleSelect} />
      ))}
    </div>
  );
}