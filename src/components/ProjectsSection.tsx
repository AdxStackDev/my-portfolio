import React from "react";
import { projects } from "@/lib/data";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Github } from "lucide-react";
import { GlassCard } from "./ui/glass-card";
import MotionWrapper from "./MotionWrapper";
import { motion } from "framer-motion";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-12 relative">
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <MotionWrapper>
          <h2 className="text-2xl font-bold mb-8 text-center md:text-left">
            🚀 Projects
          </h2>
        </MotionWrapper>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  {projects.map((project, index) => (
    <MotionWrapper key={project.title} delay={index * 0.2}>
      <GlassCard className="group overflow-hidden dark:border-purple-500/10 h-full flex flex-col">
        <CardHeader className="bg-gradient-to-r from-purple-500/5 to-pink-500/5">
          <CardTitle className="text-center md:text-left group-hover:text-purple-500 transition-colors duration-300">
            {project.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <ul className="list-disc ml-4 space-y-1 text-sm group-hover:space-y-2 transition-all duration-300">
            {project.description.map((desc, i) => (
              <motion.li
                key={i}
                className="text-muted-foreground"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                {desc}
              </motion.li>
            ))}
          </ul>
        </CardContent>

        <CardFooter className="flex flex-col items-start gap-1 border-t border-border/30 bg-gradient-to-r from-purple-500/5 to-pink-500/5 p-4">
          <motion.div
            className="text-xs text-muted-foreground"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="font-semibold text-foreground">Tech:</span> {project.tech}
          </motion.div>
          <motion.div
            className="text-xs text-muted-foreground"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <span className="font-semibold text-foreground">Duration:</span> {project.duration}
          </motion.div>
        </CardFooter>
      </GlassCard>
    </MotionWrapper>
  ))}
</div>

      </div>
    </section>
  );
}
