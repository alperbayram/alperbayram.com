export function generateStaticParams() {
  return [{ lang: "en" }];
}

export default function LangLayout({ children }) {
  return children;
}
