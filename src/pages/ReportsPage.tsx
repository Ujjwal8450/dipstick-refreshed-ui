import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Filter, TrendingUp, BarChart3 } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { ReportTypeTabs } from "@/components/ui/ReportTypeTabs";
import { ReportScoreCard } from "@/components/ui/ReportScoreCard";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const reportTabs = [
  { id: "sr1", label: "SR1 Reports" },
  { id: "sr2", label: "SR2 Reports" },
];

const testScores = [
  { testId: "T1", score: 40.0 },
  { testId: "T4", score: 80.0 },
  { testId: "T6", score: 63.2 },
  { testId: "T7", score: 4.0 },
  { testId: "T10", score: 80.0 },
  { testId: "T11", score: 10.0 },
  { testId: "T13", score: 90.0 },
  { testId: "T14", score: 68.4 },
  { testId: "T16", score: 70.0 },
  { testId: "T17", score: 67.5 },
  { testId: "T18", score: 77.5 },
  { testId: "T19", score: 0.0 },
  { testId: "T20", score: 57.5 },
  { testId: "T22", score: 0.0 },
  { testId: "T24", score: 50.0 },
];

const stats = [
  { label: "Average", value: "54.3%", icon: BarChart3, color: "text-primary" },
  { label: "Highest", value: "90.0%", icon: TrendingUp, color: "text-emerald-400" },
  { label: "Tests Taken", value: "15", icon: Calendar, color: "text-secondary" },
];

export default function ReportsPage() {
  const [activeTab, setActiveTab] = useState("sr1");
  const [selectedBatch, setSelectedBatch] = useState("batch-14");
  const [selectedAttempt, setSelectedAttempt] = useState("attempt-1");

  return (
    <div className="min-h-screen">
      <div className="container px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-2xl font-bold text-foreground mb-2">Test Wise Reports</h1>
          <p className="text-muted-foreground">View your performance across all assessments</p>
        </motion.div>

        {/* Report Type Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6"
        >
          <ReportTypeTabs
            activeTab={activeTab}
            onTabChange={setActiveTab}
            tabs={reportTabs}
          />

          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Filters</span>
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-3 mb-6"
        >
          <Select value={selectedBatch} onValueChange={setSelectedBatch}>
            <SelectTrigger className="w-[200px] bg-navy-light border-border">
              <SelectValue placeholder="Select Batch" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="batch-14">Susandhi Batch - 14</SelectItem>
              <SelectItem value="batch-15">Susandhi Batch - 15</SelectItem>
            </SelectContent>
          </Select>

          <Select value={selectedAttempt} onValueChange={setSelectedAttempt}>
            <SelectTrigger className="w-[150px] bg-navy-light border-border">
              <SelectValue placeholder="Select Attempt" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="attempt-1">Attempt 1</SelectItem>
              <SelectItem value="attempt-2">Attempt 2</SelectItem>
              <SelectItem value="best">Best Attempt</SelectItem>
            </SelectContent>
          </Select>
        </motion.div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="flex items-center gap-3 p-4 rounded-xl border border-border bg-navy-light"
            >
              <stat.icon className={`w-5 h-5 ${stat.color}`} />
              <div>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
                <p className="text-lg font-bold text-foreground">{stat.value}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Score Grid */}
        <GlassCard className="p-6" delay={0.3} hover={false}>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-foreground">Test Scores</h2>
            <span className="text-sm text-primary font-medium">Feb 2025</span>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
            {testScores.map((item, index) => (
              <ReportScoreCard
                key={item.testId}
                testId={item.testId}
                score={item.score}
                delay={0.4 + index * 0.03}
              />
            ))}
          </div>
        </GlassCard>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-6 mt-6"
        >
          {[
            { label: "Excellent (80%+)", color: "bg-emerald-500" },
            { label: "Good (60-79%)", color: "bg-cyan-500" },
            { label: "Average (40-59%)", color: "bg-amber-500" },
            { label: "Needs Improvement (<40%)", color: "bg-red-500" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${item.color}`} />
              <span className="text-xs text-muted-foreground">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}