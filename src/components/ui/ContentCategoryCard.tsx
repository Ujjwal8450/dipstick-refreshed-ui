import { motion } from "framer-motion";
import { LucideIcon, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ContentCategoryCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  itemCount: number;
  onClick?: () => void;
  delay?: number;
}

export function ContentCategoryCard({ 
  title, 
  description, 
  icon: Icon, 
  itemCount, 
  onClick,
  delay = 0 
}: ContentCategoryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ scale: 1.02 }}
      onClick={onClick}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border",
        "bg-gradient-to-br from-navy-light to-navy p-6",
        "cursor-pointer transition-all duration-300",
        "hover:border-primary/50 hover:shadow-glow"
      )}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4">
            <Icon className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground mb-3">{description}</p>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
              {itemCount} items
            </span>
          </div>
        </div>
        
        <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
      </div>
      
      {/* Decorative gradient */}
      <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
}