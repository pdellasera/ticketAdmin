import { Navigate, Route, Routes } from "react-router-dom";
import { AppLayout } from "@/components/layout/AppLayout";
import { Dashboard } from "@/pages/Dashboard";
import { Eventos } from "@/pages/Eventos";
import { Recaudo } from "@/pages/Recaudo";
import { Reportes } from "@/pages/Reportes";
import { Promociones } from "@/pages/Promociones";
import { Usuarios } from "@/pages/Usuarios";
import { Configuracion } from "@/pages/Configuracion";
import { Login } from "@/pages/Login";

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route element={<AppLayout />}>
        <Route path="/inicio" element={<Dashboard />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/recaudo" element={<Recaudo />} />
        <Route path="/reportes" element={<Reportes />} />
        <Route path="/promociones" element={<Promociones />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/configuracion" element={<Configuracion />} />
      </Route>
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}
