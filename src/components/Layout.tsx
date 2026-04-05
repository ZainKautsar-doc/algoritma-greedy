import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";

export function Layout() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-blue-500/30">
      <Navbar />
      <main className="container mx-auto px-4 py-8 md:px-8 md:py-12">
        <Outlet />
      </main>
    </div>
  );
}
