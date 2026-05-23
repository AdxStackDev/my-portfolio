import React from "react";
import { skills } from "@/lib/data";
import { motion } from "framer-motion";
import MotionWrapper from "./MotionWrapper";
import { GlassCard } from "./ui/glass-card";

function SkillTag({ skill, index }: { skill: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.04 * index,
      }}
      whileHover={{ scale: 1.07, y: -2 }}
      viewport={{ once: true }}
      className="px-3 py-1.5 bg-muted/80 backdrop-blur-sm rounded-md text-xs font-medium border border-purple-500/10 shadow-sm cursor-default"
    >
      {skill}
    </motion.div>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const categoryVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const SKILL_CATEGORIES = [
  { label: "⚙️ Backend", key: "backend" },
  { label: "🎨 Frontend", key: "frontend" },
  { label: "🗄️ Databases", key: "databases" },
  { label: "☁️ Cloud & DevOps", key: "cloudAndDevOps" },
  { label: "🤖 AI / ML", key: "aiAndMl" },
  { label: "🔐 API & Auth", key: "apiAndAuth" },
  { label: "🔌 Integrations", key: "integrations" },
  { label: "🛠️ Tools", key: "tools" },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-12 bg-gradient-to-b from-background to-muted/20">
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <MotionWrapper>
          <h2 className="text-2xl font-bold mb-8 text-center md:text-left">
            🛠️ Technical Skills
          </h2>
        </MotionWrapper>

        <motion.div
          className="space-y-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {SKILL_CATEGORIES.map(({ label, key }) => (
            <motion.div key={key} variants={categoryVariants}>
              <GlassCard className="p-4">
                <h3 className="text-sm font-semibold mb-3 text-center md:text-left text-muted-foreground uppercase tracking-wider">
                  {label}
                </h3>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {skills[key as keyof typeof skills].map(
                    (skill: string, index: number) => (
                      <SkillTag key={skill} skill={skill} index={index} />
                    )
                  )}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
