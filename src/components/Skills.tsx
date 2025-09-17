import React from 'react';
import { Code, Database, Palette, Cpu } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend',
      color: 'from-blue-500 to-cyan-500',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
    },
    {
      icon: Database,
      title: 'Backend',
      color: 'from-purple-500 to-pink-500',
      skills: ['Node.js', 'firebase', 'PostgreSQL', 'MongoDB'],
    },
    {
      icon: Palette,
      title: 'Design',
      color: 'from-green-500 to-teal-500',
      skills: ['Figma', 'UI/UX', 'Responsive Design', 'Animation'],
    },
    {
      icon: Cpu,
      title: 'Tools',
      color: 'from-orange-500 to-red-500',
      skills: ['Vapi', 'Langflow', 'Git', 'n8n'],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900/30 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4 animate-fade-in-up">
            Skills
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 animate-fade-in-up focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              style={{ animationDelay: `${index * 0.2}s` }}
              tabIndex={0}
              aria-label={`${category.title} skills`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} group-hover:scale-110 transition-all duration-300 group-hover:shadow-lg`}>
                  <category.icon className="h-6 w-6 text-white group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">{category.title}</h3>
              </div>

              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="text-gray-300 text-sm group-hover:text-white transition-all duration-300 hover:translate-x-2 cursor-default"
                    style={{ transitionDelay: `${skillIndex * 0.1}s` }}
                  >
                    <span className="inline-block w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-2 group-hover:animate-pulse"></span>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;