import { CaseStudy } from "@/lib/case-studies";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#bf5a38] mb-1.5">
      {children}
    </p>
  );
}

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <article className="bg-white border border-[#e8e0d4] rounded-2xl p-6 sm:p-8">
      {/* Header */}
      <div className="mb-6 pb-5 border-b border-[#e8e0d4]">
        <div className="mb-1.5">
          <h3 className="text-xl font-bold text-[#3d3530] leading-tight">
            {study.client}
          </h3>
        </div>
        <p className="text-xs text-[#1a1410] opacity-55 mb-3">{study.sector}</p>
        <span className="text-[10px] font-medium text-[#3d3530] bg-[#f5f0e8] border border-[#e0d8cc] px-2.5 py-1 rounded-full">
          {study.category}
        </span>
      </div>

      {/* Sections */}
      <div className="space-y-5">
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
          <SectionLabel>Value word equation</SectionLabel>
          <blockquote className="border-l-4 border-[#bf5a38] bg-[#ede8df] px-4 py-3 text-sm italic text-[#3d3530] leading-relaxed">
            {study.equation}
          </blockquote>
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
    </article>
  );
}
