import { useState } from "react";
import {
  Building2,
  GraduationCap,
  Award,
  ShieldCheck,
  Sofa,
  Hammer,
  Users,
  School,
  FileCheck,
  ZoomIn,
} from "lucide-react";
import { institutionalGallery, ais153Gallery } from "@/lib/site";
import { CtaRow, SectionHead } from "./sections";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const institutional = [
  { icon: School, label: "School Buses" },
  { icon: GraduationCap, label: "College Buses" },
  { icon: Building2, label: "Educational Institutions" },
  { icon: Users, label: "Staff Transportation" },
  { icon: Building2, label: "Organizations & Institutions" },
] as const;

export function InstitutionalSection() {
  const [hero, ...rest] = institutionalGallery;
  return (
    <section className="border-y border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
        <SectionHead
          eyebrow="Institutional Buses"
          title="Buses Built For Schools, Colleges & Organizations"
          intro="Purpose-built institutional bodies for educational campuses, factories and organizations — safe entry steps, guarded windows, durable interiors and layouts planned around daily passenger loads."
        />
        <div className="mt-12 grid gap-6">
          <figure
            className="group overflow-hidden rounded-sm border border-border bg-background"
            style={{ boxShadow: "var(--shadow-panel)" }}
          >
            <img
              src={hero.src}
              alt={hero.alt}
              loading="lazy"
              decoding="async"
              width={1600}
              height={900}
              className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] sm:h-[30rem]"
            />
            <figcaption className="border-t border-border px-5 py-4 font-display text-xl uppercase">
              {hero.title}
            </figcaption>
          </figure>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((g) => (
              <figure
                key={g.title}
                className="group overflow-hidden rounded-sm border border-border bg-background"
                style={{ boxShadow: "var(--shadow-panel)" }}
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  decoding="async"
                  width={800}
                  height={600}
                  className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] sm:h-56"
                />
                <figcaption className="border-t border-border px-5 py-3 font-display text-lg uppercase">
                  {g.title}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
        <ul className="mt-10 grid gap-px overflow-hidden rounded-sm bg-border sm:grid-cols-3 lg:grid-cols-5">
          {institutional.map((it) => (
            <li key={it.label} className="flex items-center gap-3 bg-background/90 px-5 py-5">
              <it.icon className="h-6 w-6 shrink-0 text-primary" aria-hidden="true" />
              <span className="text-[0.78rem] font-bold uppercase tracking-wider">{it.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function CertificationSection() {
  const [selectedDoc, setSelectedDoc] = useState<(typeof ais153Gallery)[number] | null>(null);

  return (
    <section className="relative isolate overflow-hidden border-b border-border">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="grid gap-10 md:grid-cols-[1fr_0.9fr] md:items-center">
          <div>
            <p className="eyebrow">Safety · Strength · Trust</p>
            <div className="mt-5 inline-flex items-center gap-3 rounded-sm border border-primary/60 bg-primary/10 px-4 py-2">
              <Award className="h-5 w-5 text-primary" aria-hidden="true" />
              <span className="font-display text-xl uppercase tracking-wide text-primary">
                AIS 153 Certified
              </span>
            </div>
            <h2 className="mt-6 text-3xl uppercase sm:text-4xl md:text-5xl">
              Delivering Safe, Reliable &amp; Certified Buses For A Better Tomorrow
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              Alfha Coach Builders, Karur builds to AIS 153 certification — the Indian bus body code
              standard for structural safety. Every body is built around that discipline: verified
              construction, strong steel structure and dependable finish work you can trust for
              years of service.
            </p>
            <div className="mt-8">
              <CtaRow compact />
            </div>
          </div>
          <div className="grid gap-px overflow-hidden rounded-sm bg-border">
            {[
              { icon: ShieldCheck, title: "Safety", body: "AIS 153 certified body construction." },
              {
                icon: Hammer,
                title: "Strength",
                body: "Heavy-gauge steel skeleton, rust-proofed.",
              },
              { icon: Award, title: "Trust", body: "Karur-built, fleet-proven for four decades." },
            ].map((c) => (
              <div key={c.title} className="bg-surface px-6 py-7">
                <c.icon className="h-7 w-7 text-primary" aria-hidden="true" />
                <h3 className="mt-4 text-2xl uppercase">{c.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Dedicated AIS 153 Certification Gallery */}
        <div className="mt-14 sm:mt-16 border-t border-border pt-10 sm:pt-12">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
            <div>
              <p className="eyebrow">Certification Proof &amp; Documentation</p>
              <h3 className="mt-2 font-display text-2xl uppercase tracking-wide sm:text-3xl">
                AIS 153 Certification &amp; Build Verification
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                Original AIS 153 structural compliance records, body code verification, and safety
                documentation from our Karur fabrication workshop.
              </p>
            </div>
            <span className="inline-flex items-center gap-2 self-start sm:self-auto rounded-sm border border-border bg-surface px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              <FileCheck className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
              Official Build Records
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {ais153Gallery.map((doc, idx) => (
              <figure
                key={doc.src}
                className="group relative overflow-hidden rounded-sm border border-border bg-surface transition-all duration-300 hover:border-primary/60 hover:shadow-lg"
                style={{ boxShadow: "var(--shadow-panel)" }}
              >
                <button
                  type="button"
                  onClick={() => setSelectedDoc(doc)}
                  className="block w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  aria-label={`View enlarged ${doc.title}`}
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-background/60">
                    <img
                      src={doc.src}
                      alt={doc.alt}
                      loading="lazy"
                      decoding="async"
                      width={1600}
                      height={1200}
                      className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-background/0 transition-colors duration-300 group-hover:bg-background/20 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <span className="inline-flex items-center gap-2 rounded-sm bg-background/90 px-3.5 py-2 text-xs font-bold uppercase tracking-wider text-foreground shadow-md backdrop-blur-sm border border-border/60">
                        <ZoomIn className="h-4 w-4 text-primary" aria-hidden="true" />
                        Click to Enlarge
                      </span>
                    </div>
                    <div className="absolute bottom-2.5 right-2.5 rounded-xs bg-background/85 px-2 py-0.5 text-[0.68rem] font-bold uppercase tracking-wider text-muted-foreground backdrop-blur-xs border border-border/40">
                      Doc {idx + 1} of 4
                    </div>
                  </div>
                  <figcaption className="border-t border-border px-5 py-4">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="font-display text-lg uppercase tracking-wide text-foreground">
                          {doc.title}
                        </p>
                        <p className="mt-0.5 text-xs text-muted-foreground">{doc.subtitle}</p>
                      </div>
                      <span className="shrink-0 rounded-xs border border-border p-1.5 text-muted-foreground transition-colors group-hover:border-primary/60 group-hover:text-primary">
                        <ZoomIn className="h-4 w-4" aria-hidden="true" />
                      </span>
                    </div>
                  </figcaption>
                </button>
              </figure>
            ))}
          </div>
        </div>

        {/* Modal / Dialog for viewing enlarged documentation */}
        <Dialog open={!!selectedDoc} onOpenChange={(open) => !open && setSelectedDoc(null)}>
          <DialogContent className="max-w-4xl border-border bg-background p-4 sm:p-6 shadow-2xl">
            {selectedDoc && (
              <>
                <DialogHeader className="mb-2 text-left">
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" aria-hidden="true" />
                    <DialogTitle className="font-display text-xl uppercase tracking-wide">
                      {selectedDoc.title}
                    </DialogTitle>
                  </div>
                  <DialogDescription className="text-xs text-muted-foreground">
                    {selectedDoc.subtitle} · AIS 153 Certified Bus Body Fabrication
                  </DialogDescription>
                </DialogHeader>
                <div className="relative mt-2 overflow-hidden rounded-sm border border-border bg-black/85 flex items-center justify-center p-2">
                  <img
                    src={selectedDoc.src}
                    alt={selectedDoc.alt}
                    className="max-h-[75vh] w-auto max-w-full object-contain"
                  />
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}

const usps = [
  { icon: Award, title: "AIS 153 Certified", body: "For Maximum Safety" },
  { icon: School, title: "School, College & Staff Buses", body: "Built To Perfection" },
  { icon: Hammer, title: "Strong & Durable Construction", body: "For Long Lasting Performance" },
  { icon: Sofa, title: "Comfortable & Spacious Design", body: "For Every Journey" },
] as const;

export function UspSection() {
  return (
    <section className="border-b border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
        <SectionHead
          eyebrow="School, College & Staff Buses"
          title="Built To Perfection"
          intro="Safety-first structures, strong and durable construction, comfortable spacious layouts and reliable long-term performance on every institutional build."
        />
        <div className="mt-12 grid gap-px overflow-hidden rounded-sm bg-border sm:grid-cols-2 lg:grid-cols-4">
          {usps.map((u) => (
            <article
              key={u.title}
              className="bg-background/90 p-7 transition-colors hover:bg-background"
            >
              <u.icon className="h-8 w-8 text-primary" aria-hidden="true" />
              <h3 className="mt-5 text-xl uppercase leading-tight">{u.title}</h3>
              <p className="mt-2 text-[0.78rem] font-bold uppercase tracking-widest text-muted-foreground">
                {u.body}
              </p>
            </article>
          ))}
        </div>
        <p className="mt-10 font-display text-2xl uppercase tracking-wide text-primary sm:text-3xl">
          Quality You Can Trust, Excellence We Deliver
        </p>
      </div>
    </section>
  );
}
