import { motion } from 'motion/react';
import { Droplets, ShieldAlert, Waves } from 'lucide-react';
import { IMPACT_PROBLEMS } from '../data/campaignData';

const PROBLEM_ICONS = [ShieldAlert, Waves, Droplets];

export function ImpactSection() {
  return (
    <section
      id="impacto"
      className="py-20 sm:py-28 bg-[#F8F6EF] text-[#153E35] border-b border-[#153E35]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left editorial column */}
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold tracking-wider uppercase text-[#247C83] mb-3">
              01. El impacto de nuestras decisiones
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#153E35] leading-tight">
              ¿El turismo también puede dañar?
            </h2>
            <p className="mt-4 text-base text-[#153E35]/80 leading-relaxed">
              Escaparse el fin de semana a una playa o un río cerca de Barranquilla no es el problema. El deterioro aparece cuando llegamos sin medir la huella que dejamos sobre ecosistemas vivos y comunidades que dependen de ellos.
            </p>

            {/* Highlighted documented statistic card */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 rounded-2xl bg-[#153E35] text-[#F8F6EF] p-6 sm:p-8"
            >
              <p className="text-xs font-medium text-[#E9C99B]">
                Dato documentado · Año 2023
              </p>
              <div className="mt-3 flex items-baseline gap-3">
                <span className="font-mono text-4xl sm:text-5xl font-semibold tracking-tight tabular-nums text-[#F8F6EF]">
                  637.000
                </span>
                <span className="text-sm font-medium text-[#D8E8D5]">
                  visitantes
                </span>
              </div>
              <p className="mt-3 text-sm text-[#F8F6EF]/90 leading-relaxed">
                Registrados en el Parque Nacional Natural Tayrona durante 2023, una cifra que evidencia por qué el ordenamiento turístico y los descansos del ecosistema son indispensables.
              </p>
              <div className="mt-5 pt-4 border-t border-[#F8F6EF]/15 text-xs text-[#D8E8D5]">
                Fuente: Parques Nacionales Naturales de Colombia · Reportado en El Espectador
              </div>
            </motion.div>
          </div>

          {/* Right 3 problems list */}
          <div className="lg:col-span-7 space-y-5">
            {IMPACT_PROBLEMS.map((problem, index) => {
              const Icon = PROBLEM_ICONS[index];
              return (
                <motion.article
                  key={problem.number}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.35,
                    delay: index * 0.06,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="rounded-2xl bg-[#D8E8D5]/45 border border-[#153E35]/10 p-6 sm:p-7 transition-colors duration-150 hover:bg-[#D8E8D5]/70"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-[#F8F6EF] border border-[#153E35]/10 flex items-center justify-center shrink-0 text-[#247C83]">
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#247C83] mb-1">
                        <span>{problem.number}</span>
                        <span aria-hidden="true">·</span>
                        <span className="font-sans font-medium text-[#153E35]/70">
                          Presión ambiental
                        </span>
                      </div>
                      <h3 className="font-display text-xl font-bold text-[#153E35] leading-snug">
                        {problem.title}
                      </h3>
                      <p className="mt-2 text-sm sm:text-base text-[#153E35]/80 leading-relaxed">
                        {problem.description}
                      </p>
                    </div>
                  </div>
                </motion.article>
              );
            })}

            <div className="pt-2 px-1 flex flex-wrap items-center justify-between gap-4 text-sm text-[#153E35]/80">
              <p className="font-medium">
                &ldquo;Viajar es compatible con cuidar, pero depende de las decisiones que tomamos.&rdquo;
              </p>
              <a
                href="#experiencias"
                className="font-semibold text-[#247C83] hover:text-[#153E35] transition-colors whitespace-nowrap"
              >
                Ver soluciones locales →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
