import HomePage from "@/components/Home";

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

export default function Home() {
  return (
    <main className="">
      <HomePage />
    </main>
  );
}
