import HomePage from "@/components/Home";

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

export default function Home() {
  return (
    <main className="">
      <HomePage />
    </main>
  );
}
