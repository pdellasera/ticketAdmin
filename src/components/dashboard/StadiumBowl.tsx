import estadio3d from "@/assets/estadio-3d.webp";

export function StadiumBowl() {
  return (
    <div className="w-full max-w-[400px]">
      <img src={estadio3d} alt="Estadio" className="w-full" draggable={false} />
    </div>
  );
}