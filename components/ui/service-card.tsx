import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
}

export default function ServiceCard({
  title,
  description,
  href,
}: ServiceCardProps) {
  return (
    <Link href={href} className="group w-full bg-white border shadow-xl md:shadow-none border-[#DADADA] rounded-2xl p-6 block hover:border-black/20 transition-colors">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex flex-col items-center sm:items-start gap-2">
          <h3 className="font-heading font-normal text-xl leading-7 md:text-2xl md:leading-8 text-heading">
            {title}
          </h3>
          <p className="max-w-[458px] text-center sm:text-start leading-5.5 text-base md:leading-6 text-[#646464]">
            {description}
          </p>
        </div>
        <span className="shrink-0 inline-flex items-center justify-center sm:justify-start gap-1.5 text-sm font-medium text-primary group-hover:gap-3 transition-all duration-200 w-full sm:w-auto">
          En savoir plus <span>→</span>
        </span>
      </div>
    </Link>
  );
}
