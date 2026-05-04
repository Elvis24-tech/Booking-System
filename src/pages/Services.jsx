import { useNavigate } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";

export default function Services() {
  const navigate = useNavigate();

  const services = [
    { name: "Haircut", price: "KES 500", desc: "Clean professional cut" },
    { name: "Massage", price: "KES 1200", desc: "Full relaxation therapy" },
    { name: "Car Wash", price: "KES 800", desc: "Exterior + interior wash" },
    { name: "Facial", price: "KES 1500", desc: "Skin treatment session" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">

      <h1 className="text-3xl font-bold mb-8">
        Services
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <ServiceCard
            key={i}
            service={s}
            onSelect={(service) =>
              navigate("/book", { state: service })
            }
          />
        ))}
      </div>

    </div>
  );
}