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
  default: "dark:from-navy-light dark:to-navy",
  success: "dark:border-success/30 dark:from-success/20 dark:to-success/5",
  warning: "dark:border-warning/30 dark:from-warning/20 dark:to-warning/5",
  info: "dark:border-info/30 dark:from-info/20 dark:to-info/5",
  accent: "dark:border-accent/30 dark:from-accent/20 dark:to-accent/5",
};

const iconStyles = {
  default: "bg-muted text-muted-foreground",
  success: "bg-success/10 text-success",
  warning: "bg-warning/10 text-warning",
  info: "bg-info/10 text-info",
  accent: "bg-accent/10 text-accent",
};

export function StatusCard({ title, value, icon: Icon, variant = "default", delay = 0 }: StatusCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className={cn(
        "relative overflow-hidden rounded-2xl border border-border p-5 bg-card shadow-card",
        "dark:bg-gradient-to-br",
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