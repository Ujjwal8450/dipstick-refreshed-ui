import { useState } from "react";
import { motion } from "framer-motion";
import { User, Mail, GraduationCap, Key, Bell, LogOut, Settings, Shield } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { ProfileActionCard } from "@/components/ui/ProfileActionCard";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const userInfo = {
  name: "Ujjwal Chaubey",
  username: "ujjwal36",
  email: "chaubeyujjwal36@gmail.com",
  role: "Student",
  batch: "Susandhi Batch - 14",
  joinDate: "Jan 2024",
  avatar: "",
};

export default function ProfilePage() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  return (
    <div className="min-h-screen">
      {/* Profile Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-primary opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
        
        <div className="container px-4 pt-8 pb-16 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center text-center"
          >
            {/* Avatar */}
            <div className="relative mb-4">
              <Avatar className="w-24 h-24 border-4 border-primary/30">
                <AvatarImage src={userInfo.avatar} />
                <AvatarFallback className="text-2xl font-bold gradient-primary text-white">
                  {userInfo.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-emerald-500 border-2 border-background flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-white" />
              </div>
            </div>

            <h1 className="text-2xl font-bold text-foreground mb-1">{userInfo.name}</h1>
            <p className="text-muted-foreground">@{userInfo.username}</p>
          </motion.div>
        </div>
      </div>

      <div className="container px-4 -mt-8 pb-8">
        {/* User Info Card */}
        <GlassCard className="p-6 mb-6" delay={0.1}>
          <h2 className="text-lg font-semibold text-foreground mb-4">Account Information</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="text-foreground font-medium">{userInfo.email}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Role</p>
                <p className="text-foreground font-medium">{userInfo.role}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                <User className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Batch</p>
                <p className="text-foreground font-medium">{userInfo.batch}</p>
              </div>
            </div>
          </div>
        </GlassCard>

        {/* Settings Section */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg font-semibold text-foreground mb-4"
        >
          Settings
        </motion.h2>

        <div className="space-y-3">
          <ProfileActionCard
            icon={Key}
            title="Reset Password"
            description="Change your account password"
            delay={0.3}
          />

          <ProfileActionCard
            icon={Bell}
            title="Notifications"
            description="Enable or disable push notifications"
            hasSwitch
            switchValue={notificationsEnabled}
            onSwitchChange={setNotificationsEnabled}
            delay={0.4}
          />

          <ProfileActionCard
            icon={Shield}
            title="Privacy Settings"
            description="Manage your data and privacy"
            delay={0.5}
          />

          <ProfileActionCard
            icon={Settings}
            title="App Settings"
            description="Configure app preferences"
            delay={0.6}
          />
        </div>

        {/* Logout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-6"
        >
          <ProfileActionCard
            icon={LogOut}
            title="Sign Out"
            description="Log out of your account"
            variant="destructive"
          />
        </motion.div>

        {/* Version info */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center text-sm text-muted-foreground mt-8"
        >
          Dipstick® App v4.0.0
        </motion.p>
      </div>
    </div>
  );
}