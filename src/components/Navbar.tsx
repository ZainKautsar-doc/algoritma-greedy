import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Coins, Home, Code, Users, GraduationCap, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../utils/cn";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { to: "/", label: "Beranda", icon: Home },
    { to: "/demo", label: "Demo", icon: Code },
    { to: "/quiz", label: "Kuis", icon: GraduationCap },
    { to: "/about", label: "Tentang", icon: Users },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b-[4px] border-neo-black bg-cream">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-8">
        <NavLink to="/" className="flex items-center gap-2 text-neo-black group" onClick={closeMenu}>
          <div className="bg-neo-blue p-1.5 rounded-neo border-[3px] border-neo-black shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-transform group-hover:-rotate-6">
            <Coins className="h-7 w-7 text-white stroke-[2.5px]" />
          </div>
          <span className="text-2xl font-black tracking-tight text-neo-black uppercase italic">
            Greedy<span className="text-neo-blue">Coin</span>
          </span>
        </NavLink>
        
        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-4">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-2 rounded-neo px-4 py-2 text-base font-black transition-all border-[3px] uppercase",
                  isActive
                    ? "bg-neo-yellow border-neo-black text-neo-black shadow-[4px_4px_0px_rgba(0,0,0,1)] -translate-y-1"
                    : "border-transparent text-neo-black hover:border-neo-black hover:bg-white hover:shadow-[3px_3px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5"
                )
              }
            >
              <item.icon className="h-5 w-5 stroke-[3px]" />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="lg:hidden p-2 bg-white border-[3px] border-neo-black rounded-neo shadow-[3px_3px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] transition-all active:translate-y-0 active:shadow-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="h-8 w-8 stroke-[3px]" /> : <Menu className="h-8 w-8 stroke-[3px]" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden border-t-[3px] border-neo-black bg-white overflow-hidden shadow-[0_10px_0px_rgba(0,0,0,0.1)]"
          >
            <div className="flex flex-col p-4 gap-3">
              {navItems.map((item, index) => (
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                  key={item.to}
                >
                  <NavLink
                    to={item.to}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      cn(
                        "flex items-center gap-4 rounded-neo px-6 py-4 text-xl font-black transition-all border-[3px] uppercase w-full",
                        isActive
                          ? "bg-neo-yellow border-neo-black text-neo-black shadow-[4px_4px_0px_rgba(0,0,0,1)]"
                          : "border-neo-black bg-cream text-neo-black shadow-[4px_4px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-y-1"
                      )
                    }
                  >
                    <item.icon className="h-6 w-6 stroke-[3px]" />
                    <span>{item.label}</span>
                  </NavLink>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
