import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Video, FileText, BookOpen, GraduationCap } from "lucide-react";
import { ContentCategoryCard } from "@/components/ui/ContentCategoryCard";
import { GlassCard } from "@/components/ui/GlassCard";

const contentCategories = [
  {
    id: "baseline",
    title: "Baseline Evaluation Videos",
    description: "Pre-assessment learning materials and introduction videos",
    icon: Video,
    itemCount: 12,
  },
  {
    id: "final",
    title: "Final Evaluation Videos",
    description: "Complete your course with final assessment materials",
    icon: GraduationCap,
    itemCount: 8,
  },
  {
    id: "study",
    title: "Study Materials",
    description: "Documents, notes, and reference materials for your course",
    icon: FileText,
    itemCount: 24,
  },
  {
    id: "additional",
    title: "Additional Resources",
    description: "Supplementary content to enhance your learning",
    icon: BookOpen,
    itemCount: 15,
  },
];

const recentlyAccessed = [
  { title: "Introduction to Physics", progress: 100 },
  { title: "Chemistry Basics", progress: 75 },
  { title: "Mathematics Fundamentals", progress: 30 },
];

export default function ContentPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <div className="container px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-2xl font-bold text-foreground mb-2">Content</h1>
          <p className="text-muted-foreground">
            Susandhi Batch - 14 • Feb 2025
          </p>
        </motion.div>

        {/* Content Categories */}
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {contentCategories.map((category, index) => (
            <ContentCategoryCard
              key={category.id}
              title={category.title}
              description={category.description}
              icon={category.icon}
              itemCount={category.itemCount}
              onClick={() => navigate(`/content/${category.id}`)}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Recently Accessed */}
        <GlassCard className="p-6" delay={0.4}>
          <h2 className="text-lg font-semibold text-foreground mb-4">Recently Accessed</h2>
          <div className="space-y-4">
            {recentlyAccessed.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center shrink-0">
                  <Video className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-foreground truncate">{item.title}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex-1 h-1.5 rounded-full bg-navy overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${item.progress}%` }}
                        transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                        className="h-full gradient-primary rounded-full"
                      />
                    </div>
                    <span className="text-xs text-muted-foreground shrink-0">
                      {item.progress}%
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </GlassCard>
      </div>
    </div>
  );
}