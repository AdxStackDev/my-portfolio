import React from "react";
import { projects } from "@/lib/data";
import {
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Github, ExternalLink, Building2 } from "lucide-react";
import { GlassCard } from "./ui/glass-card";
import MotionWrapper from "./MotionWrapper";
import { motion } from "framer-motion";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-12 relative">
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <MotionWrapper>
          <h2 className="text-2xl font-bold mb-8 text-center md:text-left">
            🚀 Selected Projects
          </h2>
        </MotionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <MotionWrapper key={project.title} delay={index * 0.1}>
              <GlassCard className="group overflow-hidden dark:border-purple-500/10 h-full flex flex-col">

                {/* Header */}
                <CardHeader className="bg-gradient-to-r from-purple-500/5 to-pink-500/5 pb-3">
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-base text-center md:text-left group-hover:text-purple-500 transition-colors duration-300 leading-snug">
                      {project.title}
                    </CardTitle>
                    {/* Links */}
                    <div className="flex items-center gap-1.5 shrink-0 mt-0.5">
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="GitHub Repository"
                          className="p-1.5 rounded-md bg-muted/60 hover:bg-purple-500/20 text-muted-foreground hover:text-purple-500 transition-colors"
                          whileHover={{ scale: 1.15 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Github className="h-3.5 w-3.5" />
                        </motion.a>
                      )}
                      {project.live && (
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Live Demo"
                          className="p-1.5 rounded-md bg-muted/60 hover:bg-pink-500/20 text-muted-foreground hover:text-pink-500 transition-colors"
                          whileHover={{ scale: 1.15 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                        </motion.a>
                      )}
                    </div>
                  </div>

                  {/* Company badge */}
                  <div className="flex items-center gap-1.5 mt-1">
                    <Building2 className="h-3 w-3 text-muted-foreground/60" />
                    <span className="text-xs text-muted-foreground/70 font-medium">
                      {project.company}
                    </span>
                  </div>
                </CardHeader>

                {/* Description */}
                <CardContent className="flex-grow pt-3">
                  <ul className="list-none space-y-2 text-sm">
                    {project.description.map((desc, i) => (
                      <motion.li
                        key={i}
                        className="text-muted-foreground relative pl-4"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.08 }}
                        viewport={{ once: true }}
                      >
                        <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-purple-500/60 shrink-0" />
                        {desc}
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>

                {/* Footer — Tech + Duration */}
                <CardFooter className="flex flex-col items-start gap-1.5 border-t border-border/30 bg-gradient-to-r from-purple-500/5 to-pink-500/5 p-4">
                  <motion.div
                    className="text-xs text-muted-foreground"
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    viewport={{ once: true }}
                  >
                    <span className="font-semibold text-foreground">Tech: </span>
                    {project.tech}
                  </motion.div>
                  <motion.div
                    className="text-xs text-muted-foreground"
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.22 }}
                    viewport={{ once: true }}
                  >
                    <span className="font-semibold text-foreground">Duration: </span>
                    {project.duration}
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
