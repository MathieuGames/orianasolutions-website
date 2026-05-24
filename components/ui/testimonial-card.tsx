import React from "react";
import type { Testimonial } from "@/data/testimonials";
import Image from "next/image";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-6 p-7.5 rounded-[20px] border border-[#1b1b1b14] shadow-xl">
      <p className="max-w-[245px] text-base font-body text-black leading-[23px] tracking-[-1%]">
        {testimonial.quote}{" "}
      </p>

      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
          <Image
            src={testimonial.avatar}
            width={60}
            height={60}
            alt="author"
            className={`w-full h-full object-cover${testimonial.avatarPosition ? ` object-${testimonial.avatarPosition}` : " object-center"}${testimonial.avatarZoom ? " scale-[1.3]" : ""}`}
          />
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="font-heading text-sm md:text-base font-medium text-black">
            {testimonial.author}
          </h4>
          <p className="text-xs md:text-sm">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
