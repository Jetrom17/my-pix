import { Inter } from "next/font/google";
import "./Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My PIX",
  description: "Projeto visa garantir a disponibilidade e flexibilidade de suas chaves PIX na hora de compartilhar.",
  author: 'Jeiel Lima Miranda',
  keywords: 'PIX, chaves PIX, compartilhar chaves, disponibilidade, flexibilidade, qrcode pix',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}<link rel="shortcut icon" href="/favicon.ico" /></body>
    </html>
  );
}
