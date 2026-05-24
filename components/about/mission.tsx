import Container from "@/components/shared/container";
import Tag from "@/components/ui/tag";
import { Typography } from "@/components/ui/typography";

export default function Mission() {
	return (
		<Container className="py-16 ">
			<div className="w-full flex flex-col items-center text-center">
				<div className="mb-4">
					<Tag>Notre mission</Tag>
				</div>

				<Typography variant="h4" className="max-w-[900px]">
					Chez Oriana Solutions, notre mission est de transformer les idées de nos clients en solutions technologiques sur mesure, performantes et conçues pour faire croître leur entreprise.
				</Typography>
			</div>
		</Container>
	);
}
