import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, FileQuestion, Users, Settings, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const helpContent: Record<string, { 
  title: string; 
  icon: typeof BookOpen;
  sections: { title: string; content: string[] }[] 
}> = {
  "getting-started": {
    title: "Getting Started",
    icon: BookOpen,
    sections: [
      {
        title: "Welcome to Dipstick",
        content: [
          "Research indicates that regular and frequent formative assessments accelerate learning.",
          "This is because information retrieved from memory leads to better long term retention.",
          "Another benefit is that testing results in better organization of knowledge.",
          "Dipstick™ is a knowledge Analysis and Visualization platform for transformational learning outcomes, using tests as a learning process.",
        ],
      },
      {
        title: "Navigating the App",
        content: [
          "Use the bottom navigation bar (on mobile) or top navigation (on desktop) to switch between sections.",
          "Home: View your dashboard with status cards, scheduled tests, and notifications.",
          "Reports: Access your test-wise performance reports with SR1 and SR2 views.",
          "Content: Browse and watch educational videos and materials.",
          "Help: Find answers to common questions and get support.",
        ],
      },
      {
        title: "Your Profile",
        content: [
          "Access your profile by clicking the user icon in the header.",
          "View and update your account information.",
          "Manage notification preferences and privacy settings.",
          "Reset your password if needed.",
        ],
      },
    ],
  },
  "reports": {
    title: "Understanding Reports",
    icon: FileQuestion,
    sections: [
      {
        title: "Report 1: Topic/Test Performance",
        content: [
          "His/her performance by Topic or Tests.",
          "Use the filter to see performance in multiple attempts and your best attempt score.",
          "Available in V 1.0",
        ],
      },
      {
        title: "Report 2 & 3: Concept Analysis",
        content: [
          "Concept / sub-concept wise reports as designed by your faculty/instructor.",
          "This clearly indicates areas of your strength and where you need to focus.",
          "Available in V 1.0",
        ],
      },
      {
        title: "SR1 vs SR2 Reports",
        content: [
          "SR1 Reports focus on overall topic-wise analysis.",
          "SR2 Reports provide deeper concept and sub-concept level insights.",
          "Switch between them using the tabs at the top of the Reports page.",
        ],
      },
    ],
  },
  "for-students": {
    title: "For Students",
    icon: Users,
    sections: [
      {
        title: "Available Reports",
        content: [
          "Report 1: His/her performance by Topic or Tests. Use the filter to see performance in multiple attempts and your best attempt score. [Available in V 1.0]",
          "Report 2, Report 3: Concept / sub-concept wise reports as designed by your faculty/instructor. This clearly indicates areas of your strength and where you need to focus. [Available in V 1.0]",
        ],
      },
      {
        title: "Tips for Success",
        content: [
          "Review your reports regularly to identify weak areas.",
          "Complete all assigned content and videos.",
          "Take practice tests to improve your scores.",
          "Don't hesitate to reach out to your faculty for clarification.",
        ],
      },
    ],
  },
  "for-faculty": {
    title: "For Faculty",
    icon: Settings,
    sections: [
      {
        title: "Faculty Reports",
        content: [
          "Report 1: Summary report by Topic for your entire class/batch. [Available in V 1.0]",
          "Report 2: Report by Topic and by division. [Available in V 1.0]",
          "Report 3: Summary report by concept for your entire class/batch.",
          "Report 4: Report by concept and by divisions/groups.",
          "Report 5: Summary report by sub-concept for your entire class/batch.",
          "Report 6: Report by sub-concept and by divisions/groups.",
          "Report 7: Summary report by question for your entire class/batch.",
          "Report 8: Report by question and by division/groups.",
        ],
      },
      {
        title: "Using Analytics",
        content: [
          "Get immediate feedback on the quality of questions.",
          "Understand the ease/difficulty level of the tests.",
          "Check if results match your expectations.",
          "Make decisions about lesson plans and durations for different concepts.",
        ],
      },
      {
        title: "For Administrators",
        content: [
          "View the comprehensive view of all the courses happening.",
          "Track progress/change by each semester/year.",
          "Work with faculty to enable and support corrective actions.",
          "Use objective analysis for decision making.",
        ],
      },
    ],
  },
};

export default function HelpDetailPage() {
  const { categoryId } = useParams();
  const navigate = useNavigate();

  const category = helpContent[categoryId || "getting-started"] || helpContent["getting-started"];
  const Icon = category.icon;

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
            onClick={() => navigate("/help")}
            className="mb-4 -ml-2 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Help
          </Button>

          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center">
              <Icon className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">{category.title}</h1>
              <p className="text-muted-foreground">{category.sections.length} sections</p>
            </div>
          </div>
        </motion.div>

        {/* Content Sections */}
        <Accordion type="multiple" defaultValue={["section-0"]} className="space-y-3">
          {category.sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.1 }}
            >
              <AccordionItem
                value={`section-${index}`}
                className="border border-border rounded-xl bg-navy-light overflow-hidden data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="px-5 py-4 text-left text-foreground hover:text-primary hover:no-underline font-semibold">
                  {section.title}
                </AccordionTrigger>
                <AccordionContent className="px-5 pb-5">
                  <ul className="space-y-3">
                    {section.content.map((item, itemIndex) => (
                      <li 
                        key={itemIndex}
                        className="flex items-start gap-3 text-muted-foreground"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>

        {/* Whitepaper Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 p-6 rounded-xl border border-border bg-navy-light"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-foreground mb-1">Want to learn more?</h3>
              <p className="text-sm text-muted-foreground">
                Download our whitepaper for detailed insights
              </p>
            </div>
            <Button className="gradient-primary text-white gap-2">
              <ExternalLink className="w-4 h-4" />
              Whitepaper
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}