import ScrollReveal from '../../atoms/ScrollReveal/ScrollReveal';
import type { MinistryStep } from '../../../_lib/ministries';

const bg = {
  backgroundImage: 'url(/images/backgrounds/background-blue-grainy.png)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

export default function JoinSteps({ steps }: { steps: MinistryStep[] }) {
  return (
    <section style={bg} className="px-6 md:px-10 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">

        {/* Encabezado */}
        <div className="mb-16 text-center">
          <ScrollReveal direction="up">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/35">
              Forma parte
            </p>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight text-white">
              ¿Cómo ser parte del equipo?
            </h2>
          </ScrollReveal>
        </div>

        {/* Pasos */}
        <ol className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {steps.map((step, i) => (
            <li key={step.number}>
              <ScrollReveal direction="up" delay={i * 100}>
                <div className="flex flex-col gap-5">
                  {/* Número + línea */}
                  <div className="flex items-center gap-4">
                    <span className="text-2xl font-black tabular-nums text-white/60 flex-shrink-0 leading-none">
                      {step.number}
                    </span>
                    <div className="flex-1 border-t border-white/20" />
                  </div>

                  {/* Contenido */}
                  <div>
                    <h3 className="text-base font-bold leading-snug text-white">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/55">
                      {step.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </li>
          ))}
        </ol>

      </div>
    </section>
  );
}
