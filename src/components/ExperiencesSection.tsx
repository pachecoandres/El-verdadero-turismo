import { motion } from 'motion/react';
import { BookOpenCheck, MapPin } from 'lucide-react';
import { EXPERIENCES } from '../data/campaignData';
import { ImageWithFallback } from './ImageWithFallback';

export function ExperiencesSection() {
  return (
    <section
      id="experiencias"
      className="py-20 sm:py-28 bg-[#153E35] text-[#F8F6EF]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <p className="text-xs font-semibold tracking-wider uppercase text-[#E9C99B] mb-3">
            03. Iniciativas documentadas en el territorio
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#F8F6EF]">
            Experiencias que sí marcan la diferencia
          </h2>
          <p className="mt-4 text-base text-[#D8E8D5] leading-relaxed">
            En el Caribe colombiano ya existen procesos liderados por jóvenes, comunidades costeras, pueblos indígenas y aliados locales que demuestran formas distintas de habitar y compartir el territorio.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {EXPERIENCES.map((exp, index) => (
            <motion.article
              key={exp.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.35,
                delay: index * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-col rounded-2xl bg-[#1D4B41] border border-[#F8F6EF]/12 overflow-hidden transition-colors duration-200 hover:border-[#E9C99B]/40"
            >
              <div className="aspect-[16/10] overflow-hidden bg-[#0F2D26]">
                <ImageWithFallback
                  src={exp.image}
                  alt={exp.imageAlt}
                  fallbackTitle={exp.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 sm:p-8 flex flex-col flex-1">
                {/* Unboxed metadata with typographic separator */}
                <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-[#E9C99B]">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                    {exp.location}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="text-[#D8E8D5]">{exp.category}</span>
                </div>

                <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-[#F8F6EF]">
                  {exp.title}
                </h3>

                <p className="mt-3 text-sm sm:text-base text-[#F8F6EF]/90 leading-relaxed">
                  {exp.summary}
                </p>

                <ul className="mt-5 space-y-2 text-sm text-[#D8E8D5]">
                  {exp.keyFacts.map((fact) => (
                    <li key={fact} className="leading-relaxed">
                      • {fact}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-6">
                  <div className="rounded-xl bg-[#153E35] border border-[#F8F6EF]/12 p-4 sm:p-5">
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#E9C99B] mb-2">
                      <BookOpenCheck className="w-4 h-4" aria-hidden="true" />
                      Respaldo de la investigación
                    </div>
                    <p className="text-xs sm:text-sm text-[#F8F6EF]/90 leading-relaxed">
                      {exp.documentedContribution}
                    </p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
