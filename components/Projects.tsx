export default function Projects() {
  const projects = [
    {
      title: "Sistema de Rastreamento Urbano",
      description:
        "Sistema para monitoramento em tempo real de veículos, permitindo visualização geográfica, acompanhamento de rotas e análise operacional.",
      details:
        "Arquitetura baseada em Next.js e Node.js, integrada ao servidor Traccar para ingestão de dados GPS enviados por rastreador físico real (IoT) instalado em veículo. Implementação de visualização geográfica com Leaflet, atualização em tempo real e análise de histórico de rotas em cenário operacional urbano.",
      tech: "Next.js • Node.js • Traccar • Leaflet • API REST • WebSocket",
      link: "https://evertonrastreamento.vercel.app",
    },
  ];

  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-2xl font-medium tracking-tight text-zinc-200 md:text-3xl">
          Projeto em Destaque
        </h2>

        <div className="mt-2 h-px w-full bg-zinc-800" />

        <div className="mt-10">
          {projects.map((project) => (
            <div key={project.title} className="space-y-6">
              <h3 className="text-lg font-medium text-zinc-200">
                {project.title}
              </h3>

              <p className="max-w-2xl text-sm leading-relaxed text-zinc-500">
                {project.description}
              </p>

              <p className="max-w-2xl text-sm leading-relaxed text-zinc-500">
                {project.details}
              </p>

              <p className="text-sm text-zinc-400">{project.tech}</p>
              <a href={project.link} className="text-sm text-zinc-300">
                Veja aqui
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
