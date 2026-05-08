import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";

export function Layout() {
  return (
    <div className="min-h-screen bg-cream text-neo-black font-sans selection:bg-neo-yellow">
      <Navbar />
      <main className="container mx-auto px-4 py-8 md:px-8 md:py-12">
        <Outlet />
      </main>
    </div>
  );
}
