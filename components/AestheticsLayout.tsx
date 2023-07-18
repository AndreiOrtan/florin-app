import { ReactNode } from "react";

export default function AestheticsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex items-center flex-col">
      <img src="/aesthetics_layout.jpeg" alt="Zimmer" className="w-full" />
      {children}
    </div>
  );
}
