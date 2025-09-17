import React, { useState } from 'react';
import { Mail, MapPin, Send, Github, Linkedin, Loader2, CheckCircle, XCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear status when user starts typing again
    if (submitStatus) setSubmitStatus(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      
      if (response.ok && result.success) {
        setSubmitStatus({
          success: true,
          message: 'Message sent successfully! I\'ll get back to you soon.',
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(result.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus({
        success: false,
        message: error instanceof Error ? error.message : 'Failed to send message. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'yuvrajsingh6.5.2007@gmail.com',
      link: 'mailto:yuvrajsingh6.5.2007@gmail.com',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Mumbai, Maharashtra',
      link: '#',
      color: 'from-green-500 to-teal-500',
    },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/IamSinghYuvraj', label: 'GitHub', color: 'hover:text-white hover:shadow-white/20' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/yuvraj-singh-80a803201/', label: 'LinkedIn', color: 'hover:text-blue-400 hover:shadow-blue-400/20' },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900/30 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4 animate-fade-in-up">
            Get In Touch
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6 animate-fade-in-left">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Let's Connect</h3>
              <p className="text-gray-300 mb-6">
                I'm always open to discussing new opportunities and interesting projects.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="group flex items-center gap-4 p-4 bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-800 hover:border-gray-700 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  aria-label={item.label}
                  tabIndex={0}
                >
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${item.color} group-hover:scale-110 transition-all duration-300 group-hover:shadow-lg`}>
                    <item.icon className="h-5 w-5 text-white group-hover:rotate-12 transition-transform duration-300" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">{item.label}</p>
                    <p className="text-white group-hover:text-blue-300 transition-colors duration-300">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="flex gap-4 pt-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-800 hover:border-gray-700 text-gray-400 transition-all duration-300 hover:scale-110 hover:shadow-lg ${social.color} focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400`}
                  aria-label={social.label}
                  tabIndex={0}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 animate-fade-in-right">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 hover:border-gray-600 focus:shadow-lg focus:shadow-blue-500/20 focus:outline-none"
                  placeholder="Your name"
                  aria-label="Your name"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 hover:border-gray-600 focus:shadow-lg focus:shadow-blue-500/20 focus:outline-none"
                  placeholder="your@email.com"
                  aria-label="Your email"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 resize-none transition-all duration-300 hover:border-gray-600 focus:shadow-lg focus:shadow-blue-500/20 focus:outline-none"
                  placeholder="Your message..."
                  aria-label="Your message"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`group w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 ${isSubmitting ? 'opacity-80 cursor-not-allowed' : ''}`}
                aria-label={isSubmitting ? 'Sending message...' : 'Send Message'}
                tabIndex={0}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    Send Message
                  </>
                )}
              </button>
              
              {submitStatus && (
                <div className={`mt-4 p-3 rounded-lg flex items-center gap-2 ${
                  submitStatus.success 
                    ? 'bg-green-900/30 text-green-400' 
                    : 'bg-red-900/30 text-red-400'
                }`}>
                  {submitStatus.success ? (
                    <CheckCircle className="h-5 w-5 flex-shrink-0" />
                  ) : (
                    <XCircle className="h-5 w-5 flex-shrink-0" />
                  )}
                  <span>{submitStatus.message}</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;