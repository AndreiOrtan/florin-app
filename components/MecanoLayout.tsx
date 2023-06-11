import { ReactNode } from "react";

export default function MecanoLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center flex-col">
      <img
        src="/mecanoterapie/layout-background.jpeg"
        alt="Zimmer"
        className="w-full h-[440px]"
      />
      {children}
    </div>
  );
}
