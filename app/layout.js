import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Alper Bayram",
  description:
    "As a Software Engineer, I've developed web and mobile apps using TypeScript/JavaScript, React Native, Node.js, and HTML/CSS. I have worked on both the frontend (React, Nextjs) and the backend (Node.js), creating responsive and user-friendly interfaces, as well as robust and scalable APIs and databases.",
  openGraph: {
    title: "Alper Bayram",
    description:
      "I am a Software Developer with a strong focus in Web Development. This is my personal website.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
