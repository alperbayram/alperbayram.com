export function generateStaticParams() {
  return [{ lang: "tr" }];
}

export default function LangLayout({ children, params: { lang } }) {
  return children;
}
