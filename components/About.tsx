import { Download, MapPin } from 'lucide-react';
import profileimg from "../assets/ProfileImage.jpg"
import resume from "../assets/resume.pdf"


const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4 animate-fade-in-up">
            About Me
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Profile */}
          <div className="text-center md:text-left animate-fade-in-left">
            <div className="inline-block mb-6 relative group">
              <div className="w-48 h-48 rounded-full overflow-hidden mx-auto md:mx-0 transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-blue-500/30">
                <img
                  src={profileimg.src}
                  alt="Yuvraj Singh"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-2">Yuvraj Singh</h3>
            <p className="text-blue-400 font-medium mb-4">Full Stack Developer</p>
            <div className="flex items-center justify-center md:justify-start gap-2 text-gray-400 mb-6">
              <MapPin className="h-4 w-4" />
              <span>Mumbai, Maharashtra</span>
            </div>
            
            <a 
              href={resume}
              download="Yuvraj_Singh_Resume.pdf"
              className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center gap-2 mx-auto md:mx-0 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              aria-label="Download CV"
            >
              <Download className="h-5 w-5 group-hover:animate-bounce" />
              Download CV
            </a>
          </div>

          {/* About Text */}
          <div className="animate-fade-in-right">
            <div className="bg-gray-900/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50 hover:border-gray-700/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 group">
              <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
                I'm a motivated student actively seeking opportunities to work and grow in the tech industry. I am a fast learner and a quick adapter, always eager to take on new challenges and expand my skill set.
              </p>
              <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                I love building things—whether it's web applications, tools, or creative projects. My passion for technology drives me to continuously learn and improve, and I'm excited to contribute my energy and ideas to a dynamic team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;