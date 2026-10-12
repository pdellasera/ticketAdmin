import { motion } from "framer-motion";
import { loginFeatures } from "@/data/login";
import backgroundLogin from "@/assets/background_login.png";
import logoWhite from "@/assets/logo_white.png";

export function BrandPanel() {
  return (
    <section className="relative hidden w-[53%] shrink-0 overflow-hidden lg:block">
      <div className="absolute inset-0">
        <img src={backgroundLogin} alt="" className="h-full w-full object-cover object-left" />
        <div className="absolute inset-0 bg-[#0a1b3e]/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1b3e]/85 via-[#0a1b3e]/25 to-[#0a1b3e]/10" />
      </div>

      <div className="relative flex h-full flex-col px-14 py-12 xl:px-20">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src={logoWhite} alt="GameGate" className="h-12 w-auto object-contain" />
          <p className="mt-2 text-[15px] font-medium text-white/70">
            Gestiona. Vende. Conecta.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="my-auto max-w-[460px]"
        >
          <h1 className="text-[54px] font-bold leading-[1.05] tracking-tight text-white xl:text-[62px]">
            Vive los eventos
            <span className="block text-[#3b82f6]">sin límites</span>
          </h1>
          <p className="mt-6 max-w-[430px] text-[19px] leading-relaxed text-white/85">
            Solución completa para la venta, control y gestión de eventos en estadios y recintos.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-4 gap-5"
        >
          {loginFeatures.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.id} className="flex flex-col items-center gap-3 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/15 bg-white/10">
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <span className="max-w-[130px] text-[15px] font-medium leading-tight text-white/90">
                  {feature.label}
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
