import { NavLink } from "react-router-dom";
import { Coins, Home, Code, Users } from "lucide-react";
import { cn } from "../utils/cn";

export function Navbar() {
  const navItems = [
    { to: "/", label: "Beranda", icon: Home },
    { to: "/demo", label: "Demo", icon: Code },
    { to: "/about", label: "Tentang", icon: Users },
  ];

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        <div className="flex items-center gap-2 text-blue-500">
          <Coins className="h-6 w-6" />
          <span className="text-lg font-bold tracking-tight text-slate-100">Greedy<span className="text-blue-500">Coin</span></span>
        </div>
        
        <div className="flex items-center gap-1 md:gap-4">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-blue-900/30 text-blue-400"
                    : "text-slate-400 hover:bg-slate-800 hover:text-slate-100"
                )
              }
            >
              <item.icon className="h-4 w-4" />
              <span className="hidden md:inline">{item.label}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
