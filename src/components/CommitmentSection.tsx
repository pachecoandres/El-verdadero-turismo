import { useState, type FormEvent } from 'react';
import { Check, Copy, Leaf, Sparkles } from 'lucide-react';

const COMMITMENT_ACTIONS = [
  'Regresar siempre con mis residuos y evitar plásticos de un solo uso',
  'Respetar los límites de visitantes y cierres temporales como Respira Tayrona',
  'Elegir operadores comunitarios y guías locales responsables',
  'No extraer corales, conchas, plantas ni perturbar la fauna del Caribe',
];

const METROPOLITAN_CITIES = [
  'Barranquilla',
  'Soledad',
  'Puerto Colombia',
  'Malambo',
  'Galapa',
  'Otra ciudad del Caribe',
];

export function CommitmentSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [visitorName, setVisitorName] = useState('');
  const [city, setCity] = useState('Barranquilla');
  const [selectedAction, setSelectedAction] = useState(COMMITMENT_ACTIONS[0]);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const displayName = visitorName.trim() || 'Viajero del Caribe';

  const pledgeText = `Me comprometo a viajar responsablemente por el Caribe colombiano (${city}). En mi próximo viaje: ${selectedAction.toLowerCase()}. #ElVerdaderoTurismo`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(pledgeText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section
      id="compromiso"
      className="py-20 sm:py-28 bg-[#153E35] text-[#F8F6EF]"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs font-semibold tracking-wider uppercase text-[#E9C99B] mb-4">
          06. Decisión personal, impacto colectivo
        </p>

        <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.65rem] font-bold tracking-tight text-[#F8F6EF] leading-tight">
          Nuestro compromiso
        </h2>

        <blockquote className="mt-6 text-xl sm:text-2xl font-medium text-[#D8E8D5] leading-relaxed max-w-3xl mx-auto">
          &ldquo;El verdadero turismo no consiste solamente en conocer lugares, sino en asegurarnos de que sigan existiendo para las próximas generaciones.&rdquo;
        </blockquote>

        {!isOpen && !submitted && (
          <div className="mt-10">
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-[#E9C99B] text-[#153E35] text-sm sm:text-base font-bold hover:bg-[#DFB980] transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F8F6EF]"
            >
              <Leaf className="w-5 h-5" aria-hidden="true" />
              Me comprometo a viajar responsablemente
            </button>
          </div>
        )}

        {isOpen && !submitted && (
          <form
            onSubmit={handleSubmit}
            className="mt-10 text-left rounded-2xl bg-[#1D4B41] border border-[#F8F6EF]/15 p-6 sm:p-8 max-w-2xl mx-auto space-y-5"
          >
            <div>
              <h3 className="font-display text-xl font-bold text-[#F8F6EF]">
                Define tu compromiso para el próximo viaje
              </h3>
              <p className="mt-1 text-sm text-[#D8E8D5]">
                Personaliza tu declaración de viaje responsable antes de salir hacia el Caribe.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="pledge-name"
                  className="block text-xs font-semibold text-[#E9C99B] mb-1.5"
                >
                  Tu nombre o apodo (opcional)
                </label>
                <input
                  id="pledge-name"
                  type="text"
                  maxLength={40}
                  value={visitorName}
                  onChange={(e) => setVisitorName(e.target.value)}
                  placeholder="Ej. Camila, Mateo..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#153E35] border border-[#F8F6EF]/20 text-sm text-[#F8F6EF] placeholder:text-[#D8E8D5]/50 focus:outline-none focus:border-[#E9C99B]"
                />
              </div>

              <div>
                <label
                  htmlFor="pledge-city"
                  className="block text-xs font-semibold text-[#E9C99B] mb-1.5"
                >
                  ¿Desde dónde viajas?
                </label>
                <select
                  id="pledge-city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#153E35] border border-[#F8F6EF]/20 text-sm text-[#F8F6EF] focus:outline-none focus:border-[#E9C99B]"
                >
                  {METROPOLITAN_CITIES.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold text-[#E9C99B] mb-2">
                Acción concreta que priorizarás en tu siguiente salida:
              </p>
              <div className="space-y-2">
                {COMMITMENT_ACTIONS.map((action) => {
                  const active = selectedAction === action;
                  return (
                    <label
                      key={action}
                      className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-colors ${
                        active
                          ? 'bg-[#247C83]/35 border-[#E9C99B]'
                          : 'bg-[#153E35]/60 border-[#F8F6EF]/15 hover:border-[#F8F6EF]/35'
                      }`}
                    >
                      <input
                        type="radio"
                        name="commitment-action"
                        value={action}
                        checked={active}
                        onChange={() => setSelectedAction(action)}
                        className="mt-1 accent-[#E9C99B]"
                      />
                      <span className="text-sm text-[#F8F6EF] leading-relaxed">
                        {action}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2.5 rounded-lg text-sm font-medium text-[#D8E8D5] hover:text-[#F8F6EF] transition-colors cursor-pointer"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-[#E9C99B] text-[#153E35] text-sm font-bold hover:bg-[#DFB980] transition-colors cursor-pointer"
              >
                Confirmar compromiso
              </button>
            </div>
          </form>
        )}

        {submitted && (
          <div className="mt-10 text-left rounded-2xl bg-[#F8F6EF] text-[#153E35] p-6 sm:p-8 max-w-2xl mx-auto border border-[#E9C99B]">
            <div className="flex items-center justify-between gap-4 pb-4 border-b border-[#153E35]/10">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#247C83]">
                <Sparkles className="w-4 h-4" aria-hidden="true" />
                Compromiso asumido
              </div>
              <span className="text-xs font-medium text-[#153E35]/70">
                {city} · Caribe colombiano
              </span>
            </div>

            <h3 className="mt-4 font-display text-2xl font-bold text-[#153E35]">
              {displayName}, viaja cuidando el Caribe
            </h3>

            <p className="mt-3 text-sm sm:text-base text-[#153E35]/85 leading-relaxed">
              &ldquo;{pledgeText}&rdquo;
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#247C83] text-[#F8F6EF] text-sm font-semibold hover:bg-[#1C6369] transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" aria-hidden="true" />
                    Compromiso copiado
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" aria-hidden="true" />
                    Copiar mensaje para compartir
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setIsOpen(true);
                }}
                className="px-4 py-2.5 rounded-lg border border-[#153E35]/20 text-sm font-semibold text-[#153E35] hover:bg-[#D8E8D5]/50 transition-colors cursor-pointer"
              >
                Editar compromiso
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
