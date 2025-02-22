import ProjectList from "@/components/projects";
import Image from "next/image";
import { projectsData } from "../(Data)/projectsData";
import RenderModel from "@/components/RenderModel";
import Staff from "@/components/models/Staff";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image
        src={"/background/projects-background.png"}
        alt="background-image"
        fill
        className="w-full h-full object-cover object-center opacity-50 -z-50"
      />

      <ProjectList projects={projectsData} />

      <div className="flex items-center justify-center fixed top-20 left-0 h-screen">
        <RenderModel>
          <Staff />
        </RenderModel>
      </div>
    </main>
  );
}
