import { Quote } from 'lucide-react'
import Reveal from './Reveal'

const testimonials = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
]

export default function Testimonials() {
  return (
    <section className="bg-light py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mb-14 grid gap-6 md:mb-20 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <h2 className="font-serif text-[2.6rem] leading-[1.05] text-dark md:text-[4.25rem]">
            O que dizem quem já viveu a transformação
          </h2>
          <p className="max-w-xl text-lg leading-relaxed text-body md:justify-self-end">
            Espaço reservado para depoimentos reais autorizados, mantendo a
            estrutura final sem inventar relatos.
          </p>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.id} delay={i * 0.12}>
              <article className="h-full border border-divider bg-light-alt p-7 shadow-[0_18px_60px_rgba(16,32,28,0.04)] md:p-8">
                <Quote className="mb-7 h-9 w-9 text-secondary" strokeWidth={1.4} />
                <p className="mb-8 font-serif text-2xl italic leading-snug text-dark">
                  Depoimento real autorizado será inserido aqui.
                </p>
                <div className="border-t border-divider pt-6">
                  <p className="text-sm font-semibold text-dark">
                    Nome do(a) participante
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-body/60">
                    Profissão
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
