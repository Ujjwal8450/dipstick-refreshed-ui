import { Bell } from "lucide-react";
import { cn } from "@/lib/utils";

interface NotificationTickerProps {
  notifications: string[];
  className?: string;
}

export function NotificationTicker({ notifications, className }: NotificationTickerProps) {
  if (notifications.length === 0) return null;

  const allNotifications = [...notifications, ...notifications]; // Duplicate for seamless loop

  return (
    <div className={cn("relative overflow-hidden bg-navy-light border-y border-border py-3", className)}>
      <div className="container flex items-center">
        <div className="flex items-center gap-2 px-4 shrink-0 border-r border-border">
          <Bell className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">Updates</span>
        </div>
        
        <div className="flex-1 overflow-hidden">
          <div className="animate-ticker flex gap-8 whitespace-nowrap">
            {allNotifications.map((notification, index) => (
              <span key={index} className="text-sm text-muted-foreground">
                {notification}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}