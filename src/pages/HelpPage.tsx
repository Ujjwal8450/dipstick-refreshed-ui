import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { HelpCircle, BookOpen, FileQuestion, Users, Settings, ChevronRight } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const helpCategories = [
  {
    id: "getting-started",
    icon: BookOpen,
    title: "Getting Started",
    description: "Learn the basics of using Dipstick",
  },
  {
    id: "reports",
    icon: FileQuestion,
    title: "Understanding Reports",
    description: "How to read and interpret your reports",
  },
  {
    id: "for-students",
    icon: Users,
    title: "For Students",
    description: "Student-specific guides and FAQs",
  },
  {
    id: "for-faculty",
    icon: Settings,
    title: "For Faculty",
    description: "Faculty resources and administration",
  },
];

const quickFaqs = [
  {
    question: "What is Dipstick?",
    answer: "Dipstick® is a knowledge Analysis and Visualization platform for transformational learning outcomes, using tests as a learning process. We believe Dipstick® provides you with actionable analytics.",
  },
  {
    question: "How do I view my reports?",
    answer: "Navigate to the Reports section from the main menu. You can switch between SR1 and SR2 reports using the tabs at the top. Use filters to select your batch and attempt.",
  },
  {
    question: "What do the different report types mean?",
    answer: "SR1 reports focus on topic-wise analysis, while SR2 reports provide concept and sub-concept level insights. Both help you understand your strengths and areas needing improvement.",
  },
  {
    question: "How can I track my progress?",
    answer: "Your progress is tracked automatically. Visit the Home page to see your completion status, average scores, and upcoming tests. The Content section shows your video watching progress.",
  },
];

export default function HelpPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <div className="container px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-4">
            <HelpCircle className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-foreground mb-2">Help Center</h1>
          <p className="text-muted-foreground max-w-md mx-auto">
            Find answers to your questions and learn how to get the most out of Dipstick
          </p>
        </motion.div>

        {/* Help Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid sm:grid-cols-2 gap-4 mb-8"
        >
          {helpCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => navigate(`/help/${category.id}`)}
              className="group flex items-center gap-4 p-5 rounded-xl border border-border bg-navy-light cursor-pointer transition-all duration-300 hover:border-primary/50 hover:shadow-glow"
            >
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shrink-0">
                <category.icon className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-foreground mb-1">{category.title}</h3>
                <p className="text-sm text-muted-foreground">{category.description}</p>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </motion.div>
          ))}
        </motion.div>

        {/* Quick FAQs */}
        <GlassCard className="p-6" delay={0.4} hover={false}>
          <h2 className="text-lg font-semibold text-foreground mb-4">Frequently Asked Questions</h2>
          
          <Accordion type="single" collapsible className="space-y-2">
            {quickFaqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="border border-border rounded-xl bg-card px-4 data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </GlassCard>

        {/* Contact Support */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 text-center"
        >
          <p className="text-muted-foreground mb-4">Still need help?</p>
          <button className="px-6 py-3 rounded-xl gradient-primary text-white font-medium transition-all duration-300 hover:shadow-glow">
            Contact Support
          </button>
        </motion.div>
      </div>
    </div>
  );
}