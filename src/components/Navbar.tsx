import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Treatments", href: "#treatments" },
  { label: "About", href: "#about" },
  { label: "Doctor", href: "#doctor" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const logo = `${import.meta.env.BASE_URL}images/logo.jpeg`;

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 md:px-8">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-black/5 bg-white/95 px-5 py-2.5 shadow-lg shadow-black/5 backdrop-blur-xl md:px-6">

        {/* Logo */}
        <a
          href="#home"
          className="flex items-center"
          onClick={() => setMobileOpen(false)}
        >
          <img
            src={logo}
            alt="Perfect Physiotherapy Centre"
            className="h-14 w-auto object-contain sm:h-16"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-semibold text-neutral-600 transition-colors duration-200 hover:text-[#b91c1c]"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden items-center gap-2 rounded-xl bg-[#b91c1c] px-5 py-3 text-sm font-bold text-white shadow-md shadow-[#b91c1c]/15 transition duration-300 hover:-translate-y-0.5 hover:bg-[#991b1b] md:flex"
        >
          <Phone size={16} />
          Book Appointment
        </a>

        {/* Mobile Button */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100 text-neutral-800 md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="mx-4 mt-2 overflow-hidden rounded-2xl border border-black/5 bg-white p-4 shadow-xl md:hidden">
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