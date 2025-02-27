import ProjectList from "@/components/projects";
import Image from "next/image";
import { projectsData } from "../../(data)/projectsData";
import RenderModel from "@/components/RenderModel";
import Staff from "@/components/models/Staff";
import bg from "../../../../public/background/projects-background.png";

export default function Home() {
  return (
    <>
      <Image
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
    </>
  );
}
