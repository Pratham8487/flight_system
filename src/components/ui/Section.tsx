import type { PropsWithChildren } from "react";

type SectionProps = PropsWithChildren<{
  title?: string;
  subtitle?: string;
  className?: string;
}>;

const Section = ({ title, subtitle, className, children }: SectionProps) => {
  return (
    <section className={`mx-auto w-full max-w-6xl px-6 py-12 ${className ?? ""}`}>
      {title ? (
        <div className="mb-8 space-y-3">
          <p className="text-xs uppercase tracking-[0.35em] text-sky-200/80">{title}</p>
          {subtitle ? <h2 className="text-3xl font-semibold text-white md:text-4xl">{subtitle}</h2> : null}
        </div>
      ) : null}
      {children}
    </section>
  );
};

export default Section;
