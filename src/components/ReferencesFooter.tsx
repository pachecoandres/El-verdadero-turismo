import { REFERENCES } from '../data/campaignData';

export function ReferencesFooter() {
  return (
    <footer
      id="referencias"
      className="bg-[#F8F6EF] text-[#153E35] pt-20 pb-12 border-t border-[#153E35]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <p className="text-xs font-semibold tracking-wider uppercase text-[#247C83] mb-3">
            07. Respaldo documental
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#153E35]">
            Referencias y créditos
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#153E35]/80 leading-relaxed">
            Los datos, definiciones e iniciativas comunitarias presentados en esta campaña provienen de fuentes institucionales, académicas y periodísticas consultadas durante la investigación.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pb-14 border-b border-[#153E35]/12">
          {REFERENCES.map((ref) => (
            <article
              key={ref.id}
              className="rounded-xl bg-[#D8E8D5]/30 border border-[#153E35]/10 p-5"
            >
              <p className="text-xs font-semibold text-[#247C83]">
                {ref.category}
              </p>
              <h3 className="mt-1 font-display text-base font-bold text-[#153E35]">
                {ref.source}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#153E35]/80 leading-relaxed">
                {ref.detail}
              </p>
            </article>
          ))}
        </div>

        {/* Quiet Footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs sm:text-sm text-[#153E35]/75">
          <div>
            <span className="font-display font-bold text-[#153E35]">
              El Verdadero Turismo
            </span>
            <span className="mx-2" aria-hidden="true">
              ·
            </span>
            <span>
              Campaña de concientización sobre turismo sostenible en el Caribe colombiano
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-5">
            <a href="#inicio" className="hover:text-[#153E35] transition-colors">
              Inicio
            </a>
            <a href="#destinos" className="hover:text-[#153E35] transition-colors">
              Destinos
            </a>
            <a href="#experiencias" className="hover:text-[#153E35] transition-colors">
              Experiencias
            </a>
            <a href="#cuestionario" className="hover:text-[#153E35] transition-colors">
              Cuestionario
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
