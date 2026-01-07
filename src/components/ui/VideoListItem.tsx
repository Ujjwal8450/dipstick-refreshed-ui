import { motion } from "framer-motion";
import { Play, CheckCircle2, Circle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";

interface VideoListItemProps {
  title: string;
  duration?: string;
  progress: number;
  isCompleted?: boolean;
  onClick?: () => void;
  delay?: number;
}

export function VideoListItem({ 
  title, 
  duration,
  progress, 
  isCompleted,
  onClick,
  delay = 0 
}: VideoListItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay }}
      onClick={onClick}
      className={cn(
        "group flex items-center gap-4 p-4 rounded-xl border border-border",
        "bg-navy-light cursor-pointer transition-all duration-300",
        "hover:border-primary/50 hover:bg-navy-lighter"
      )}
    >
      {/* Status icon */}
      <div className={cn(
        "w-10 h-10 rounded-full flex items-center justify-center shrink-0",
        isCompleted ? "bg-emerald-500/20" : "bg-primary/20"
      )}>
        {isCompleted ? (
          <CheckCircle2 className="w-5 h-5 text-emerald-400" />
        ) : progress > 0 ? (
          <Play className="w-5 h-5 text-primary" />
        ) : (
          <Circle className="w-5 h-5 text-muted-foreground" />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <h4 className="font-medium text-foreground truncate mb-2">{title}</h4>
        <div className="flex items-center gap-3">
          <Progress value={progress} className="flex-1 h-1.5" />
          <span className="text-xs text-muted-foreground shrink-0">{progress}%</span>
        </div>
      </div>

      {/* Duration */}
      {duration && (
        <span className="text-sm text-muted-foreground shrink-0">{duration}</span>
      )}
    </motion.div>
  );
}