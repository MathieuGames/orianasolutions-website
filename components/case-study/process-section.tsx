import Container from "@/components/shared/container";
import { Typography } from "@/components/ui/typography";
import { processSteps } from "@/data/caseStudy";

export default function ProcessSection() {
  return (
    <Container className="w-full sm:max-w-[90%]">
      <div className="flex flex-col lg:gap-10 md:gap-6 gap-4 ">
        <Typography variant="h4" className="sm:text-start text-center mb-6">
          Comment se déroule
          <br />
          un projet avec nous?
        </Typography>

        <div className="flex flex-col divide-y-[1.5px] divide-[#EDEDED] border-t-[1.5px] border-[#EDEDED]">
          {processSteps.map((step) => (
            <div key={step.id} className="flex flex-col lg:flex-row items-start gap-6 py-8 lg:pb-12">
              <div className="w-full flex-1 flex gap-4 items-start">
                <div className="text-2xl font-heading text-[#575757]">{step.number}</div>
                <div className="">
                  <Typography variant="h5">{step.title}</Typography>
                </div>
              </div>

              <div className="w-full lg:w-1/2 flex lg:justify-end">
            
                <p  className="text-[#575757] text-sm md:text-base lg:text-lg 2xl:text-xl lg:max-w-[450px]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
