import Image from "next/image";
import RenderModel from "@/components/RenderModel";
import Navigation from "@/components/navigation";
import bg from "../../public/background/home-background.png";
import dynamic from "next/dynamic";

const Wizard = dynamic(() => import("@/components/models/Wizard"), {
  ssr: !!false,
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background-image"
        fill
        className="w-full h-full object-cover object-center opacity-50 -z-50"
      />

      <div className="w-full h-screen">
        <Navigation />
        <RenderModel>
          <Wizard />
        </RenderModel>
      </div>
    </main>
  );
}
