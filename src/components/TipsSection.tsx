import { useState } from 'react';
import { motion } from 'motion/react';
import {
  CalendarCheck,
  Check,
  Compass,
  HeartHandshake,
  MapPin,
  Shell,
  Trash2,
  Users,
} from 'lucide-react';
import { TRAVEL_TIPS, type TravelTip } from '../data/campaignData';

function TipIcon({ name }: { name: TravelTip['iconName'] }) {
  const iconClass = 'w-5 h-5';
  switch (name) {
    case 'trash':
      return <Trash2 className={iconClass} aria-hidden="true" />;
    case 'users':
      return <Users className={iconClass} aria-hidden="true" />;
    case 'compass':
      return <Compass className={iconClass} aria-hidden="true" />;
    case 'shell':
      return <Shell className={iconClass} aria-hidden="true" />;
    case 'calendar':
      return <CalendarCheck className={iconClass} aria-hidden="true" />;
    case 'mapPin':
      return <MapPin className={iconClass} aria-hidden="true" />;
    case 'heartHandshake':
      return <HeartHandshake className={iconClass} aria-hidden="true" />;
  }
}

export function TipsSection() {
  const [checkedIds, setCheckedIds] = useState<string[]>([]);

  const toggleTip = (id: string) => {
    setCheckedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const completedCount = checkedIds.length;
  const totalCount = TRAVEL_TIPS.length;

  return (
    <section
      id="consejos"
      className="py-20 sm:py-28 bg-[#F8F6EF] text-[#153E35] border-b border-[#153E35]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wider uppercase text-[#247C83] mb-3">
              04. Decisiones prácticas antes y durante el viaje
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#153E35]">
              Aprende a viajar responsablemente
            </h2>
            <p className="mt-3 text-base text-[#153E35]/80 leading-relaxed">
              Marca las acciones que ya aplicas o vas a incluir en tu próximo viaje con amigos o familia. Cada decisión cuenta cuando visitamos un territorio vivo.
            </p>
          </div>

          {/* Interactive readiness tracker */}
          <div className="rounded-xl bg-[#D8E8D5]/55 border border-[#153E35]/12 px-5 py-4 min-w-[260px]">
            <div className="flex items-center justify-between gap-4 text-xs font-semibold text-[#153E35]">
              <span>Tu lista de viajero responsable</span>
              <span className="font-mono tabular-nums text-[#247C83]">
                {completedCount} / {totalCount}
              </span>
            </div>
            <div className="mt-2.5 h-2 w-full rounded-full bg-[#F8F6EF] overflow-hidden">
              <div
                className="h-full rounded-full bg-[#247C83] transition-all duration-200"
                style={{ width: `${(completedCount / totalCount) * 100}%` }}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TRAVEL_TIPS.map((tip, index) => {
            const isChecked = checkedIds.includes(tip.id);
            return (
              <motion.button
                key={tip.id}
                type="button"
                onClick={() => toggleTip(tip.id)}
                aria-pressed={isChecked}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.04,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`text-left rounded-2xl p-6 border transition-all duration-150 cursor-pointer flex flex-col justify-between focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#247C83] ${
                  isChecked
                    ? 'bg-[#D8E8D5]/75 border-[#247C83] shadow-sm'
                    : 'bg-[#F8F6EF] border-[#153E35]/12 hover:bg-[#D8E8D5]/30'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center transition-colors ${
                        isChecked
                          ? 'bg-[#247C83] text-[#F8F6EF]'
                          : 'bg-[#E9C99B]/45 text-[#153E35]'
                      }`}
                    >
                      <TipIcon name={tip.iconName} />
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-semibold text-[#153E35]/60 tabular-nums">
                        {tip.number}
                      </span>
                      <span
                        className={`w-6 h-6 rounded-md border flex items-center justify-center transition-colors ${
                          isChecked
                            ? 'bg-[#153E35] border-[#153E35] text-[#F8F6EF]'
                            : 'border-[#153E35]/25 bg-white/60 text-transparent'
                        }`}
                      >
                        <Check className="w-3.5 h-3.5" aria-hidden="true" />
                      </span>
                    </div>
                  </div>

                  <h3 className="font-display text-lg font-bold text-[#153E35] leading-snug">
                    {tip.title}
                  </h3>

                  <p className="mt-2.5 text-sm text-[#153E35]/80 leading-relaxed">
                    {tip.description}
                  </p>
                </div>

                <p className="mt-5 pt-3 border-t border-[#153E35]/10 text-xs font-semibold text-[#247C83]">
                  {isChecked ? 'Incluida en tu próximo viaje' : 'Clic para marcar como práctica'}
                </p>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
