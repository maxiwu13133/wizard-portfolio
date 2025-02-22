import Image from "next/image";
import RenderModel from "@/components/RenderModel";
import Wizard from "@/components/models/Wizard";
import Navigation from "@/components/navigation";
import bg from "../../public/background/home-background.png";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image
        src={bg}
        alt="background-image"
        fill
        className="w-full h-full object-cover object-center opacity-50 -z-50"
      />

      <div className="w-full h-screen">
        {/* navigation and 3d model */}
        <Navigation />
        <RenderModel>
          <Wizard />
        </RenderModel>
      </div>
    </main>
  );
}
