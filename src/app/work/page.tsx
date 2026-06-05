import type { Metadata } from "next";
import Link from "next/link";
import { CASE_STUDIES } from "@/lib/case-studies";
import { CaseStudyCard } from "@/components/CaseStudyCard";

export const metadata: Metadata = {
  title: "Selected Work — Peachy Kean DevOps",
  description:
    "Six case studies in CRM automation, customer analytics, scheduling software, and digital loyalty — built for independent businesses in WNC.",
};

export default function WorkPage() {
  return (
    <>
      {/* ── Nav ─────────────────────────────────────── */}
      <nav
        className="sticky top-0 z-50 border-b border-[#e0d8cc]"
        style={{ background: "#f5f0e8" }}
      >
        <div className="mx-auto max-w-[680px] px-5 h-14 flex items-center justify-between">
          <a href="/">
            <img
              src="/peachy-kean-logo.svg"
              alt="Peachy Kean DevOps"
              style={{ height: "40px", width: "auto" }}
            />
          </a>
          <div className="flex items-center gap-3 sm:gap-6">
            <a
              href="/#products"
              className="text-sm font-medium text-[#3d3530] hover:text-[#bf5a38] transition-colors"
            >
              Products
            </a>
            <Link
              href="/work"
              className="text-sm font-medium text-[#3d3530] hover:text-[#bf5a38] transition-colors"
            >
              Work
            </Link>
            <a
              href="/#about"
              className="text-sm font-medium text-[#3d3530] hover:text-[#bf5a38] transition-colors"
            >
              About
            </a>
            <a
              href="mailto:john@peachykeandev.com"
              className="text-sm font-semibold px-4 py-2 rounded-full text-white hover:opacity-90 transition-opacity"
              style={{ background: "#bf5a38" }}
            >
              Get in touch
            </a>
          </div>
        </div>
      </nav>

      <main>
        {/* ── Hero ────────────────────────────────────── */}
        <section className="mx-auto max-w-[680px] px-5 pt-16 pb-14 sm:pt-24 sm:pb-20">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#bf5a38] mb-5">
            Peachy Kean DevOps · Selected Work
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#3d3530] leading-[1.1] tracking-tight mb-6">
            We help small professional firms and their clients turn messy
            operational data into useful tools, reports, and workflows.
          </h1>
          <p className="text-lg text-[#1a1410] opacity-65 leading-relaxed max-w-[520px]">
            Each project follows the same lens: find where measurable business
            value is leaking because systems, people, and data don&rsquo;t line
            up — then close the gap and document the result.
          </p>
        </section>

        {/* ── Case Studies ────────────────────────────── */}
        <section className="pb-20 sm:pb-28">
          <div className="mx-auto max-w-[680px] px-5 space-y-6">
            {CASE_STUDIES.map((study) => (
              <CaseStudyCard key={study.slug} study={study} />
            ))}
          </div>
        </section>
      </main>

      {/* ── Footer ──────────────────────────────────── */}
      <footer
        className="border-t border-[#e0d8cc]"
        style={{ background: "#f5f0e8" }}
      >
        <div className="mx-auto max-w-[680px] px-5 py-8">
          <p className="text-xs text-[#1a1410] opacity-45 text-center">
            &copy; 2026 Peachy Kean DevOps LLC &middot; Asheville, NC &middot;{" "}
            <a
              href="mailto:john@peachykeandev.com"
              className="hover:text-[#bf5a38] hover:opacity-100 transition-colors"
            >
              john@peachykeandev.com
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
