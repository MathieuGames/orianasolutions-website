import Container from "@/components/shared/container";
import Tag from "@/components/ui/tag";
import { Typography } from "@/components/ui/typography";
import TeamCard from "@/components/ui/team-card";
import { team } from "@/data/team";

export default function Team() {
  return (
    <Container className="py-16 sm:max-w-[70%] w-full">
      <div className="w-full flex flex-col gap-12 md:gap-16 items-center text-center">
        <div className="flex flex-col gap-5">
          <div className="">
            <Tag>Notre équipe</Tag>
          </div>

          <div className="flex flex-col gap-10">
            <Typography variant="h1" className="max-w-[900px]">
              Ceux qui bâtissent Oriana
            </Typography>
            <Typography
              variant="p-large"
              className="max-w-[500px] mx-auto text-center"
            >
              Une petite équipe soudée qui livre de grands projets.
            </Typography>
          </div>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-3 sm:gap-10 gap-8 justify-items-center">
          {team.map((person) => (
            <TeamCard
              key={person.id}
              name={person.name}
              role={person.role}
              image={person.image}
              hoverImage={"hoverImage" in person ? (person as typeof person & { hoverImage?: string }).hoverImage : undefined}
              href={person.linkedin}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}
