import { cn } from "@/lib/utils";

export function Avatar({ name, src, className }: { name?: string; src?: string; className?: string }) {
  if (src) {
    return <img src={src} alt={name ?? "avatar"} className={cn("h-9 w-9 rounded-full object-cover", className)} />;
  }
  const initials =
    name
      ?.split(" ")
      .map((n) => n[0])
      .slice(0, 2)
      .join("")
      .toUpperCase() ?? "?";
  return (
    <div
      className={cn(
        "flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-xs font-bold text-white",
        className,
      )}
    >
      {initials}
    </div>
  );
}
