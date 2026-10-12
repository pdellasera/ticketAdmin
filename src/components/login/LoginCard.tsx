import { useState } from "react";
import type { FormEvent, ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Eye, EyeOff, Languages, Lock, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Select } from "@/components/ui/Select";
import { useToast } from "@/components/ui/Toast";
import { languageOptions, socialProviders, type SocialProvider } from "@/data/login";
import { GoogleIcon, MicrosoftIcon } from "./BrandIcons";
import { SocialButton } from "./SocialButton";
import logo from "@/assets/logo.png";

const brandIcons: Record<SocialProvider["id"], ReactNode> = {
  google: <GoogleIcon className="h-5 w-5" />,
  microsoft: <MicrosoftIcon className="h-5 w-5" />,
};

const fieldClass =
  "h-[56px] w-full rounded-[10px] border border-slate-200 bg-white text-[15px] text-slate-800 placeholder:text-slate-400 transition-colors focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-100";

export function LoginCard() {
  const navigate = useNavigate();
  const { success, warning, info } = useToast();
  const [language, setLanguage] = useState("es");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      warning("Campos incompletos", "Ingresa tu correo y contraseña para continuar.");
      return;
    }
    success("Bienvenido", "Sesión iniciada correctamente.");
    navigate("/inicio");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="w-full max-w-[600px] rounded-[28px] bg-white p-8 shadow-[0_24px_70px_-20px_rgba(15,23,42,0.18)] sm:p-12"
    >
      <div className="flex justify-end">
        <Select
          value={language}
          onChange={setLanguage}
          options={languageOptions}
          icon={<Languages className="h-4 w-4 text-slate-500" />}
        />
      </div>

      <div className="mt-8 flex flex-col items-center text-center">
        <img src={logo} alt="GameGate" className="h-14 w-auto object-contain" />
        <p className="mt-3 text-[15px] text-slate-400">Panel de administración</p>
      </div>

      <div className="mt-7 text-center">
        <h2 className="text-[30px] font-bold tracking-tight text-[#0f1a3d]">Bienvenido de nuevo</h2>
        <p className="mt-1.5 text-[16px] text-slate-500">Inicia sesión para acceder a tu cuenta.</p>
      </div>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <div>
          <label htmlFor="login-email" className="mb-2 block text-[15px] font-medium text-[#1e293b]">
            Correo electrónico
          </label>
          <div className="relative">
            <Mail className="pointer-events-none absolute left-[18px] top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
            <input
              id="login-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@correo.com"
              className={`${fieldClass} pl-[52px] pr-4`}
            />
          </div>
        </div>

        <div>
          <label htmlFor="login-password" className="mb-2 block text-[15px] font-medium text-[#1e293b]">
            Contraseña
          </label>
          <div className="relative">
            <Lock className="pointer-events-none absolute left-[18px] top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
            <input
              id="login-password"
              type={show ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Ingresa tu contraseña"
              className={`${fieldClass} pl-[52px] pr-12`}
            />
            <button
              type="button"
              onClick={() => setShow((s) => !s)}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1.5 text-slate-400 transition-colors hover:text-slate-600"
              aria-label={show ? "Ocultar contraseña" : "Mostrar contraseña"}
            >
              {show ? <Eye className="h-5 w-5" /> : <EyeOff className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="button"
            onClick={() => info("Recuperar contraseña", "Módulo en construcción")}
            className="text-[15px] font-semibold text-[#2563eb] transition-colors hover:text-blue-700 hover:underline"
          >
            ¿Olvidaste tu contraseña?
          </button>
        </div>

        <button
          type="submit"
          className="flex h-[56px] w-full items-center justify-center gap-2 rounded-[10px] bg-[#1d4ed8] text-[16px] font-semibold text-white transition-colors hover:bg-[#1e40af]"
        >
          Iniciar sesión
          <ArrowRight className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-3">
          <span className="h-px flex-1 bg-slate-200" />
          <span className="text-[14px] font-medium text-slate-400">o continúa con</span>
          <span className="h-px flex-1 bg-slate-200" />
        </div>

        <div className="flex gap-3">
          {socialProviders.map((provider) => (
            <SocialButton
              key={provider.id}
              icon={brandIcons[provider.id]}
              label={provider.label}
              onClick={() => info(provider.label, "Módulo en construcción")}
            />
          ))}
        </div>

        <p className="pt-1 text-center text-[15px] text-slate-500">
          ¿No tienes una cuenta?{" "}
          <button
            type="button"
            onClick={() => info("Contacto", "Módulo en construcción")}
            className="font-semibold text-[#2563eb] transition-colors hover:underline"
          >
            Contáctanos
          </button>
        </p>
      </form>
    </motion.div>
  );
}
