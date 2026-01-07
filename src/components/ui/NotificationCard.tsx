import { motion } from "framer-motion";
import { LucideIcon, Bell, AlertCircle, CheckCircle2, Info } from "lucide-react";
import { cn } from "@/lib/utils";

type NotificationType = "info" | "success" | "warning" | "default";

interface NotificationCardProps {
  title: string;
  message: string;
  timestamp: string;
  type?: NotificationType;
  isRead?: boolean;
  onClick?: () => void;
  delay?: number;
}

const typeConfig: Record<NotificationType, { icon: LucideIcon; styles: string }> = {
  info: {
    icon: Info,
    styles: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
  },
  success: {
    icon: CheckCircle2,
    styles: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  },
  warning: {
    icon: AlertCircle,
    styles: "bg-amber-500/20 text-amber-400 border-amber-500/30",
  },
  default: {
    icon: Bell,
    styles: "bg-primary/20 text-primary border-primary/30",
  },
};

export function NotificationCard({ 
  title, 
  message, 
  timestamp, 
  type = "default",
  isRead = false,
  onClick,
  delay = 0 
}: NotificationCardProps) {
  const { icon: Icon, styles } = typeConfig[type];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay }}
      onClick={onClick}
      className={cn(
        "relative flex gap-4 p-4 rounded-xl border",
        "bg-navy-light cursor-pointer transition-all duration-300",
        "hover:bg-navy-lighter",
        isRead ? "border-border opacity-70" : "border-primary/30"
      )}
    >
      {/* Unread indicator */}
      {!isRead && (
        <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-primary animate-pulse" />
      )}

      {/* Icon */}
      <div className={cn("w-10 h-10 rounded-full flex items-center justify-center shrink-0 border", styles)}>
        <Icon className="w-5 h-5" />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <h4 className="font-medium text-foreground mb-1">{title}</h4>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-2">{message}</p>
        <span className="text-xs text-muted-foreground">{timestamp}</span>
      </div>
    </motion.div>
  );
}