"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="px-6 py-20" id="perfil">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold md:text-4xl">
            Perfil Profissional
          </h2>

          <p className="mt-6 text-lg text-zinc-400 leading-relaxed">
            Desenvolvedor Full Stack com foco em arquitetura escalável, sistemas
            distribuídos e soluções orientadas a impacto real. Experiência na
            construção de aplicações web modernas utilizando Next.js, Node.js e
            bancos relacionais.
          </p>

          <p className="mt-4 text-lg text-zinc-400 leading-relaxed">
            Foco em aprender e construir tecnologias aplicadas ao mundo real,
            especialmente sistemas conectados, monitoramento em tempo real e
            soluções que gerem impacto direto na sociedade.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
