import { motion } from "framer-motion";
import { CheckCircle2, Clock, CalendarDays, BarChart3 } from "lucide-react";
import { StatusCard } from "@/components/ui/StatusCard";
import { ScheduledTestCard } from "@/components/ui/ScheduledTestCard";
import { NotificationTicker } from "@/components/ui/NotificationTicker";
import { GlassCard } from "@/components/ui/GlassCard";

const statusData = [
  { title: "Completed", value: 12, icon: CheckCircle2, variant: "success" as const },
  { title: "In Progress", value: 3, icon: Clock, variant: "warning" as const },
  { title: "Upcoming", value: 5, icon: CalendarDays, variant: "info" as const },
  { title: "Total Tests", value: 20, icon: BarChart3, variant: "accent" as const },
];

const scheduledTests = [
  {
    title: "Mathematics Assessment",
    batch: "Susandhi Batch - 14",
    date: "Jan 15, 2026",
    time: "10:00 AM",
    status: "upcoming" as const,
  },
  {
    title: "Physics Final",
    batch: "Susandhi Batch - 14",
    date: "Jan 12, 2026",
    time: "2:00 PM",
    status: "in-progress" as const,
  },
  {
    title: "Chemistry Quiz",
    batch: "Susandhi Batch - 14",
    date: "Jan 10, 2026",
    time: "11:00 AM",
    status: "completed" as const,
  },
  {
    title: "Biology Test",
    batch: "Susandhi Batch - 14",
    date: "Jan 18, 2026",
    time: "9:00 AM",
    status: "upcoming" as const,
  },
];

const tickerNotifications = [
  "New test scheduled for Mathematics on Jan 15",
  "Your Physics report is now available",
  "Complete your pending Chemistry assessment",
  "New content added: Final Evaluation Videos",
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Notification Ticker */}
      <NotificationTicker notifications={tickerNotifications} />

      <div className="container px-4 py-8">
        {/* Welcome section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Welcome back, <span className="gradient-text">Ujjwal</span>
          </h1>
          <p className="text-muted-foreground">
            Track your progress and stay on top of your assessments
          </p>
        </motion.div>

        {/* Status Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {statusData.map((item, index) => (
            <StatusCard
              key={item.title}
              title={item.title}
              value={item.value}
              icon={item.icon}
              variant={item.variant}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Scheduled Tests */}
          <GlassCard className="lg:col-span-2 p-6" delay={0.2}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-foreground">Scheduled Tests</h2>
              <span className="text-sm text-primary font-medium cursor-pointer hover:underline">
                View All
              </span>
            </div>
            <div className="space-y-3">
              {scheduledTests.map((test, index) => (
                <ScheduledTestCard
                  key={test.title}
                  {...test}
                  delay={0.3 + index * 0.1}
                />
              ))}
            </div>
          </GlassCard>

          {/* Quick Stats */}
          <GlassCard className="p-6" delay={0.3}>
            <h2 className="text-lg font-semibold text-foreground mb-6">Performance Overview</h2>
            <div className="space-y-6">
              {/* Average Score */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Average Score</span>
                  <span className="text-2xl font-bold text-foreground">78.5%</span>
                </div>
                <div className="h-2 rounded-full bg-navy overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "78.5%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full gradient-primary rounded-full"
                  />
                </div>
              </div>

              {/* Completion Rate */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Completion Rate</span>
                  <span className="text-2xl font-bold text-foreground">60%</span>
                </div>
                <div className="h-2 rounded-full bg-navy overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "60%" }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="h-full bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full"
                  />
                </div>
              </div>

              {/* Content Progress */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Content Progress</span>
                  <span className="text-2xl font-bold text-foreground">45%</span>
                </div>
                <div className="h-2 rounded-full bg-navy overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "45%" }}
                    transition={{ duration: 1, delay: 0.7 }}
                    className="h-full bg-gradient-to-r from-amber-500 to-amber-600 rounded-full"
                  />
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="mt-8 pt-6 border-t border-border">
              <h3 className="text-sm font-medium text-muted-foreground mb-4">Recent Activity</h3>
              <div className="space-y-3">
                {[
                  { text: "Completed T15 Assessment", time: "2h ago" },
                  { text: "Watched Video: Intro to Physics", time: "5h ago" },
                  { text: "Scored 85% in T14", time: "1d ago" },
                ].map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="flex items-center justify-between text-sm"
                  >
                    <span className="text-foreground">{activity.text}</span>
                    <span className="text-muted-foreground">{activity.time}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}