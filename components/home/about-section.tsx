import { stats } from "@/data/stats";
import Container from "../shared/container";
import { Typography } from "@/components/ui/typography";
import AnimatedContent from "@/components/ui/animated-content";
import CountUp from "@/components/ui/count-up";

export default function AboutSection() {
  return (
    <Container parentStyle="flex bg-surface-muted rounded-[20px]" className="py-[52px]!">
      <div className="flex flex-col gap-10 xl:gap-[70px] 2xl:gap-30 w-full">
        <AnimatedContent direction="horizontal" reverse distance={60} duration={0.9} threshold={0.2}>
          <Typography variant="h5" className="max-w-full xl:max-w-[677px]">
            Chaque ligne de code compte. Chaque projet livré est une fierté et chaque client satisfait une motivation de plus.
          </Typography>
        </AnimatedContent>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 2xl:gap-6 w-full">
          {stats.map((stat, i) => (
            <AnimatedContent key={stat.id} distance={40} duration={0.7} delay={i * 0.1} threshold={0.2}>
              <div className="bg-surface-light rounded-[20px] p-5 xl:p-6 flex flex-col gap-7.5 xl:gap-16">
                <p className="text-[11px] xl:text-[14px] leading-[20px] tracking-[1.68px] uppercase text-muted font-normal">
                  {stat.label}
                </p>
                <Typography variant="h6" className="flex items-baseline gap-0.5">
                  <CountUp
                    to={stat.numericValue}
                    separator={stat.separator}
                    duration={2.5}
                    delay={0.2}
                  />
                  <span>+</span>
                </Typography>
              </div>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </Container>
  );
}
