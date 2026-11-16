import { ArrowDownRight, Compass } from 'lucide-react';
import { HERO_IMAGE } from '../data/campaignData';
import { ImageWithFallback } from './ImageWithFallback';

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-[92vh] flex items-end pt-24 pb-16 sm:pb-24 overflow-hidden bg-[#153E35]"
    >
      {/* Full-bleed panoramic Caribbean background */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src={HERO_IMAGE}
          alt="Vista panorámica del Caribe colombiano entre selva tropical, rocas costeras y aguas turquesas"
          fallbackTitle="Caribe colombiano"
          className="w-full h-full object-cover object-center"
        />
        {/* Measured scrim for WCAG AA+ legibility */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#153E35]/95 via-[#153E35]/55 to-[#153E35]/30"
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Clean unboxed editorial metadata line */}
          <p className="text-xs sm:text-sm font-medium tracking-wide text-[#E9C99B] mb-4">
            Campaña de turismo sostenible · Caribe colombiano · Desde Barranquilla hacia el territorio
          </p>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F8F6EF] leading-[1.05]">
            EL VERDADERO TURISMO
          </h1>

          <p className="mt-5 text-lg sm:text-2xl font-medium text-[#F8F6EF]/95 leading-snug max-w-2xl">
            &ldquo;No se trata solo de llegar al destino, sino de cuidar lo que nos permite disfrutarlo.&rdquo;
          </p>

          <p className="mt-4 text-sm sm:text-base text-[#D8E8D5] leading-relaxed max-w-xl">
            Viajar es compatible con cuidar, pero depende de las decisiones que tomamos en cada playa, río, manglar y sendero del Caribe.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#destinos"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#247C83] text-[#F8F6EF] text-sm font-semibold hover:bg-[#1C6369] transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E9C99B]"
            >
              <Compass className="w-4 h-4" aria-hidden="true" />
              Explorar destinos
            </a>

            <a
              href="#consejos"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#F8F6EF]/10 text-[#F8F6EF] border border-[#F8F6EF]/35 hover:bg-[#F8F6EF]/20 text-sm font-semibold transition-colors duration-150 backdrop-blur-sm whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E9C99B]"
            >
              Descubre cómo viajar mejor
              <ArrowDownRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
