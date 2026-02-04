"use client";

import { useRef, useEffect, useState } from "react";
import { TiltCard } from "@/components/ui/tilt-card";

const technologies = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "C#", category: "Language" },
  { name: "Python", category: "Language" },
  { name: "Node.js", category: "Backend" },
  { name: "PHP", category: "Backend" },
  { name: "React Native", category: "Mobile App" },
  { name: "Flutter", category: "Mobile App" },
  { name: "Azure", category: "Cloud" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "TensorFlow", category: "AI/ML" },
];

export function TechStack() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Technology Stack
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Built with Industry-Leading Tools
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We leverage the most powerful and reliable technologies to build
            solutions that stand the test of time.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className={`transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 50}ms` : "0ms",
              }}
            >
              <div className="px-6 py-4 rounded-xl bg-card border border-border text-center h-full hover:scale-105 transition-all duration-300 hover:bg-gray-800 group">
                <span className="font-semibold text-lg block group-hover:text-blue-800 transition-colors duration-300">
                  {tech.name}
                </span>
                <span className="text-muted-foreground text-sm">
                  {tech.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
