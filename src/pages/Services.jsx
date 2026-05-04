import { useNavigate } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";

export default function Services() {
  const navigate = useNavigate();

  const services = [
    { name: "Haircut", price: "KES 500", desc: "Professional barber haircut" },
    { name: "Massage", price: "KES 1200", desc: "Relaxing therapy session" },
    { name: "Car Wash", price: "KES 800", desc: "Full exterior cleaning" },
    { name: "Facial Care", price: "KES 1500", desc: "Skin treatment service" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">

      <h1 className="text-3xl font-bold mb-8">
        Available Services
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