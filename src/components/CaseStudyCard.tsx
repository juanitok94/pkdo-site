"use client";

import { useState, useRef } from "react";
import { CaseStudy } from "@/lib/case-studies";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#bf5a38] mb-1.5">
      {children}
    </p>
  );
}

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  const [open, setOpen] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);

  function toggle() {
    setOpen((prev) => !prev);
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle();
    }
  }

  return (
    <article className="bg-white border border-[#e8e0d4] rounded-2xl overflow-hidden">
      {/* Toggle header */}
      <div
        role="button"
        tabIndex={0}
        aria-expanded={open}
        onClick={toggle}
        onKeyDown={handleKeyDown}
        className="flex items-start justify-between gap-4 p-6 sm:p-8 cursor-pointer select-none"
      >
        <div className="min-w-0">
          <span className="inline-block text-[10px] font-medium text-[#3d3530] bg-[#f5f0e8] border border-[#e0d8cc] px-2.5 py-1 rounded-full mb-3">
            {study.category}
          </span>
          <h3 className="text-xl font-bold text-[#3d3530] leading-tight mb-2">
            {study.client}
          </h3>
          <p className="text-sm text-[#1a1410] opacity-60 leading-relaxed">
            {study.meta}
          </p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5 flex-shrink-0 mt-1 text-[#bf5a38] transition-transform duration-300"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      {/* Collapsible body */}
      <div
        ref={bodyRef}
        className="overflow-hidden transition-[max-height] duration-300 ease-in-out"
        style={{
          maxHeight: open ? (bodyRef.current?.scrollHeight ?? 2000) + "px" : "0px",
        }}
      >
        <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0 border-t border-[#e8e0d4]">
          <div className="space-y-5 pt-5">
            <div>
              <SectionLabel>The situation</SectionLabel>
              <p className="text-sm text-[#1a1410] opacity-75 leading-relaxed">
                {study.situation}
              </p>
            </div>

            <div>
              <SectionLabel>Where value was leaking</SectionLabel>
              <p className="text-sm text-[#1a1410] opacity-75 leading-relaxed">
                {study.gap}
              </p>
            </div>

            <div>
              <SectionLabel>What we built</SectionLabel>
              <p className="text-sm text-[#1a1410] opacity-75 leading-relaxed">
                {study.built}
              </p>
            </div>

            <div>
              <SectionLabel>Value created</SectionLabel>
              <ul className="space-y-1.5">
                {study.value.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[#1a1410] opacity-75 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#bf5a38] mt-1.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <SectionLabel>Stack</SectionLabel>
              <p className="text-sm text-[#1a1410] opacity-75 leading-relaxed">
                {study.stack}
              </p>
            </div>

            <div>
              <SectionLabel>Proof & status</SectionLabel>
              <p className="text-sm text-[#1a1410] opacity-75 leading-relaxed">
                {study.proof}
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
