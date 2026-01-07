import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatusCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  variant?: "default" | "success" | "warning" | "info" | "accent";
  delay?: number;
}

const variantStyles = {
  default: "from-navy-light to-navy border-border",
  success: "from-emerald-500/20 to-emerald-600/10 border-emerald-500/30",
  warning: "from-amber-500/20 to-amber-600/10 border-amber-500/30",
  info: "from-cyan-500/20 to-cyan-600/10 border-cyan-500/30",
  accent: "from-purple-500/20 to-purple-600/10 border-purple-500/30",
};

const iconStyles = {
  default: "bg-navy-lighter text-muted-foreground",
  success: "bg-emerald-500/20 text-emerald-400",
  warning: "bg-amber-500/20 text-amber-400",
  info: "bg-cyan-500/20 text-cyan-400",
  accent: "bg-purple-500/20 text-purple-400",
};

export function StatusCard({ title, value, icon: Icon, variant = "default", delay = 0 }: StatusCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className={cn(
        "relative overflow-hidden rounded-2xl border p-5",
        "bg-gradient-to-br",
        variantStyles[variant]
      )}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-muted-foreground mb-1">{title}</p>
          <p className="text-3xl font-bold text-foreground">{value}</p>
        </div>
        <div className={cn("p-3 rounded-xl", iconStyles[variant])}>
          <Icon className="w-6 h-6" />
        </div>
      </div>
      
      {/* Decorative glow */}
      <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 blur-2xl" />
    </motion.div>
  );
}