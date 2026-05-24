import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="w-full px-[27px] md:px-10 xl:px-20 2xl:px-34 pt-4 pb-2">
      <ol className="flex items-center flex-wrap gap-1 text-[13px]">
        {/* Home */}
        <li className="flex items-center gap-1">
          <Link
            href="/"
            className="text-muted/60 hover:text-primary transition-colors duration-150"
          >
            Accueil
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center gap-1">
              {/* Chevron separator */}
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-muted/30 shrink-0"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>

              {isLast || !item.href ? (
                <span className="text-heading font-medium">{item.label}</span>
              ) : (
                <Link
                  href={item.href}
                  className="text-muted/60 hover:text-primary transition-colors duration-150"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
