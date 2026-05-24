import { Typography } from "@/components/ui/typography";

interface TimelineItemProps {
  year: string | number;
  description?: string;
  active?: boolean;
  isLast?: boolean;
}

export default function TimelineItem({
  year,
  description,
  active = false,
  isLast = false,
}: TimelineItemProps) {
  return (
    <div className="flex justify-end gap-5 font-heading">

      {/*  dot + line  */}
      <div className="flex flex-col items-center w-4 shrink-0">

        <div className="relative flex items-center justify-center w-4  shrink-0">
          <div
            className={`rounded-full shrink-0 ${
              active
                ? "w-[12px] h-[12px] bg-black"
                : "w-[10px] h-[10px] bg-gray-300"
            }`}
          />
        </div>

       
        {!isLast && (
          <div className="w-[2px] flex-1 bg-gray-200" />
        )}
      </div>

      {/* year + description  */}
      <div className={`flex-1 ${!isLast ? "pb-8" : "pb-0"}`}>
        <p
          className={`text-5xl  leading-none tracking-tight transition-colors duration-300 ${
            active ? "text-gray-900" : "text-gray-300"
          }`}
        >
          {year}
        </p>

        {description && (
          <p className="mt-3 text-sm leading-relaxed text-gray-400 max-w-[450px]">
            {description}
          </p>
        )}
      </div>

    </div>
  );
}