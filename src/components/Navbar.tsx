import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Treatments", href: "#treatments" },
  { label: "About", href: "#about" },
  { label: "Doctor", href: "#doctor" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 md:px-8">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-black/5 bg-white/90 px-5 py-3 shadow-lg shadow-black/5 backdrop-blur-xl md:px-6">
        
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#b91c1c] text-sm font-extrabold text-white">
            PPC
          </div>

          <div className="hidden sm:block">
            <p className="text-sm font-extrabold tracking-tight text-neutral-900">
              Perfect Physiotherapy
            </p>
            <p className="text-[11px] font-medium text-neutral-500">
              Centre
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-semibold text-neutral-600 transition hover:text-[#b91c1c]"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden items-center gap-2 rounded-xl bg-[#b91c1c] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#991b1b] md:flex"
        >
          <Phone size={16} />
          Book Appointment
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100 md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="mx-4 mt-2 rounded-2xl border border-black/5 bg-white p-4 shadow-xl md:hidden">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-semibold text-neutral-700 transition hover:bg-neutral-50 hover:text-[#b91c1c]"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-[#b91c1c] px-4 py-3 text-sm font-bold text-white"
            >
              <Phone size={16} />
              Book Appointment
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;