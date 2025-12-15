import HomePage from "@/components/Home";

export default function Home({ params: { lang } }) {
  return <HomePage lang={lang} />;
}
