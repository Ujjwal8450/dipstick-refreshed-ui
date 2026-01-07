import { motion } from "framer-motion";
import { Bell, Check } from "lucide-react";
import { NotificationCard } from "@/components/ui/NotificationCard";
import { Button } from "@/components/ui/button";

const notifications = [
  {
    id: 1,
    title: "New Test Available",
    message: "Mathematics Assessment for Susandhi Batch - 14 is now available. Complete it before the deadline.",
    timestamp: "2 hours ago",
    type: "info" as const,
    isRead: false,
  },
  {
    id: 2,
    title: "Report Generated",
    message: "Your Physics Final report has been generated. View your detailed performance analysis.",
    timestamp: "5 hours ago",
    type: "success" as const,
    isRead: false,
  },
  {
    id: 3,
    title: "Deadline Reminder",
    message: "Chemistry Quiz deadline is approaching. You have 24 hours remaining to complete the test.",
    timestamp: "1 day ago",
    type: "warning" as const,
    isRead: true,
  },
  {
    id: 4,
    title: "New Content Added",
    message: "New video content 'Introduction to Organic Chemistry' has been added to your course.",
    timestamp: "2 days ago",
    type: "default" as const,
    isRead: true,
  },
  {
    id: 5,
    title: "Achievement Unlocked",
    message: "Congratulations! You've completed 10 tests with an average score above 75%.",
    timestamp: "3 days ago",
    type: "success" as const,
    isRead: true,
  },
];

export default function NotificationsPage() {
  const unreadCount = notifications.filter(n => !n.isRead).length;

  return (
    <div className="min-h-screen">
      <div className="container px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-8"
        >
          <div>
            <h1 className="text-2xl font-bold text-foreground mb-1">Notifications</h1>
            <p className="text-muted-foreground">
              {unreadCount > 0 ? `You have ${unreadCount} unread notifications` : "All caught up!"}
            </p>
          </div>
          
          {unreadCount > 0 && (
            <Button variant="outline" size="sm" className="gap-2">
              <Check className="w-4 h-4" />
              Mark all read
            </Button>
          )}
        </motion.div>

        {/* Notifications List */}
        {notifications.length > 0 ? (
          <div className="space-y-3">
            {notifications.map((notification, index) => (
              <NotificationCard
                key={notification.id}
                title={notification.title}
                message={notification.message}
                timestamp={notification.timestamp}
                type={notification.type}
                isRead={notification.isRead}
                delay={index * 0.1}
              />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center py-20"
          >
            <div className="w-20 h-20 rounded-full bg-navy-light flex items-center justify-center mb-4">
              <Bell className="w-10 h-10 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-medium text-foreground mb-2">No notifications</h3>
            <p className="text-muted-foreground text-center">
              You're all caught up! Check back later for updates.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}