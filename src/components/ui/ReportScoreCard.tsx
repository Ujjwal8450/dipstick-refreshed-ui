import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ReportScoreCardProps {
  testId: string;
  score: number;
  onClick?: () => void;
  delay?: number;
}

function getScoreColor(score: number): string {
  if (score >= 80) return "from-emerald-500 to-emerald-600";
  if (score >= 60) return "from-cyan-500 to-cyan-600";
  if (score >= 40) return "from-amber-500 to-amber-600";
  return "from-red-500 to-red-600";
}

function getScoreBorder(score: number): string {
  if (score >= 80) return "border-emerald-500/30";
  if (score >= 60) return "border-cyan-500/30";
  if (score >= 40) return "border-amber-500/30";
  return "border-red-500/30";
}

export function ReportScoreCard({ testId, score, onClick, delay = 0 }: ReportScoreCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay }}
      whileHover={{ scale: 1.05 }}
      onClick={onClick}
      className={cn(
        "relative overflow-hidden rounded-xl border p-4",
        "bg-navy-light cursor-pointer transition-all duration-300",
        "hover:shadow-lg",
        getScoreBorder(score)
      )}
    >
      <div className="text-center">
        <p className="text-xs text-muted-foreground mb-1">{testId}</p>
        <div className={cn(
          "text-2xl font-bold bg-gradient-to-br bg-clip-text text-transparent",
          getScoreColor(score)
        )}>
          {score.toFixed(1)}%
        </div>
      </div>
      
      {/* Progress bar at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-navy">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${score}%` }}
          transition={{ duration: 0.6, delay: delay + 0.2 }}
          className={cn("h-full bg-gradient-to-r", getScoreColor(score))}
        />
      </div>
    </motion.div>
  );
}