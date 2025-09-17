import React from 'react';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

type TimelineItem = {
  title: string;
  org: string;
  period: string;
  location?: string;
  points?: string[];
};

const SectionHeader = ({ icon: Icon, title, subtitle }: { icon: React.ElementType; title: string; subtitle?: string }) => (
  <div className="mb-12 text-center">
    <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-4">
      <Icon className="w-7 h-7" />
    </div>
    <h2 className="text-3xl sm:text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
      {title}
    </h2>
    {subtitle && <p className="text-gray-400 max-w-2xl mx-auto">{subtitle}</p>}
  </div>
);

const Timeline = ({ items }: { items: TimelineItem[] }) => (
  <ol className="relative border-s border-gray-800">
    {items.map((item, idx) => (
      <li key={idx} className="mb-10 ms-6">
        <span className="absolute flex items-center justify-center w-10 h-10 bg-gray-900 rounded-full -start-5 ring-2 ring-gray-800">
          <Calendar className="w-5 h-5 text-blue-400" />
        </span>
        <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-5 hover:border-blue-500/30 transition-colors">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
            <span className="text-sm text-gray-400">{item.period}</span>
          </div>
          <p className="text-gray-300 mb-2">{item.org}{item.location ? ` • ${item.location}` : ''}</p>
          {item.points && (
            <ul className="list-disc list-inside text-gray-400 space-y-1">
              {item.points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          )}
        </div>
      </li>
    ))}
  </ol>
);

const Experience: React.FC = () => {
  // TODO: Replace with your real data
  const education: TimelineItem[] = [
    {
      title: 'Diploma in Computer Engineering',
      org: 'Vidyalankar Polytechnic',
      period: '2022 — 2025',
      location: 'Mumbai, Maharashtra',
      points: ['percentage: 87%'],
    },

    {
        title: 'Bachelor of Technology (B.Tech) — Computer Science & Technology',
        org: 'Thakur College of Engineering & Technology',
        period: '2025 — 2028',
        location: 'Mumbai, Maharashtra',
        points: ['CGPA: 8.6/10'],
    }

    
  ];

  const work: TimelineItem[] = [
    {
      title: 'Software Developer',
      org: 'Softescribble, mumbai central',
      period: 'jun 2023 — aug 2023',
      location: 'In office',
      points: ['Built Desktop applications using Python.'],
    },
    // Add more roles as needed
  ];

  return (
    <section id="experience" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          icon={Briefcase}
          title="Experience & Education"
          subtitle="A snapshot of my professional journey and academic background."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="w-5 h-5 text-purple-400" />
              <h3 className="text-xl font-semibold">Education</h3>
            </div>
            <Timeline items={education} />
          </div>

          <div>
            <div className="flex items-center gap-2 mb-6">
              <Briefcase className="w-5 h-5 text-blue-400" />
              <h3 className="text-xl font-semibold">Experience</h3>
            </div>
            <Timeline items={work} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
