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
 return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A showcase of my recent work, demonstrating expertise across different technologies and domains
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-slate-700 flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {project.date}
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1"
                    >
                      <Tag className="w-3 h-3" />
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex-1 justify-center"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    className="flex items-center gap-2 border-2 border-slate-300 hover:border-slate-400 text-slate-700 hover:text-slate-900 px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex-1 justify-center"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-600 mb-6">Want to see more of my work?</p>
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            <Github className="w-5 h-5" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;