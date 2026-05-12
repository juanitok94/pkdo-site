const CoffeeIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17 8h1a4 4 0 0 1 0 8h-1" />
    <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z" />
    <line x1="6" y1="2" x2="6" y2="4" />
    <line x1="10" y1="2" x2="10" y2="4" />
    <line x1="14" y1="2" x2="14" y2="4" />
  </svg>
);

const MapIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const BarChartIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
    <line x1="2" y1="20" x2="22" y2="20" />
  </svg>
);

type Product = {
  name: string;
  tagline: string;
  status: "live" | "coming-soon";
  href: string | null;
  external: boolean;
  Icon: () => React.JSX.Element;
};

const products: Product[] = [
  {
    name: "Brew Loyalty",
    tagline: "Digital punch cards for indie cafes.",
    status: "live",
    href: "/brewloyalty",
    external: false,
    Icon: CoffeeIcon,
  },
  {
    name: "Haywood Hoppers",
    tagline: "The West Asheville coffee passport.",
    status: "live",
    href: "https://wavl-guide.vercel.app",
    external: true,
    Icon: MapIcon,
  },
  {
    name: "Haywood Analytics",
    tagline: "Neighborhood business intelligence.",
    status: "live",
    href: "https://haywood-analytics.vercel.app",
    external: true,
    Icon: BarChartIcon,
  },
];

const clients = [
  "Dynamite Roasting",
  "Odds Cafe",
  "Blue Spiral 1",
  "IamAVL",
  "LEAF Global Arts",
  "Pisgah Outdoors",
];

function ProductCard({ product }: { product: Product }) {
  const { name, tagline, status, href, external, Icon } = product;
  const disabled = status === "coming-soon";

  const inner = (
    <div
      className={`flex flex-col gap-4 rounded-2xl p-5 border h-full transition-shadow ${
        disabled
          ? "bg-[#f5f0e8] border-[#ddd6cc] opacity-55"
          : "bg-white border-[#e8e0d4] hover:shadow-md"
      }`}
    >
      <span className={disabled ? "text-[#bbb]" : "text-[#bf5a38]"}>
        <Icon />
      </span>
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="font-semibold text-[#3d3530] text-sm">{name}</span>
          {disabled ? (
            <span className="text-[10px] font-medium text-[#999] bg-[#ece8e2] px-2 py-0.5 rounded-full">
              Coming soon
            </span>
          ) : (
            <span className="flex items-center gap-1 text-[10px] font-medium text-green-700 bg-green-50 px-2 py-0.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
              Live
            </span>
          )}
        </div>
        <p className="text-xs text-[#1a1410] opacity-55 leading-relaxed">
          {tagline}
        </p>
      </div>
    </div>
  );

  if (href && !disabled) {
    return (
      <a
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="block"
      >
        {inner}
      </a>
    );
  }

  return <div>{inner}</div>;
}

export default function Home() {
  return (
    <>
      {/* ── Nav ─────────────────────────────────────── */}
      <nav
        className="sticky top-0 z-50 border-b border-[#e0d8cc]"
        style={{ background: "#f5f0e8" }}
      >
        <div className="mx-auto max-w-[680px] px-5 h-14 flex items-center justify-between">
          <img
            src="/peachy-kean-logo.svg"
            alt="Peachy Kean DevOps"
            style={{ height: "40px", width: "auto" }}
          />
          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href="#products"
              className="hidden sm:block text-sm font-medium text-[#3d3530] hover:text-[#bf5a38] transition-colors"
            >
              Products
            </a>
            <a
              href="#about"
              className="hidden sm:block text-sm font-medium text-[#3d3530] hover:text-[#bf5a38] transition-colors"
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
        <section className="mx-auto max-w-[680px] px-5 pt-16 pb-20 sm:pt-24 sm:pb-28">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#bf5a38] mb-5">
            West Asheville, NC
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#3d3530] leading-[1.1] tracking-tight mb-6">
            Software built for independent local businesses.
          </h1>
          <p className="text-lg text-[#1a1410] opacity-65 mb-10 leading-relaxed max-w-[520px]">
            Simple, affordable digital tools for the shops and organizations
            that make Asheville worth living in.
          </p>
          <a
            href="#products"
            className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-full text-white hover:opacity-90 transition-opacity"
            style={{ background: "#3d3530" }}
          >
            See our products
          </a>
        </section>

        {/* ── Products ────────────────────────────────── */}
        <section id="products" className="py-14 sm:py-20 bg-[#ede8df]">
          <div className="mx-auto max-w-[680px] px-5">
            <h2 className="text-xl font-bold text-[#3d3530] mb-6 uppercase tracking-[0.08em] text-sm">
              Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {products.map((p) => (
                <ProductCard key={p.name} product={p} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Proof ───────────────────────────────────── */}
        <section className="py-14 sm:py-20" style={{ background: "#3d3530" }}>
          <div className="mx-auto max-w-[680px] px-5">
            <div className="flex flex-col sm:flex-row gap-10 sm:gap-14 sm:items-start">
              <div className="flex-1 min-w-0">
                <p className="text-2xl sm:text-[1.65rem] font-medium text-[#f5f0e8] leading-snug mb-5">
                  &ldquo;For years I wished someone would find a way to bring
                  all the small local shops together. Then John showed up.&rdquo;
                </p>
                <p className="text-sm font-semibold" style={{ color: "#bf5a38" }}>
                  Audrie Blomquist &mdash; Odds Cafe, West Asheville
                </p>
              </div>
              <div className="flex sm:flex-col gap-8 sm:gap-6 flex-shrink-0">
                <div>
                  <div className="text-3xl font-bold text-white leading-none">
                    $19
                    <span className="text-base font-medium text-[#f5f0e8] opacity-60">
                      /mo
                    </span>
                  </div>
                  <div className="text-[10px] uppercase tracking-widest text-[#f5f0e8] opacity-50 mt-1.5">
                    Per location
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white leading-none">
                    28
                    <span className="text-base font-medium text-[#f5f0e8] opacity-60 ml-0.5">
                      days
                    </span>
                  </div>
                  <div className="text-[10px] uppercase tracking-widest text-[#f5f0e8] opacity-50 mt-1.5">
                    Free trial
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── About ───────────────────────────────────── */}
        <section
          id="about"
          className="mx-auto max-w-[680px] px-5 py-16 sm:py-24"
        >
          <div className="flex flex-col sm:flex-row gap-10 sm:gap-16">
            <div className="flex-1 min-w-0">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#3d3530] leading-snug mb-5">
                A West Asheville neighbor building tools for West Asheville
                neighbors.
              </h2>
              <p className="text-base text-[#1a1410] opacity-65 leading-relaxed">
                Peachy Kean DevOps is John Kean, based in West Asheville. The
                tools we build are the ones we wished existed — simple,
                affordable, and built for independent businesses that don&rsquo;t
                have enterprise budgets.
              </p>
            </div>
            <div className="sm:w-44 flex-shrink-0">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#bf5a38] mb-4">
                Also worked with
              </p>
              <ul className="space-y-2.5">
                {clients.map((c) => (
                  <li
                    key={c}
                    className="text-sm font-medium text-[#3d3530] opacity-80"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </div>
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
