import ProjectList from "@/components/projects";
import Image from "next/image";
import { projectsData } from "../../(data)/projectsData";
import RenderModel from "@/components/RenderModel";
import bg from "../../../../public/background/projects-background.png";
import dynamic from "next/dynamic";

const Staff = dynamic(() => import("@/components/models/Staff"), {
  ssr: !!false,
});

export default function Home() {
  return (
    <div>
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background-image"
        className="fixed w-full h-full top-0 left-0 object-cover object-center opacity-50 -z-50"
      />

      <ProjectList projects={projectsData} />

      <div className="flex items-center justify-center fixed top-16 lg:top-20 -translate-x-1/2 lg:translate-x-0 left-1/2 lg:-left-16 h-screen -z-10">
        <RenderModel>
          <Staff />
        </RenderModel>
      </div>
    </div>
  );
}
