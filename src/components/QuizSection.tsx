import { useState } from 'react';
import {
  ArrowRight,
  Award,
  CheckCircle2,
  RotateCcw,
  XCircle,
} from 'lucide-react';
import { QUIZ_QUESTIONS } from '../data/campaignData';

const OPTION_LETTERS = ['A', 'B', 'C', 'D'];

export function QuizSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const currentQuestion = QUIZ_QUESTIONS[currentIndex];
  const hasAnswered = selectedOption !== null;
  const isCorrect =
    hasAnswered && selectedOption === currentQuestion.correctIndex;

  const handleSelectOption = (optionIndex: number) => {
    if (hasAnswered) return;
    setSelectedOption(optionIndex);
    if (optionIndex === currentQuestion.correctIndex) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex + 1 < QUIZ_QUESTIONS.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setScore(0);
    setIsFinished(false);
  };

  const percentage = Math.round((score / QUIZ_QUESTIONS.length) * 100);

  const getResultMessage = () => {
    if (percentage === 100) {
      return {
        title: 'Viajero consciente del Caribe',
        body: 'Conoces a fondo cómo equilibrar el disfrute de nuestros destinos con el respeto por los ecosistemas y comunidades locales. Comparte esta información antes de tu próximo viaje.',
      };
    }
    if (percentage >= 67) {
      return {
        title: 'Muy buen criterio ambiental',
        body: 'Tienes una base sólida sobre el turismo sostenible en el Caribe colombiano. Repasa los detalles que fallaste para tomar decisiones aún más informadas en tu próxima salida.',
      };
    }
    return {
      title: 'Primer paso hacia un viaje más consciente',
      body: 'Informarse es el inicio, pero viajar mejor depende de decisiones concretas en el territorio. Explora los destinos y consejos de la campaña e inténtalo de nuevo.',
    };
  };

  return (
    <section
      id="cuestionario"
      className="py-20 sm:py-28 bg-[#D8E8D5]/40 text-[#153E35] border-b border-[#153E35]/10"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-xs font-semibold tracking-wider uppercase text-[#247C83] mb-3">
            05. Reto interactivo
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#153E35]">
            Pon a prueba tus conocimientos
          </h2>
          <p className="mt-3 text-base text-[#153E35]/80 leading-relaxed">
            Responde estas seis preguntas clave sobre el turismo sostenible en el Caribe colombiano y descubre qué tanto sabes cuidar los destinos que visitas.
          </p>
        </div>

        <div className="rounded-2xl bg-[#F8F6EF] border border-[#153E35]/12 p-6 sm:p-10 shadow-sm">
          {!isFinished ? (
            <div>
              {/* Progress header */}
              <div className="flex items-center justify-between gap-4 pb-5 border-b border-[#153E35]/10">
                <span className="text-xs sm:text-sm font-semibold text-[#247C83] font-mono tabular-nums">
                  Pregunta {currentIndex + 1} de {QUIZ_QUESTIONS.length}
                </span>
                <span className="text-xs sm:text-sm font-medium text-[#153E35]/70 font-mono tabular-nums">
                  Aciertos actuales: {score}
                </span>
              </div>

              <div className="mt-4 h-1.5 w-full rounded-full bg-[#D8E8D5] overflow-hidden">
                <div
                  className="h-full bg-[#247C83] transition-all duration-200"
                  style={{
                    width: `${((currentIndex + (hasAnswered ? 1 : 0)) / QUIZ_QUESTIONS.length) * 100}%`,
                  }}
                />
              </div>

              <h3 className="mt-6 font-display text-xl sm:text-2xl font-bold text-[#153E35] leading-snug">
                {currentQuestion.question}
              </h3>

              {/* Options */}
              <div className="mt-6 space-y-3">
                {currentQuestion.options.map((option, idx) => {
                  const isOptionSelected = selectedOption === idx;
                  const isOptionCorrect = idx === currentQuestion.correctIndex;

                  let optionClasses =
                    'bg-[#F8F6EF] border-[#153E35]/15 text-[#153E35] hover:bg-[#D8E8D5]/45 hover:border-[#247C83]/50';

                  if (hasAnswered) {
                    if (isOptionCorrect) {
                      optionClasses =
                        'bg-[#D8E8D5] border-[#153E35] text-[#153E35] font-medium';
                    } else if (isOptionSelected && !isOptionCorrect) {
                      optionClasses =
                        'bg-[#E9C99B]/45 border-[#9A3412] text-[#153E35]';
                    } else {
                      optionClasses =
                        'bg-[#F8F6EF] border-[#153E35]/10 text-[#153E35]/55';
                    }
                  }

                  return (
                    <button
                      key={option}
                      type="button"
                      disabled={hasAnswered}
                      onClick={() => handleSelectOption(idx)}
                      className={`w-full text-left p-4 rounded-xl border transition-colors duration-150 flex items-start gap-3.5 ${
                        hasAnswered ? 'cursor-default' : 'cursor-pointer'
                      } focus-visible:outline-2 focus-visible:outline-[#247C83] ${optionClasses}`}
                    >
                      <span className="font-mono text-xs font-bold w-6 h-6 rounded-md bg-[#153E35]/10 text-[#153E35] flex items-center justify-center shrink-0 mt-0.5">
                        {OPTION_LETTERS[idx]}
                      </span>
                      <span className="text-sm sm:text-base leading-relaxed flex-1">
                        {option}
                      </span>
                      {hasAnswered && isOptionCorrect && (
                        <CheckCircle2
                          className="w-5 h-5 text-[#153E35] shrink-0 mt-0.5"
                          aria-label="Respuesta correcta"
                        />
                      )}
                      {hasAnswered && isOptionSelected && !isOptionCorrect && (
                        <XCircle
                          className="w-5 h-5 text-[#9A3412] shrink-0 mt-0.5"
                          aria-label="Respuesta incorrecta"
                        />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Feedback & Explanation */}
              {hasAnswered && (
                <div className="mt-6 rounded-xl bg-[#D8E8D5]/55 border border-[#153E35]/15 p-5">
                  <div className="flex items-center gap-2 text-sm font-bold text-[#153E35]">
                    {isCorrect ? (
                      <>
                        <CheckCircle2
                          className="w-4 h-4 text-[#153E35]"
                          aria-hidden="true"
                        />
                        <span>Correcto</span>
                      </>
                    ) : (
                      <>
                        <XCircle
                          className="w-4 h-4 text-[#9A3412]"
                          aria-hidden="true"
                        />
                        <span>Respuesta incorrecta</span>
                      </>
                    )}
                  </div>
                  <p className="mt-2 text-sm text-[#153E35]/85 leading-relaxed">
                    {currentQuestion.explanation}
                  </p>

                  <div className="mt-4 flex justify-end">
                    <button
                      type="button"
                      onClick={handleNext}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#247C83] text-[#F8F6EF] text-sm font-semibold hover:bg-[#1C6369] transition-colors cursor-pointer"
                    >
                      {currentIndex + 1 < QUIZ_QUESTIONS.length
                        ? 'Siguiente pregunta'
                        : 'Ver resultado final'}
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-4">
              <div className="w-14 h-14 rounded-2xl bg-[#D8E8D5] text-[#153E35] flex items-center justify-center mx-auto mb-5">
                <Award className="w-7 h-7" aria-hidden="true" />
              </div>

              <p className="text-xs font-semibold uppercase tracking-wider text-[#247C83]">
                Resultado del cuestionario
              </p>

              <div className="mt-3 flex items-baseline justify-center gap-4">
                <span className="font-mono text-4xl sm:text-5xl font-bold text-[#153E35] tabular-nums">
                  {score} / {QUIZ_QUESTIONS.length}
                </span>
                <span className="font-mono text-2xl font-semibold text-[#247C83] tabular-nums">
                  ({percentage}%)
                </span>
              </div>

              <h3 className="mt-5 font-display text-2xl font-bold text-[#153E35]">
                {getResultMessage().title}
              </h3>

              <p className="mt-3 text-sm sm:text-base text-[#153E35]/80 leading-relaxed max-w-xl mx-auto">
                {getResultMessage().body}
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={handleRestart}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#153E35] text-[#F8F6EF] text-sm font-semibold hover:bg-[#1E5448] transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" aria-hidden="true" />
                  Volver a realizar el cuestionario
                </button>
                <a
                  href="#compromiso"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#247C83] text-[#F8F6EF] text-sm font-semibold hover:bg-[#1C6369] transition-colors"
                >
                  Asumir mi compromiso
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
