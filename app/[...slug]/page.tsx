import { notFound, redirect } from "next/navigation";

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

  redirect(`/${pagePath}/index.html`);
}
