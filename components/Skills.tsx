"use client";

import {
  Code2,
  Server,
  Database,
  Cloud,
  Cpu,
  Boxes,
  Network,
  Layers,
} from "lucide-react";

export default function Skills() {
  const skills = [
    { name: "Next.js", icon: Code2 },
    { name: "Node.js", icon: Server },
    { name: "TypeScript", icon: Layers },
    { name: "MySQL", icon: Database },
    { name: "Arquitetura REST", icon: Network },
    { name: "IoT", icon: Cpu },
    { name: "Docker", icon: Boxes },
    // { name: "AWS", icon: Cloud },
  ];

  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-4xl">
        {/* Título mais leve */}
        <h2 className="text-2xl font-medium tracking-tight text-zinc-200 md:text-3xl">
          Competências Técnicas
        </h2>

        {/* Linha divisória sutil */}
        {/* <div className="mt-6 h-px w-full bg-zinc-800" /> */}

        {/* Lista elegante */}
        <div className="mt-12 flex flex-wrap justify-center gap-x-10 gap-y-10">
          {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <div
                key={skill.name}
                className="group flex flex-col items-center justify-center gap-3 text-center"
              >
                <Icon
                  size={18}
                  strokeWidth={1.5}
                  className="text-zinc-500 transition group-hover:text-zinc-300"
                />

                <span className="text-sm text-zinc-400 transition group-hover:text-zinc-200">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
