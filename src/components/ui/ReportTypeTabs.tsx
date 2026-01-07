import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ReportTypeTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  tabs: { id: string; label: string }[];
}

export function ReportTypeTabs({ activeTab, onTabChange, tabs }: ReportTypeTabsProps) {
  return (
    <div className="inline-flex items-center gap-1 p-1 rounded-xl bg-navy-light border border-border">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={cn(
            "relative px-6 py-2.5 rounded-lg font-medium text-sm transition-all duration-200",
            activeTab === tab.id ? "text-white" : "text-muted-foreground hover:text-foreground"
          )}
        >
          {activeTab === tab.id && (
            <motion.div
              layoutId="activeTab"
              className="absolute inset-0 rounded-lg gradient-primary"
              transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
            />
          )}
          <span className="relative z-10">{tab.label}</span>
        </button>
      ))}
    </div>
  );
}