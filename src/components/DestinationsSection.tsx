import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, CheckCircle2, MapPin, Trees, X } from 'lucide-react';
import {
  DESTINATIONS,
  type Destination,
  type RegionFilter,
} from '../data/campaignData';
import { ImageWithFallback } from './ImageWithFallback';

const REGIONS: RegionFilter[] = ['Todos', 'Cartagena', 'Santa Marta', 'La Guajira'];

export function DestinationsSection() {
  const [activeRegion, setActiveRegion] = useState<RegionFilter>('Todos');
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(
    null
  );

  const filteredDestinations =
    activeRegion === 'Todos'
      ? DESTINATIONS
      : DESTINATIONS.filter((item) => item.region === activeRegion);

  useEffect(() => {
    if (!selectedDestination) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedDestination(null);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedDestination]);

  return (
    <section
      id="destinos"
      className="py-20 sm:py-28 bg-[#D8E8D5]/35 text-[#153E35] border-b border-[#153E35]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header + interactive filter tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wider uppercase text-[#247C83] mb-3">
              02. Territorios del Caribe colombiano
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#153E35]">
              Conoce nuestros destinos
            </h2>
            <p className="mt-3 text-base text-[#153E35]/80 leading-relaxed">
              A pocas horas de Barranquilla conviven manglares, arrecifes, humedales y selvas de montaña. Explora qué los hace únicos y por qué debemos protegerlos.
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Filtrar destinos por departamento o ciudad"
            className="inline-flex flex-wrap items-center gap-1 p-1 bg-[#F8F6EF] border border-[#153E35]/12 rounded-xl self-start md:self-auto"
          >
            {REGIONS.map((region) => {
              const isActive = activeRegion === region;
              return (
                <button
                  key={region}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveRegion(region)}
                  className={`px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#247C83] ${
                    isActive
                      ? 'bg-[#153E35] text-[#F8F6EF]'
                      : 'text-[#153E35]/75 hover:text-[#153E35] hover:bg-[#D8E8D5]/50'
                  }`}
                >
                  {region}
                </button>
              );
            })}
          </div>
        </div>

        {/* Destinations grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredDestinations.map((dest, idx) => (
            <motion.article
              key={dest.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.3,
                delay: idx * 0.04,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group flex flex-col rounded-2xl bg-[#F8F6EF] border border-[#153E35]/12 overflow-hidden transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="aspect-[4/3] overflow-hidden bg-[#153E35]">
                <ImageWithFallback
                  src={dest.image}
                  alt={dest.imageAlt}
                  fallbackTitle={dest.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="p-6 flex flex-col flex-1">
                {/* Unboxed metadata line */}
                <div className="flex items-center gap-2 text-xs font-medium text-[#247C83]">
                  <MapPin className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                  <span>{dest.location}</span>
                </div>

                <h3 className="mt-2 font-display text-2xl font-bold text-[#153E35]">
                  {dest.name}
                </h3>

                <p className="mt-2 text-sm text-[#153E35]/80 leading-relaxed">
                  {dest.shortDescription}
                </p>

                <div className="mt-5 pt-4 border-t border-[#153E35]/10 space-y-2.5 text-xs sm:text-sm">
                  <div>
                    <span className="font-semibold text-[#153E35]">
                      Ecosistema:{' '}
                    </span>
                    <span className="text-[#153E35]/80">{dest.ecosystem}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-[#153E35]">
                      Importancia ambiental:{' '}
                    </span>
                    <span className="text-[#153E35]/80">
                      {dest.environmentalImportance}
                    </span>
                  </div>
                </div>

                <div className="mt-6 pt-2 flex items-center">
                  <button
                    type="button"
                    onClick={() => setSelectedDestination(dest)}
                    className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg bg-[#247C83] text-[#F8F6EF] text-sm font-semibold hover:bg-[#1C6369] transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#153E35]"
                  >
                    Conocer más
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Expanded Destination Modal */}
      {selectedDestination && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#153E35]/70 backdrop-blur-xs"
          onClick={() => setSelectedDestination(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-destination-title"
        >
          <div
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#F8F6EF] text-[#153E35] border border-[#153E35]/15 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/9] bg-[#153E35]">
              <ImageWithFallback
                src={selectedDestination.image}
                alt={selectedDestination.imageAlt}
                fallbackTitle={selectedDestination.name}
                className="w-full h-full object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#153E35]/85 via-transparent to-transparent"
              />
              <button
                type="button"
                onClick={() => setSelectedDestination(null)}
                aria-label="Cerrar ventana"
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#F8F6EF]/95 text-[#153E35] hover:bg-[#E9C99B] flex items-center justify-center transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#247C83]"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-6 right-6 text-[#F8F6EF]">
                <p className="text-xs font-medium text-[#E9C99B]">
                  {selectedDestination.location} · {selectedDestination.ecosystem}
                </p>
                <h3
                  id="modal-destination-title"
                  className="font-display text-2xl sm:text-3xl font-bold mt-1"
                >
                  {selectedDestination.name}
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <h4 className="text-sm font-bold text-[#247C83] uppercase tracking-wider mb-2">
                  Contexto del territorio
                </h4>
                <p className="text-sm sm:text-base text-[#153E35]/85 leading-relaxed">
                  {selectedDestination.modalDetails.overview}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <div className="rounded-xl bg-[#E9C99B]/35 p-5 border border-[#153E35]/10">
                  <div className="flex items-center gap-2 text-sm font-bold text-[#153E35] mb-3">
                    <Trees className="w-4 h-4 text-[#247C83]" aria-hidden="true" />
                    Presiones identificadas
                  </div>
                  <ul className="space-y-2 text-sm text-[#153E35]/85">
                    {selectedDestination.modalDetails.pressures.map((item) => (
                      <li key={item} className="leading-relaxed">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-xl bg-[#D8E8D5]/55 p-5 border border-[#153E35]/10">
                  <div className="flex items-center gap-2 text-sm font-bold text-[#153E35] mb-3">
                    <CheckCircle2
                      className="w-4 h-4 text-[#247C83]"
                      aria-hidden="true"
                    />
                    ¿Cómo visitarlo mejor?
                  </div>
                  <ul className="space-y-2 text-sm text-[#153E35]/85">
                    {selectedDestination.modalDetails.visitorCare.map((item) => (
                      <li key={item} className="leading-relaxed">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedDestination(null)}
                  className="px-5 py-2.5 rounded-lg bg-[#153E35] text-[#F8F6EF] text-sm font-semibold hover:bg-[#1E5448] transition-colors cursor-pointer"
                >
                  Cerrar detalle
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
