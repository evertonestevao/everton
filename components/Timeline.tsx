"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    period: "2021 — Atual",
    role: "Desenvolvedor de Sistemas",
    organization: "CGTIC — Centro Paula Souza",
    description:
      "Atuação no desenvolvimento de sistemas da área financeira, envolvendo modelagem de dados, implementação de regras de negócio, integrações entre serviços e manutenção evolutiva de aplicações críticas.",
  },

  {
    period: "2020 — 2024",
    role: "Product Owner",
    organization: "SRV Cloud",
    description:
      "Definição estratégica de produto, priorização de backlog e alinhamento entre visão de negócio e execução técnica em ambientes digitais.",
  },
  {
    period: "2014 — 2021",
    role: "Coordenador de Curso",
    organization: "Centro Paula Souza",
    description:
      "Coordenação dos cursos técnicos na área de Tecnologia da Informação, gestão acadêmica, planejamento institucional e articulação entre corpo docente, direção e comunidade escolar.",
  },
  {
    period: "2014 — 2021",
    role: "Docente em Tecnologia da Informação",
    organization: "Centro Paula Souza",
    description:
      "Atuação na formação técnica em Informática e Redes de Computadores, ministrando disciplinas técnicas e contribuindo para o desenvolvimento acadêmico e profissional dos estudantes.",
  },
];

export default function Timeline() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-2xl font-medium tracking-tight text-zinc-200 md:text-3xl">
          Trajetória Profissional
        </h2>

        <div className="mt-2 h-px w-full bg-zinc-800" />

        <div className="relative mt-10 border-l border-zinc-800">
          {experiences.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative ml-6 mb-16"
            >
              {/* Ponto na linha */}
              <div className="absolute -left-[32px] top-1.1 h-4 w-4 rounded-full bg-zinc-900 border border-zinc-700" />

              {/* Período */}
              <p className="text-sm text-zinc-500 tracking-wide">
                {item.period}
              </p>

              {/* Cargo */}
              <h3 className="mt-2 text-lg font-medium text-zinc-200">
                {item.role}
              </h3>

              {/* Organização */}
              <p className="text-sm text-zinc-400">{item.organization}</p>

              {/* Descrição */}
              <p className="mt-4 text-sm leading-relaxed text-zinc-500">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
