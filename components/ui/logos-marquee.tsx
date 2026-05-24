import Image from "next/image";
import { testimonialsLogo } from "@/data/testimonials";
import Tag from "@/components/ui/tag";

interface LogosMarqueeProps {
  className?: string;
}

const LogosMarquee = ({ className }: LogosMarqueeProps) => {
  return (
    <div className={`flex flex-col justify-center items-center gap-7.5 lg:gap-10.5 ${className ?? ""}`}>
      <div className="flex">
        <Tag>Ceux qui nous ont fait confiance</Tag>
      </div>
      <div className="flex flex-row flex-wrap justify-center items-center gap-x-14 md:gap-x-20 gap-y-6 p-2.5 mt-3 mb-10">
        {testimonialsLogo.map((logo, index) => (
          <Image
            key={index}
            src={logo.src}
            alt={`Logo ${index}`}
            height={40}
            width={logo.width}
            style={{ height: "auto" }}
            className={logo.className ?? "grayscale opacity-50"}
          />
        ))}
      </div>
    </div>
  );
};

export default LogosMarquee;
