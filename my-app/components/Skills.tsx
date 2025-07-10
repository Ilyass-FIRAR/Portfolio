import React from 'react';
import { 
  Code2, 
  Database, 
  Globe, 
  Smartphone, 
  Cloud, 
  GitBranch,
  Palette,
  Settings
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code2 className="w-6 h-6" />,
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 92 },
        { name: "Vue.js", level: 85 }
      ]
    },
    {
      title: "Backend Development",
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Python", level: 82 },
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 80 }
      ]
    },
    {
      title: "DevOps & Cloud",
      icon: <Cloud className="w-6 h-6" />,
      skills: [
        { name: "AWS", level: 78 },
        { name: "Docker", level: 85 },
        { name: "CI/CD", level: 82 },
        { name: "Kubernetes", level: 70 }
      ]
    },
    {
      title: "Design & UX",
      icon: <Palette className="w-6 h-6" />,
      skills: [
        { name: "Figma", level: 88 },
        { name: "UI/UX Design", level: 85 },
        { name: "Prototyping", level: 82 },
        { name: "Design Systems", level: 90 }
      ]
    }
  ];

  const tools = [
    { name: "Git", icon: <GitBranch className="w-8 h-8" /> },
    { name: "VS Code", icon: <Code2 className="w-8 h-8" /> },
    { name: "Figma", icon: <Palette className="w-8 h-8" /> },
    { name: "Postman", icon: <Settings className="w-8 h-8" /> },
    { name: "Chrome DevTools", icon: <Globe className="w-8 h-8" /> },
    { name: "Responsive Design", icon: <Smartphone className="w-8 h-8" /> }
  ];
