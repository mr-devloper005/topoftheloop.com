import Link from "next/link";
import { notFound } from "next/navigation";

import { Footer } from "@/components/shared/footer";
import { NavbarShell } from "@/components/shared/navbar-shell";
import { TaskPostCard } from "@/components/shared/task-post-card";
import { SchemaJsonLd } from "@/components/seo/schema-jsonld";
import { PdfActionButtons } from "@/components/pdf/pdf-action-buttons";
import { PdfViewerWrapper } from "@/components/pdf/pdf-viewer-wrapper";
import { buildPostMetadata, buildTaskMetadata } from "@/lib/seo";
import { buildPostUrl, fetchTaskPostBySlug, fetchTaskPosts } from "@/lib/task-data";
import { SITE_CONFIG } from "@/lib/site-config";

export const revalidate = 3;

export async function generateStaticParams() {
  const posts = await fetchTaskPosts("pdf", 50);
  if (!posts.length) {
    return [{ slug: "placeholder" }];
  }
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  try {
    const post = await fetchTaskPostBySlug("pdf", resolvedParams.slug);
    return post ? await buildPostMetadata("pdf", post) : await buildTaskMetadata("pdf");
  } catch (error) {
    console.warn("PDF metadata lookup failed", error);
    return await buildTaskMetadata("pdf");
  }
}

export default async function PdfDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  let post = null;
  try {
    post = await fetchTaskPostBySlug("pdf", resolvedParams.slug);
  } catch (error) {
    console.warn("PDF detail lookup failed", error);
  }
  if (!post) {
    notFound();
  }

  const content = post.content && typeof post.content === "object" ? post.content : {};
  const contentAny = content as Record<string, unknown>;
  const fileUrl =
    (typeof contentAny.fileUrl === "string" && contentAny.fileUrl) ||
    (typeof contentAny.pdfUrl === "string" && contentAny.pdfUrl) ||
    "";

  if (!fileUrl || !/^https?:\/\//i.test(fileUrl)) {
    notFound();
  }

  const viewerUrl = `${fileUrl}#toolbar=1&navpanes=0&scrollbar=1&zoom=page-fit&view=FitH`;
  const baseUrl = SITE_CONFIG.baseUrl.replace(/\/$/, "");
  const category =
    typeof contentAny.category === "string" ? contentAny.category : "";
  const related = (await fetchTaskPosts("pdf", 6))
    .filter((item) => item.slug !== post.slug)
    .filter((item) => {
      if (!category) return true;
      const itemContent = item.content && typeof item.content === "object" ? item.content : {};
      const itemCategory =
        typeof (itemContent as Record<string, unknown>).category === "string"
          ? (itemContent as Record<string, unknown>).category
          : "";
      return itemCategory === category;
    })
    .slice(0, 3);
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "PDF Library",
        item: `${baseUrl}/pdf`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `${baseUrl}/pdf/${post.slug}`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50/30 to-teal-50/20">
      <NavbarShell />
      <main className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8">
        <SchemaJsonLd data={breadcrumbData} />
        
        {/* Enhanced Header Section */}
        <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-600 to-teal-600 p-8 shadow-2xl transition-all duration-500 hover:shadow-3xl">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-700/20 to-teal-700/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <div className="relative z-10">
            <Link
              href="/pdf"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/90 transition-all duration-300 hover:text-white hover:translate-x-1"
            >
              <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
              Back to PDF Library
            </Link>
            <div className="mt-4">
              <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">{post.title}</h1>
              <div className="mt-4 flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-emerald-300 animate-pulse" />
                  <span className="text-sm font-medium text-white/80">PDF Document</span>
                </div>
                {category && (
                  <div className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                    {category}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* Enhanced PDF Viewer Section */}
        <PdfViewerWrapper
          fileUrl={fileUrl}
          title={post.title}
          viewerUrl={viewerUrl}
        />
        {/* Enhanced Action Buttons */}
        <div className="flex flex-wrap items-center gap-4">
          <PdfActionButtons
            fileUrl={fileUrl}
            currentUrl={`${SITE_CONFIG.baseUrl}/pdf/${post.slug}`}
          />
        </div>
        {/* Enhanced Related Content Section */}
        {related.length ? (
          <section className="pt-8">
            <div className="mb-8 overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-50 to-teal-50 p-8 shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">More like this</h2>
                  <p className="mt-2 text-sm text-gray-600">Discover similar PDF documents and resources</p>
                </div>
                <Link
                  href="/pdf"
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-emerald-700 shadow-md transition-all duration-300 hover:shadow-lg hover:bg-emerald-50"
                >
                  View all
                  <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item, index) => (
                <div
                  key={item.id}
                  className="group relative overflow-hidden rounded-2xl border border-emerald-100 bg-white shadow-md transition-all duration-500 hover:shadow-xl hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <TaskPostCard
                    post={item}
                    href={buildPostUrl("pdf", item.slug)}
                  />
                </div>
              ))}
            </div>
            
            <nav className="mt-8 overflow-hidden rounded-3xl bg-gradient-to-br from-gray-50 to-emerald-50/30 p-6 shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-2 w-2 rounded-full bg-emerald-500" />
                <p className="text-sm font-bold text-gray-900">Related links</p>
              </div>
              <ul className="grid gap-3 text-sm sm:grid-cols-2">
                {related.map((item) => (
                  <li key={`related-${item.id}`}>
                    <Link
                      href={buildPostUrl("pdf", item.slug)}
                      className="group flex items-center gap-2 text-emerald-700 transition-all duration-300 hover:text-emerald-800 hover:translate-x-1"
                    >
                      <svg className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      {item.title}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/pdf" className="group flex items-center gap-2 font-semibold text-emerald-700 transition-all duration-300 hover:text-emerald-800 hover:translate-x-1">
                    <svg className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    Browse all PDFs
                  </Link>
                </li>
              </ul>
            </nav>
          </section>
        ) : null}
      </main>
      <Footer />
    </div>
  );
}
