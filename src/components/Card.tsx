import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
import grainImage from "@/assets/images/grain.jpg";

export const Card = ({
  className,
  children,
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <div
      className={twMerge(
        "bg-gray-800 rounded-3xl relative overflow-hidden after:block after:content-[''] after:absolute after:inset-0 after:rounded-3xl after:border-2 after:border-white/30 after:pointer-events-none after:z-20 p-6",
        className
      )}
    >
      <div
        className="absolute inset-0 -z-10 opacity-5"
        style={{
          backgroundImage: `url(${grainImage.src})`,
        }}
      ></div>
      {children}
    </div>
  );
};
