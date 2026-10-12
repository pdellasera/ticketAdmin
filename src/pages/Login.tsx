import { BrandPanel } from "@/components/login/BrandPanel";
import { LoginCard } from "@/components/login/LoginCard";

export function Login() {
  return (
    <div className="flex min-h-screen bg-[#eef1f7]">
      <BrandPanel />

      <main className="relative flex min-w-0 flex-1 items-center justify-center overflow-hidden p-6 sm:p-10">
        <svg
          viewBox="0 0 48 48"
          fill="none"
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 top-1/2 h-[200px] w-[200px] -translate-y-1/2 text-blue-300/40"
        >
          <path
            d="M8 14 L20 24 L8 34"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.45"
          />
          <path
            d="M20 14 L32 24 L20 34"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.85"
          />
        </svg>

        <LoginCard />
      </main>
    </div>
  );
}
