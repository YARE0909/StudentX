import { cn } from "@/lib/utils";

export function Section({
  title,
  subtitle,
  children,
  className,
  kicker,
}: {
  title: string;
  subtitle?: string;
  kicker?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn('mb-12 sm:mb-16', className)}>
      <div className="mb-6">
        {kicker ? <span className="chip">{kicker}</span> : null}
        <h2 className="mt-2 text-3xl font-bold font-header">{title}</h2>
        {subtitle ? <p className="mt-2 max-w-2xl text-muted">{subtitle}</p> : null}
      </div>
      {children}
    </section>
  );
}
