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
    <nav className="sticky top-0 z-40 w-full border-b-[3px] border-neo-black bg-cream">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-8">
        <div className="flex items-center gap-2 text-neo-black">
          <Coins className="h-8 w-8 stroke-[2.5px]" />
          <span className="text-2xl font-bold tracking-tight text-neo-black uppercase">Greedy<span className="text-neo-blue">Coin</span></span>
        </div>
        
        <div className="flex items-center gap-2 md:gap-4">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-2 rounded-neo px-4 py-2.5 text-base font-bold transition-all border-[3px]",
                  isActive
                    ? "bg-neo-yellow border-neo-black text-neo-black shadow-[2px_2px_0px_rgba(0,0,0,1)]"
                    : "border-transparent text-neo-black hover:border-neo-black hover:bg-white hover:shadow-[2px_2px_0px_rgba(0,0,0,1)]"
                )
              }
            >
              <item.icon className="h-5 w-5 stroke-[2.5px]" />
              <span className="hidden md:inline uppercase">{item.label}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
