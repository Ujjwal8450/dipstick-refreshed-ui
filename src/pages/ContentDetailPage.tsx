import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Video } from "lucide-react";
import { VideoListItem } from "@/components/ui/VideoListItem";
import { Button } from "@/components/ui/button";

const videoData: Record<string, { title: string; videos: { name: string; progress: number; duration: string }[] }> = {
  baseline: {
    title: "Baseline Evaluation Videos",
    videos: [
      { name: "Ankush Kumar", progress: 100, duration: "12:30" },
      { name: "Chetan Kumar", progress: 0, duration: "15:45" },
      { name: "Gurusiddappa Patil", progress: 9, duration: "10:20" },
      { name: "Kota Lavanya", progress: 45, duration: "18:00" },
      { name: "Pundaleek Lamani", progress: 0, duration: "14:15" },
      { name: "Reshma Makandar", progress: 0, duration: "11:50" },
      { name: "Saikumar Nayak", progress: 0, duration: "16:30" },
      { name: "Suhani", progress: 0, duration: "13:45" },
      { name: "Tushar Barik", progress: 67, duration: "19:20" },
      { name: "Ujjwal Chaubey", progress: 100, duration: "12:00" },
      { name: "Lucky Prasad", progress: 23, duration: "14:50" },
    ],
  },
  final: {
    title: "Final Evaluation Videos",
    videos: [
      { name: "Final Assessment Overview", progress: 100, duration: "20:00" },
      { name: "Comprehensive Review Part 1", progress: 75, duration: "25:30" },
      { name: "Comprehensive Review Part 2", progress: 50, duration: "22:15" },
      { name: "Practice Test Walkthrough", progress: 0, duration: "18:45" },
    ],
  },
  study: {
    title: "Study Materials",
    videos: [
      { name: "Chapter 1: Introduction", progress: 100, duration: "30:00" },
      { name: "Chapter 2: Core Concepts", progress: 80, duration: "45:00" },
      { name: "Chapter 3: Advanced Topics", progress: 0, duration: "50:00" },
    ],
  },
  additional: {
    title: "Additional Resources",
    videos: [
      { name: "Bonus Content: Tips & Tricks", progress: 100, duration: "15:00" },
      { name: "FAQ Session Recording", progress: 60, duration: "40:00" },
    ],
  },
};

export default function ContentDetailPage() {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  
  const category = videoData[categoryId || "baseline"] || videoData.baseline;
  const completedCount = category.videos.filter(v => v.progress === 100).length;

  return (
    <div className="min-h-screen">
      <div className="container px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate("/content")}
            className="mb-4 -ml-2 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Content
          </Button>

          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground mb-2">{category.title}</h1>
              <p className="text-muted-foreground">
                Susandhi Batch - 14 • Feb 2025
              </p>
            </div>

            <div className="text-right">
              <p className="text-sm text-muted-foreground">Progress</p>
              <p className="text-lg font-bold text-foreground">
                {completedCount}/{category.videos.length} completed
              </p>
            </div>
          </div>
        </motion.div>

        {/* Progress bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <div className="h-2 rounded-full bg-navy-light overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${(completedCount / category.videos.length) * 100}%` }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-full gradient-primary rounded-full"
            />
          </div>
        </motion.div>

        {/* Video List */}
        <div className="space-y-3">
          {category.videos.map((video, index) => (
            <VideoListItem
              key={video.name}
              title={video.name}
              duration={video.duration}
              progress={video.progress}
              isCompleted={video.progress === 100}
              delay={0.2 + index * 0.05}
            />
          ))}
        </div>

        {/* Empty state for no videos */}
        {category.videos.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center py-20"
          >
            <div className="w-20 h-20 rounded-full bg-navy-light flex items-center justify-center mb-4">
              <Video className="w-10 h-10 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-medium text-foreground mb-2">No content available</h3>
            <p className="text-muted-foreground text-center">
              Check back later for new content.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}