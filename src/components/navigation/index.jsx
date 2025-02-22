"use client";
import { BtnList } from "@/app/(Data)/personalData";
import NavButton from "./NavButton";

const Navigation = () => {
  const angleIncrement = 360 / BtnList.length;

  return (
    <div className="fixed h-screen w-screen flex items-center justify-center">
      <div className="flex items-center justify-center group relative hover:pause animate-spin-slow">
        {BtnList.map((btn, i) => {
          const angleRad = (i * angleIncrement * Math.PI) / 180;
          const radius = "calc(20vw - 1rem)";
          const x = `calc(${radius} * ${Math.cos(angleRad)})`;
          const y = `calc(${radius} * ${Math.sin(angleRad)})`;

          return <NavButton key={i} x={x} y={y} {...btn} />
        })}
      </div>
    </div>
  );
};

export default Navigation;
