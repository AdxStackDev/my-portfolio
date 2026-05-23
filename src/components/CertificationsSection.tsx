import React from "react";
import { certifications } from "@/lib/data";
import { motion } from "framer-motion";
import MotionWrapper from "./MotionWrapper";
import { GlassCard } from "./ui/glass-card";
import { Award } from "lucide-react";

export default function CertificationsSection() {
  return (
    <section
      id="certifications"
      className="py-12 bg-gradient-to-b from-muted/10 to-background"
    >
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <MotionWrapper>
          <h2 className="text-2xl font-bold mb-8 text-center md:text-left">
            🏆 Certifications
          </h2>
        </MotionWrapper>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {certifications.map((cert, index) => (
            <MotionWrapper key={cert.name} delay={index * 0.1}>
              <GlassCard className="p-4 h-full">
                <motion.div
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  viewport={{ once: true }}
                >
                  {/* Icon bubble */}
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/20 text-xl">
                    {cert.icon}
                  </div>

                  {/* Content */}
                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold leading-snug mb-0.5">
                      {cert.name}
                    </h3>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs text-muted-foreground font-medium">
                        {cert.issuer}
                      </span>
                      <span className="text-muted-foreground/30 text-xs">•</span>
                      <span className="text-xs text-purple-500/80 font-medium">
                        {cert.date}
                      </span>
                    </div>
                  </div>

                  {/* Badge */}
                  <motion.div
                    className="ml-auto shrink-0"
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Award className="h-4 w-4 text-purple-500/50" />
                  </motion.div>
                </motion.div>
              </GlassCard>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
