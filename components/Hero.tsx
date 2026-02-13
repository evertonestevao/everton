"use client";
import {
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  MessageCircle,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center px-6 text-center">
      {/* Glow sutil */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 h-[450px] w-[700px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[180px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl"
      >
        <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">
          EVERTON{" "}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-200 bg-clip-text text-transparent">
            ESTEVÃO
          </span>
        </h1>

        <p className="mt-8 text-lg leading-relaxed text-zinc-400">
          Desenvolvedor Full Stack com foco em sistemas aplicados ao mundo real,
          integração de serviços e evolução contínua em arquiteturas escaláveis.
        </p>

        {/* Ícones sociais */}
        <div className="mt-10 flex justify-center gap-6 text-zinc-500">
          <a
            href="https://github.com/evertonestevao"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-zinc-200"
          >
            <Github size={22} />
          </a>

          <a
            href="https://www.linkedin.com/in/everton-estevão-78216292/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-zinc-200"
          >
            <Linkedin size={22} />
          </a>

          <a
            href="mailto:everton.efdsilva@gmail.com"
            className="transition hover:text-zinc-200"
          >
            <Mail size={22} />
          </a>

          <a
            href="https://wa.me/5514997075287?text=Ol%C3%A1%20Everton%20vi%20seu%20site"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-zinc-200"
          >
            <MessageCircle size={22} />
          </a>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-zinc-500"
        >
          <ChevronDown size={28} />
        </motion.div>
      </motion.div>
    </section>
  );
}
