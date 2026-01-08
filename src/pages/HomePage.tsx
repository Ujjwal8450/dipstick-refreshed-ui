import { motion } from "framer-motion";
import { CheckCircle2, Clock, CalendarDays, BarChart3, BookOpen, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { StatusCard } from "@/components/ui/StatusCard";
import { ScheduledTestCard } from "@/components/ui/ScheduledTestCard";
import { NotificationTicker } from "@/components/ui/NotificationTicker";
import { GlassCard } from "@/components/ui/GlassCard";
import { Progress } from "@/components/ui/progress";

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

const enrolledCourses = [
  {
    id: "aptitude",
    title: "Aptitude Training",
    progress: 65,
    totalVideos: 24,
    completedVideos: 16,
    icon: "📊",
  },
  {
    id: "reasoning",
    title: "Logical Reasoning",
    progress: 40,
    totalVideos: 18,
    completedVideos: 7,
    icon: "🧠",
  },
  {
    id: "english",
    title: "English Communication",
    progress: 80,
    totalVideos: 20,
    completedVideos: 16,
    icon: "📝",
  },
  {
    id: "technical",
    title: "Technical Skills",
    progress: 25,
    totalVideos: 30,
    completedVideos: 8,
    icon: "💻",
  },
];

const tickerNotifications = [
  "New test scheduled for Mathematics on Jan 15",
  "Your Physics report is now available",
  "Complete your pending Chemistry assessment",
  "New content added: Final Evaluation Videos",
];

export default function HomePage() {
  const navigate = useNavigate();

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

          {/* Enrolled Courses */}
          <GlassCard className="p-6" delay={0.3}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary" />
                Enrolled Courses
              </h2>
              <span 
                onClick={() => navigate("/content")}
                className="text-sm text-primary font-medium cursor-pointer hover:underline"
              >
                View All
              </span>
            </div>
            <div className="space-y-4">
              {enrolledCourses.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  onClick={() => navigate(`/content/${course.id}`)}
                  className="p-4 rounded-xl bg-muted hover:bg-muted/80 cursor-pointer transition-all duration-200 border border-border/50"
                >
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">{course.icon}</div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-foreground text-sm mb-1 truncate">
                        {course.title}
                      </h3>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                        <Play className="w-3 h-3" />
                        <span>{course.completedVideos}/{course.totalVideos} videos</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Progress value={course.progress} className="h-1.5 flex-1" />
                        <span className="text-xs font-medium text-primary">{course.progress}%</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}