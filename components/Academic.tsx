"use client";

import { motion } from "framer-motion";

const courses = [
  {
    title: "Banco de Dados",
    professor: "Prof. Ronaldo Celso Messias Correia",
    location: "Presidente Prudente",
    description: "Aluno especial Unesp",
  },
  {
    title: "Arquitetura de Software: Teoria e Prática",
    professor: "Prof. Frank José Affonso",
    location: "Rio Claro",
    description: "Aluno especial Unesp",
  },
  {
    title: "Bacharelado em Sistemas de Informação",
    professor: "Unilins",
    location: "Lins",
  },
];

export default function Academic() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-2xl font-medium tracking-tight text-zinc-200 md:text-3xl">
          Formação Acadêmica Complementar
        </h2>

        <div className="mt-2 h-px w-full bg-zinc-800" />

        <div className="mt-10 space-y-16">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Nome da disciplina */}
              <h3 className="text-lg font-medium text-zinc-200">
                {course.title}
              </h3>

              {/* Professor */}
              <p className="mt-2 text-sm text-zinc-400">
                {course.professor} — {course.location}
              </p>

              {/* Descrição */}
              <p className=" text-sm leading-relaxed text-zinc-500">
                {course.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
