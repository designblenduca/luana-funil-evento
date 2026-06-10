import { CalendarDays, Clock, MapPin, Users } from 'lucide-react'
import Reveal from './Reveal'

const details = [
  { icon: CalendarDays, label: '29 de agosto' },
  { icon: Clock, label: '8h30 às 18h' },
  { icon: MapPin, label: 'Requinte Convention Center — Chapecó' },
  { icon: Users, label: '50 vagas limitadas' },
]

export default function Signup() {
  return (
    <section id="inscricao" className="bg-secondary py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mx-auto mb-12 max-w-4xl text-center md:mb-16">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-light">
            Inscrição
          </p>
          <h2 className="font-serif text-[2.8rem] leading-[1.03] text-white md:text-[5rem]">
            Garanta sua vaga no Evento Prospera
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/85">
            Um dia presencial, vagas limitadas e uma experiência desenhada para
            sair da tentativa solta e entrar em clareza.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mx-auto grid max-w-5xl overflow-hidden border border-white/20 bg-light shadow-[0_34px_110px_rgba(43,108,112,0.22)] md:grid-cols-[1fr_0.85fr]">
            <div className="p-7 md:p-10">
              <p className="mb-8 font-serif text-3xl leading-tight text-dark md:text-4xl">
                Sua inscrição inclui acesso ao dia completo do Evento Prospera.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {details.map(({ icon: Icon, label }, i) => (
                  <div key={i} className="border border-divider bg-light-alt p-5">
                    <Icon className="mb-5 h-5 w-5 text-primary" strokeWidth={1.7} />
                    <span className="block text-base font-medium leading-snug text-dark">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <aside className="border-t border-divider bg-light-alt p-7 md:border-l md:border-t-0 md:p-10">
              <p className="mb-3 text-xs font-medium uppercase tracking-wider text-body/60">
                Investimento
              </p>
              <p className="font-serif text-[2.7rem] leading-none text-dark md:text-[3.4rem]">
                Valor em breve
              </p>
              <p className="mt-4 text-sm leading-relaxed text-body">
                O valor oficial da inscrição será inserido aqui antes da abertura
                do checkout.
              </p>

              <a
                href="#"
                className="mt-8 flex w-full items-center justify-center rounded-lg bg-primary px-8 py-4 text-center text-lg font-semibold text-white transition hover:bg-secondary hover:text-dark"
              >
                Quero garantir minha vaga
              </a>
            </aside>
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <p className="mx-auto mt-7 max-w-2xl text-center text-sm leading-relaxed text-white/75">
            Vagas limitadas. Após a confirmação do pagamento, você receberá
            todos os detalhes por e-mail.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
