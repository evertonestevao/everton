import "./globals.css";

export const metadata = {
  title: "Everton Estevão | Desenvolvedor Web",
  description: "Arquitetura escalável e pesquisa aplicada",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-[#0A0A0F] text-zinc-100">
        {children}
      </body>
    </html>
  );
}
