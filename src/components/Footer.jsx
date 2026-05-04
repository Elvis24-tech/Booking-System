export default function Footer() {
    return (
      <footer className="border-t border-white/10 mt-20 bg-[#0b1220]/60 backdrop-blur-xl">
  
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between gap-8">
  
          {/* Brand */}
          <div>
            <h2 className="text-cyan-400 font-bold text-lg">
              BookFlow
            </h2>
  
            <p className="text-slate-400 text-sm mt-2 max-w-xs">
              Simple, fast booking system for modern service businesses.
            </p>
          </div>
  
          {/* Links */}
          <div className="flex gap-10 text-sm text-slate-300">
  
            <div className="space-y-2">
              <p className="text-white font-semibold">Product</p>
              <p className="hover:text-white cursor-pointer">Features</p>
              <p className="hover:text-white cursor-pointer">Pricing</p>
              <p className="hover:text-white cursor-pointer">Demo</p>
            </div>
  
            <div className="space-y-2">
              <p className="text-white font-semibold">Company</p>
              <p className="hover:text-white cursor-pointer">About</p>
              <p className="hover:text-white cursor-pointer">Contact</p>
              <p className="hover:text-white cursor-pointer">Support</p>
            </div>
  
          </div>
  
        </div>
  
        {/* Bottom bar */}
        <div className="border-t border-white/10 py-4 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} BookFlow. All rights reserved.
        </div>
  
      </footer>
    );
  }