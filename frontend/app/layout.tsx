import "./globals.css";
import { Inter, Orbitron } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const orbitron = Orbitron({ subsets: ["latin"] });

export const metadata = {
  title: "Nexus Campaign Studio",
  description: "AI Marketing Automation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        <div className={orbitron.className}>{children}</div>
      </body>
    </html>
  );
}
