"use client";

import { useState } from "react";
import Image from "next/image";

import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import "yet-another-react-lightbox/styles.css";

import { Card, CardContent } from "@/components/ui/card";

export default function LandingPage() {
  const [index, setIndex] = useState(-1);

  const pacienteScreens = [
    {
      src: "/prints/paciente-inicio.jpg",
      title: "Tela inicial do paciente",
      desc: "Visão rápida do acompanhamento e acesso ao check-in diário.",
    },
    {
      src: "/prints/paciente-checkin.jpg",
      title: "Check-in diário",
      desc: "Registro rápido de humor, ansiedade, sono e outros indicadores definidos pela clínica.",
    },
    {
      src: "/prints/paciente-historico.jpg",
      title: "Histórico do paciente",
      desc: "O paciente pode visualizar sua evolução ao longo do tempo.",
    },
  ];

  const profissionalScreens = [
    {
      src: "/prints/profissional-painel.jpg",
      title: "Painel clínico",
      desc: "Visão geral dos pacientes e indicadores importantes.",
    },
    {
      src: "/prints/profissional-analises.jpg",
      title: "Análises e gráficos",
      desc: "Visualização clara da evolução dos pacientes.",
    },
    {
      src: "/prints/profissional-pacientes.jpg",
      title: "Gestão de pacientes",
      desc: "Lista de pacientes e acompanhamento individual.",
    },
    {
      src: "/prints/profissional-protocolos.jpg",
      title: "Protocolos clínicos",
      desc: "Configuração de perguntas e protocolos.",
    },
  ];

  const allScreens = [...pacienteScreens, ...profissionalScreens];

  return (
    <main className="min-h-screen bg-[#f8f5f0]">
      {/* HERO */}
      <section className="py-28">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h1 className="text-5xl font-bold text-stone-800 leading-tight mb-6">
            Acompanhamento inteligente entre consultas
          </h1>

          <p className="text-lg text-stone-600 mb-8">
            Uma plataforma criada para clínicas de saúde integrativa
            acompanharem seus pacientes diariamente através de protocolos
            estruturados, transformando relatos subjetivos em dados clínicos
            organizados.
          </p>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="py-20 bg-[#f1ece5]">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-semibold text-stone-800 mb-4">
              Como o sistema ajuda no acompanhamento clínico
            </h2>

            <p className="text-stone-600">
              Entre uma consulta e outra, o paciente registra informações
              importantes sobre seu dia. Esses dados são organizados
              automaticamente e apresentados ao profissional em gráficos claros
              antes da consulta.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-stone-200">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold text-stone-800 mb-2">
                  Protocolos estruturados
                </h3>

                <p className="text-sm text-stone-600">
                  Questionários personalizados definidos pela clínica para
                  acompanhar humor, ansiedade, sono e hábitos.
                </p>
              </CardContent>
            </Card>

            <Card className="border-stone-200">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold text-stone-800 mb-2">
                  Diário digital do paciente
                </h3>

                <p className="text-sm text-stone-600">
                  O paciente registra informações rapidamente pelo celular
                  criando um histórico contínuo.
                </p>
              </CardContent>
            </Card>

            <Card className="border-stone-200">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold text-stone-800 mb-2">
                  Dashboard clínico
                </h3>

                <p className="text-sm text-stone-600">
                  O profissional visualiza tendências e evolução do paciente
                  através de gráficos claros.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* TELAS */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-stone-800 mb-4">
              Veja a plataforma na prática
            </h2>

            <p className="text-stone-600 max-w-xl mx-auto">
              Interfaces simples para pacientes registrarem informações
              rapidamente e profissionais acompanharem a evolução clínica.
            </p>
          </div>

          {/* PROFISSIONAL */}

          <div>
            <h3 className="text-2xl font-semibold text-stone-800 mb-6">
              Painel do profissional
            </h3>

            <div className="grid md:grid-cols-4 gap-6">
              {profissionalScreens.map((screen, i) => (
                <Card
                  key={screen.src}
                  onClick={() => setIndex(i + pacienteScreens.length)}
                  className="cursor-pointer border-stone-200 hover:shadow-lg transition"
                >
                  <CardContent className="p-3">
                    <Image
                      src={screen.src}
                      alt={screen.title}
                      width={900}
                      height={600}
                      className="rounded-lg"
                    />

                    <p className=" text-stone-800 mt-6 text-center">
                      {screen.title}
                    </p>
                    <p className="text-sm text-stone-600 mt-2 text-center">
                      {screen.desc}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* PACIENTE */}

          <div className="mt-20">
            <h3 className="text-2xl font-semibold text-stone-800 mb-6">
              Aplicativo do paciente
            </h3>

            <div className="grid md:grid-cols-3 gap-6">
              {pacienteScreens.map((screen, i) => (
                <Card
                  key={screen.src}
                  onClick={() => setIndex(i)}
                  className="cursor-pointer border-stone-200 hover:shadow-lg transition"
                >
                  <CardContent className="p-3">
                    <Image
                      src={screen.src}
                      alt={screen.title}
                      width={900}
                      height={600}
                      className="rounded-lg"
                    />

                    <p className="text-sm text-stone-600 mt-3 text-center">
                      {screen.title}
                    </p>
                    <p className="text-sm text-stone-600 mt-3 text-center">
                      {screen.desc}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="py-24 bg-[#efe8df]">
        <div className="container mx-auto px-6 text-center max-w-2xl">
          <h2 className="text-3xl font-semibold text-stone-800 mb-6">
            Transforme relatos em dados clínicos
          </h2>

          <p className="text-stone-600 mb-8">
            Melhore o acompanhamento dos seus pacientes e tenha informações mais
            claras para decisões clínicas seguras durante as consultas.
          </p>
        </div>
      </section>

      {/* LIGHTBOX */}

      <Lightbox
        slides={allScreens}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Zoom]}
      />
    </main>
  );
}
