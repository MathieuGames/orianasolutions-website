import React from "react";

const variants = {
  h1: "font-heading leading-none text-[42px] xs:text-[54px] xl:text-[72px] 2xl:text-[71px] 3xl:text-[91px] 3xl:leading-[91px] text-title",
  h2: "font-heading text-[32px] md:text-[50px] lg:text-[50px] 2xl:text-[58px] 3xl:text-[66px] 4xl:text-[75px] lg:leading-[60px] 2xl:leading-[68px] 3xl:leading-[76px] 4xl:leading-[83px] tracking-normal lg:tracking-[-2px] text-title",
  h3: "font-heading text-[28px] leading-[100%] md:text-[44px] md:leading-[52px] 2xl:text-[42px] 3xl:text-[50px] 4xl:text-[60px] 3xl:leading-[58px] 4xl:leading-[72px] tracking-[-3%] text-title",
  h4: "font-heading font-normal text-[28px] leading-[34px] md:text-[36px] md:leading-[44px] lg:text-[36px] 2xl:text-[40px] 3xl:text-[44px] 4xl:text-[48px] lg:leading-[44px] 2xl:leading-[48px] 3xl:leading-[52px] 4xl:leading-[56px] text-title",
  h5: "font-heading font-normal text-[22px] leading-[30px] md:text-[28px] md:leading-[36px] lg:text-[28px] 2xl:text-[30px] 3xl:text-[33px] 4xl:text-[36px] lg:leading-[36px] 2xl:leading-[38px] 3xl:leading-[41px] 4xl:leading-[44px] 4xl:tracking-[-1.08px] text-title",
  h6: "font-heading font-normal text-[28px] lg:text-[28px] 2xl:text-[30px] 3xl:text-[33px] 4xl:text-[36px] lg:leading-[36px] 2xl:leading-[38px] 3xl:leading-[41px] 4xl:leading-[44px] 4xl:tracking-[-1.08px] text-title",
  "p-hero": "md:leading-7 text-[16px] md:text-[18px] xl:leading-8 2xl:text-[20px] 3xl:text-[24px] 3xl:leading-[36px] 2xl:tracking-[-0.5px] text-[#535353]",
  "p-large": "text-[16px] text-[#535353] lg:text-[18px] 2xl:text-[20px] 3xl:text-[22px] 4xl:text-[24px] leading-[150%] lg:leading-[28px] 2xl:leading-[30px] 3xl:leading-[34px] 4xl:leading-[38px]",
  "p-base": "text-base text-[#010D3E] lg:text-[21px] 3xl:text-[24px] 4xl:text-[28px] 2xl:tracking-[0%] 2xl:text-[#535353]",
};

export type TypographyVariant = keyof typeof variants;

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant: TypographyVariant;
  as?: React.ElementType;
  className?: string;
  children?: React.ReactNode;
}

export function Typography({
  variant,
  as,
  className = "",
  children,
  ...props
}: TypographyProps) {
  const defaultComponents: Record<TypographyVariant, React.ElementType> = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h2",
    h5: "p",
    h6: "span",
    "p-hero": "p",
    "p-large": "p",
    "p-base": "p",
  };

  const Component = as || defaultComponents[variant];

  let combinedClass = `${variants[variant]} ${className}`.trim();

  return (
    <Component className={combinedClass} {...props}>
      {children}
    </Component>
  );
}
