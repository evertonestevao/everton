import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <div className="h-px w-full bg-zinc-800" />

        <div className="mt-8 flex flex-col items-start justify-between gap-6 text-sm text-zinc-500 md:flex-row md:items-center">
          {/* Nome + Ano */}
          <p>
            © {new Date().getFullYear()} Everton Estevão. Todos os direitos
            reservados.
          </p>

          <div className="flex gap-6">
            <a
              href="https://github.com/evertonestevao"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-zinc-300"
            >
              <Github size={22} />
            </a>

            <a
              href="https://www.linkedin.com/in/everton-estevão-78216292/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-zinc-300"
            >
              <Linkedin size={22} />
            </a>

            <a
              href="mailto:everton.efdsilva@gmail.com"
              className="transition hover:text-zinc-300"
            >
              <Mail size={22} />
            </a>

            <a
              href="https://wa.me/5514997075287?text=Ol%C3%A1%20Everton%20vi%20seu%20site"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-zinc-300"
            >
              <MessageCircle size={22} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
