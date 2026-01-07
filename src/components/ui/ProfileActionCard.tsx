import { motion } from "framer-motion";
import { LucideIcon, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Switch } from "@/components/ui/switch";

interface ProfileActionCardProps {
  icon: LucideIcon;
  title: string;
  description?: string;
  variant?: "default" | "destructive";
  hasSwitch?: boolean;
  switchValue?: boolean;
  onSwitchChange?: (value: boolean) => void;
  onClick?: () => void;
  delay?: number;
}

export function ProfileActionCard({
  icon: Icon,
  title,
  description,
  variant = "default",
  hasSwitch,
  switchValue,
  onSwitchChange,
  onClick,
  delay = 0,
}: ProfileActionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay }}
      onClick={!hasSwitch ? onClick : undefined}
      className={cn(
        "flex items-center gap-4 p-4 rounded-xl border border-border",
        "bg-navy-light transition-all duration-300",
        !hasSwitch && "cursor-pointer hover:bg-navy-lighter hover:border-primary/30"
      )}
    >
      {/* Icon */}
      <div className={cn(
        "w-10 h-10 rounded-xl flex items-center justify-center shrink-0",
        variant === "destructive" ? "bg-destructive/20 text-destructive" : "bg-primary/20 text-primary"
      )}>
        <Icon className="w-5 h-5" />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <h4 className={cn(
          "font-medium",
          variant === "destructive" ? "text-destructive" : "text-foreground"
        )}>
          {title}
        </h4>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </div>

      {/* Action */}
      {hasSwitch ? (
        <Switch
          checked={switchValue}
          onCheckedChange={onSwitchChange}
        />
      ) : (
        <ChevronRight className="w-5 h-5 text-muted-foreground" />
      )}
    </motion.div>
  );
}