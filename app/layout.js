import "./[lang]/globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Alper Bayram - Software Engineer | Web & Mobile App Development",
  description:
    "Alper Bayram is a skilled Software Engineer specializing in web and mobile app development. Experienced in TypeScript, React Native, Node.js, and more.",
  openGraph: {
    title: "Alper Bayram - Software Engineer | Web & Mobile App Development",
    description:
      "Alper Bayram is a skilled Software Engineer specializing in web and mobile app development. Experienced in TypeScript, React Native, Node.js, and more.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
