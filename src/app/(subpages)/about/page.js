import Image from "next/image";
import RenderModel from "@/components/RenderModel";
import bg from "../../../../public/background/about-background.png";
import Hat from "@/components/models/Hat";
import AboutDetails from "@/components/about";

export default function Home() {
  return (
    <div>
      <Image
        src={bg}
        alt="background-image"
        className="fixed w-full h-full top-0 left-0 object-cover object-center opacity-50 -z-50"
      />

      <div className="w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-1/2 -translate-y-1/2 left-0">
        <RenderModel>
          <Hat />
        </RenderModel>
      </div>

      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        <div className="absolute flex flex-col items-center text-center top-1/2 sm:top-[60%] left-1/2 -translate-y-1/2 -translate-x-1/2">
          <h2 className="font-bold text-6xl xs:text-7xl sm:text-8xl lg:text-9xl text-accent">Maximilian Wu</h2>
          <p className="font-light text-foreground text-lg">Meet the wizard behind this portfolio</p>
        </div>
      </div>

      <AboutDetails />
    </div>
  );
}
