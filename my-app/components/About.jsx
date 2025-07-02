import React from 'react';
import { Code, Coffee, Lightbulb, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable code that stands the test of time"
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-blue-600" />,
      title: "Innovation",
      description: "Always exploring new technologies and creative solutions"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Collaboration",
      description: "Strong believer in teamwork and knowledge sharing"
    },
    {
      icon: <Coffee className="w-8 h-8 text-blue-600" />,
      title: "Dedication",
      description: "Committed to delivering excellence in every project"
    }
  ];