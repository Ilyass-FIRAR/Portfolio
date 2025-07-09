import React from 'react';
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, inventory management, and admin dashboard.",
      image: "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=600",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      github: "#",
      demo: "#",
      date: "2024"
    },
    {
      title: "Task Management App",
      description: "A collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features. Built with modern React patterns and WebSocket integration.",
      image: "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=600",
      tech: ["React", "TypeScript", "Socket.io", "MongoDB", "Express"],
      github: "#",
      demo: "#",
      date: "2024"
    },
    {
      title: "Weather Analytics Dashboard",
      description: "A comprehensive weather analytics platform with interactive charts, forecasting, and location-based insights. Integrates with multiple weather APIs for accurate data visualization.",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600",
      tech: ["Vue.js", "D3.js", "Python", "FastAPI", "Redis"],
      github: "#",
      demo: "#",
      date: "2023"
    },
    {
      title: "Social Media Analytics",
      description: "A powerful analytics tool for social media managers to track engagement, analyze trends, and generate insights. Features automated reporting and competitive analysis.",
      image: "https://images.pexels.com/photos/3182795/pexels-photo-3182795.jpeg?auto=compress&cs=tinysrgb&w=600",
      tech: ["Next.js", "Chart.js", "Firebase", "Tailwind", "Vercel"],
      github: "#",
      demo: "#",
      date: "2023"
    },
    {
      title: "AI-Powered Chat Bot",
      description: "An intelligent chatbot system with natural language processing capabilities. Includes conversation memory, context awareness, and integration with popular messaging platforms.",
      image: "https://images.pexels.com/photos/3182796/pexels-photo-3182796.jpeg?auto=compress&cs=tinysrgb&w=600",
      tech: ["Python", "TensorFlow", "React", "WebRTC", "Docker"],
      github: "#",
      demo: "#",
      date: "2023"
    },
    {
      title: "Portfolio Website Builder",
      description: "A drag-and-drop website builder specifically designed for developers and designers to showcase their work. Features custom themes, responsive templates, and SEO optimization.",
      image: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=600",
      tech: ["React", "Node.js", "GraphQL", "Prisma", "Cloudinary"],
      github: "#",
      demo: "#",
      date: "2022"
    }
  ];
