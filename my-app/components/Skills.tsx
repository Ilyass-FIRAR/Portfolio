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
  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A comprehensive toolkit built through years of hands-on experience and continuous learning
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-lg text-blue-600 mr-4">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-slate-700">{skill.name}</span>
                      <span className="text-slate-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Tools & Technologies</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 rounded-lg hover:bg-slate-50 transition-colors duration-200 group"
              >
                <div className="text-slate-600 group-hover:text-blue-600 transition-colors duration-200 mb-2">
                  {tool.icon}
                </div>
                <span className="text-sm font-medium text-slate-700 text-center">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;