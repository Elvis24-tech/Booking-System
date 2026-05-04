import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Book from "./pages/Book";
import Admin from "./pages/Admin";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">

        {/* NAVBAR */}
        <Navbar />

        {/* MAIN CONTENT */}
        <main className="flex-1 pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/book" element={<Book />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>

        {/* FOOTER */}
        <Footer />

      </div>
    </BrowserRouter>
  );
}