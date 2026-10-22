import { notFound } from "next/navigation";
import { SiteFrame } from "../site-frame";

const staticPages = new Set([
  "about",
  "transport-with-us",
  "2025/09/09/hello-world",
]);

export default async function StaticWordPressPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const pagePath = slug.join("/");

  if (!staticPages.has(pagePath)) notFound();

  return <SiteFrame src={`/${pagePath}/index.html`} />;
}
