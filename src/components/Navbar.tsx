import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { href: '#impacto', label: 'Impacto' },
  { href: '#destinos', label: 'Destinos' },
  { href: '#experiencias', label: 'Experiencias' },
  { href: '#consejos', label: 'Guía' },
  { href: '#cuestionario', label: 'Cuestionario' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 36);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-colors duration-200 ${
        isScrolled || mobileOpen
          ? 'bg-[#F8F6EF]/95 backdrop-blur-md border-b border-[#153E35]/10 text-[#153E35]'
          : 'bg-[#153E35]/40 backdrop-blur-sm border-b border-[#F8F6EF]/15 text-[#F8F6EF]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#inicio"
          onClick={handleLinkClick}
          className="font-display text-lg font-bold tracking-tight whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#247C83] rounded-sm"
        >
          El Verdadero Turismo
        </a>

        {/* Zone 2: 5 concise single-line text navigation links */}
        <nav
          aria-label="Navegación principal"
          className="hidden md:flex items-center gap-6 text-sm font-medium"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`whitespace-nowrap shrink-0 py-1 border-b border-transparent transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#247C83] ${
                isScrolled
                  ? 'text-[#153E35]/80 hover:text-[#153E35] hover:border-[#247C83]'
                  : 'text-[#F8F6EF]/90 hover:text-[#F8F6EF] hover:border-[#E9C99B]'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary action + mobile menu trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#compromiso"
            onClick={handleLinkClick}
            className={`hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#247C83] ${
              isScrolled
                ? 'bg-[#247C83] text-[#F8F6EF] hover:bg-[#1C6369]'
                : 'bg-[#E9C99B] text-[#153E35] hover:bg-[#DFB980]'
            }`}
          >
            Compromiso
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-[#247C83]"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <nav
          aria-label="Menú móvil"
          className="md:hidden bg-[#F8F6EF] text-[#153E35] border-b border-[#153E35]/10 px-4 py-4 space-y-1"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="block px-3 py-2.5 rounded-lg text-sm font-medium text-[#153E35] hover:bg-[#D8E8D5]/60 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#compromiso"
              onClick={handleLinkClick}
              className="block w-full text-center px-4 py-3 rounded-lg text-sm font-semibold bg-[#247C83] text-[#F8F6EF] hover:bg-[#1C6369] transition-colors"
            >
              Me comprometo
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
