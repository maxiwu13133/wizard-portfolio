"use client";

import { Canvas } from "@react-three/fiber";
import clsx from "clsx";
import { Suspense } from "react";

const RenderModel = ({ children, className }) => {
  return (
    <div className="">
      <Canvas className={clsx("w-screen h-screen relative", className)}>
        <Suspense fallback={null}>{children}</Suspense>
      </Canvas>
    </div>
  );
};

export default RenderModel;
