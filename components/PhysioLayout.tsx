import { ReactNode } from "react";

export default function PhysioLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center flex-col">
      <img
        src="/fizioterapiePhotos/pagePhoto.jpg"
        alt="Zimmer"
        className="w-full"
      />
      {children}
    </div>
  );
}
