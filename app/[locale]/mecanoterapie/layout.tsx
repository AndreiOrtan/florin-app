export default function MecanoterapieLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center flex-col">
      <img
        src="/mecanoterapie/layout-background.jpeg"
        alt="MKB"
        className="w-full max-h-[415px]"
      />
      {children}
    </div>
  );
}
