import Image from "next/image";
import Container from "@/components/shared/container";
import { Typography } from "@/components/ui/typography";

interface DynamicServiceSectionProps {
  title: React.ReactNode;
  description: React.ReactNode;
  image: string;
  reverse?: boolean;
  className?: string;
  parentStyle?: string;
  headingClassName?: string;
  imageContainerClassName?: string;
  icon?: string;
  priority?: boolean;
}

export default function DynamicServiceSection({
  title,
  description,
  image,
  reverse = false,
  className,
  parentStyle,
  headingClassName,
  imageContainerClassName,
  icon,
  priority = false,
}: DynamicServiceSectionProps) {
  return (
    <Container
      parentStyle={parentStyle}
      className={`w-full sm:max-w-[90%] pt-0 ${className || ""}`}
    >
      <div
        className={` flex flex-col ${
          reverse ? "lg:flex-row" : "lg:flex-row-reverse"
        } items-center gap-14 `}
      >
        <div className="flex-1 flex flex-col gap-6 sm:text-left text-center">
          <Typography
            variant="h4"
            className={`max-w-[500px] ${headingClassName || ""}`}
          >
            {title}
          </Typography>

          {/* MULTIPLE PARAGRAPHS */}
          <div className="flex flex-col gap-5 max-w-[650px]">
            <p className="text-base xl:text-lg 2xl:text-xl 3xl:text-2xl">{description}</p>
          </div>

          {icon && (
            <div className="mt-6 sm:block hidden">
              <Image
                src={icon}
                alt="extra image"
                width={166}
                height={166}
                className="w-[100px] h-[100px] object-cover rounded-lg"
              />
            </div>
          )}
        </div>

        {/* IMAGE */}
        <div
          className={`flex-1 w-full flex  ${
            reverse
              ? "lg:justify-end justify-center"
              : "lg:justify-start justify-center"
          } `}
        >
          <div className={`sm:w-[320px] w-full lg:w-[420px] rounded-[24px] overflow-hidden bg-[#F3F3F3] ${imageContainerClassName || ""}`}>
            <Image
              src={image}
              alt="service image"
              width={900}
              height={700}
              className="w-full h-full object-cover"
              priority={priority}
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
