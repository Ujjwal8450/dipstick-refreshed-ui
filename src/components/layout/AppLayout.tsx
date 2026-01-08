import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Home, FileText, BookOpen, HelpCircle, Bell, User, Menu, X } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: Home, label: "Home", path: "/" },
  { icon: FileText, label: "Reports", path: "/reports" },
  { icon: BookOpen, label: "Content", path: "/content" },
  { icon: HelpCircle, label: "Help", path: "/help" },
];

export function AppLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border">
        <div className="container flex items-center justify-between h-16 px-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
              <span className="text-white font-bold text-lg">D</span>
            </div>
            <span className="text-xl font-semibold text-foreground">
              Dipstick<sup className="text-xs">®</sup>
            </span>
          </div>

          {/* Spacer for centered logo */}
          <div className="hidden md:block" />

          {/* Right actions */}
          <div className="flex items-center gap-1.5">
            <ThemeToggle />
            <NavLink
              to="/notifications"
              className={cn(
                "p-2 rounded-lg transition-all duration-200",
                "text-muted-foreground hover:text-foreground hover:bg-muted"
              )}
              activeClassName="gradient-primary text-white"
            >
              <Bell className="w-5 h-5" />
            </NavLink>
            <NavLink
              to="/profile"
              className={cn(
                "p-2 rounded-lg transition-all duration-200",
                "text-muted-foreground hover:text-foreground hover:bg-muted"
              )}
              activeClassName="gradient-primary text-white"
            >
              <User className="w-5 h-5" />
            </NavLink>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-border overflow-hidden"
            >
              <div className="container py-4 px-4 flex flex-col gap-1">
                {navItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    end={item.path === "/"}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200",
                      "text-muted-foreground hover:text-foreground hover:bg-muted"
                    )}
                    activeClassName="gradient-primary text-white"
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </NavLink>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {/* Main content */}
      <main className="pt-16 pb-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Bottom nav - always visible */}
      <nav className="fixed bottom-0 left-0 right-0 glass-card border-t border-border z-50">
        <div className="flex items-center justify-around py-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={cn(
                "flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-all duration-200",
                "text-muted-foreground"
              )}
              activeClassName="text-primary"
            >
              <item.icon className="w-5 h-5" />
              <span className="text-xs font-medium">{item.label}</span>
            </NavLink>
          ))}
        </div>
      </nav>
    </div>
  );
}