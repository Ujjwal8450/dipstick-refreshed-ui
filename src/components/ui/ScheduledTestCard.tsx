import { motion } from "framer-motion";
import { Calendar, Clock, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ScheduledTestCardProps {
  title: string;
  batch: string;
  date: string;
  time: string;
  status: "upcoming" | "in-progress" | "completed";
  delay?: number;
}

const statusColors = {
  upcoming: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
  "in-progress": "bg-amber-500/20 text-amber-400 border-amber-500/30",
  completed: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
};

const statusLabels = {
  upcoming: "Upcoming",
  "in-progress": "In Progress",
  completed: "Completed",
};

export function ScheduledTestCard({ title, batch, date, time, status, delay = 0 }: ScheduledTestCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ scale: 1.02 }}
      className="group relative overflow-hidden rounded-xl border border-border bg-navy-light p-4 cursor-pointer transition-all duration-300 hover:border-primary/50"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <span className={cn("px-2 py-0.5 text-xs font-medium rounded-full border", statusColors[status])}>
              {statusLabels[status]}
            </span>
          </div>
          <h3 className="font-semibold text-foreground truncate mb-1">{title}</h3>
          <p className="text-sm text-muted-foreground">{batch}</p>
        </div>
        
        <div className="flex flex-col items-end gap-1 text-right">
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>{time}</span>
          </div>
        </div>
      </div>
      
      {/* Hover arrow */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
        <ChevronRight className="w-5 h-5 text-primary" />
      </div>
    </motion.div>
  );
}