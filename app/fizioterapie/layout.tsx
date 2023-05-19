export default function FizioterapieLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
