import { ExternalLink, Github } from 'lucide-react';
import snapcastImg from '../assets/snapcast.png';
import interviewerGptImg from '../assets/Interviewergpt.png';
import clipzyImg from '../assets/clipzy.png';
import madhusudhanImg from '../assets/madhusudan.png';
import vptImg from '../assets/vptlibrary.png';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Clipzy",
      description: 'Short video content Social media platform with Nextjs, Typescript,imagekit.io integration for video storage, nextauth for authentication and mongodb for database.',
      image: clipzyImg,
      technologies: ['Nextjs', 'Typescript', 'imagekit.io', 'nextauth','mongodb'],
      github: 'https://github.com/IamSinghYuvraj/social_media',
      demo: 'https://clipzy-nine.vercel.app/',
    },
    {
      id: 2,
      title: 'Interviewer-Gpt',
      description: 'An AI Interview generation platform, which takes your Interview which you have generated and gives you feedback based on it.',
      image: interviewerGptImg,
      technologies: ['Nextjs', 'Typescript', 'Vapi', 'Firebase'],
      github: 'https://github.com/IamSinghYuvraj/interviewer_gpt',
      demo: 'https://interviewer-gpt.vercel.app',
    },
    {
      id: 3,
      title: "Snapcast",
      description: 'Modern video Sharing and Recording platform with Nextjs, Typescript, and Bunny.net integration.',
      image: snapcastImg,
      technologies: ['Nextjs', 'Typescript', 'Bunny.net', 'Xata.io'],
      github: 'https://github.com/IamSinghYuvraj/loom_clone',
      demo: 'https://yuvrajsnapcast.vercel.app/',
    },
    {
      id: 4,
      title: 'Madhusudhan Aqua industries',
      description: 'A paid project for Madhusudhan Aqua industries, which is a company that deals in aqua products.',
      image: madhusudhanImg,
      technologies: ['Nextjs', 'Typescript', 'supabase'],
      github: 'https://github.com/IamSinghYuvraj/madhusudhan-website',
      demo: 'https://madhusudhanaquaindustries.vercel.app/',
    },
    {
      id: 5,
      title: 'VPT Library',
      description: 'A mini project made using html, css, javascript during my diploma while learning Javascript.',
      image: vptImg,
      technologies: ['html', 'css', 'javascript'],
      github: 'https://github.com/IamSinghYuvraj/VPT-Library',
      demo: 'https://vpt-library.vercel.app/',
    },
  
  
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4 animate-fade-in-up">
            Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                
                {/* Animated overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-900/80 backdrop-blur-sm rounded-full text-gray-300 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                    aria-label={`View ${project.title} on GitHub`}
                    tabIndex={0}
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-900/80 backdrop-blur-sm rounded-full text-gray-300 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                    aria-label={`View ${project.title} live demo`}
                    tabIndex={0}
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm group-hover:text-gray-300 transition-colors duration-300">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full text-xs border border-gray-700 group-hover:border-gray-600 group-hover:bg-gray-700/50 transition-all duration-300 hover:scale-105"
                      style={{ transitionDelay: `${techIndex * 0.1}s` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;