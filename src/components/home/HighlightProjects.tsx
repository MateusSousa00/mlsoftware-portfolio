'use client';

import Link from 'next/link';
import Image from 'next/image';

const projects = [
  {
    name: 'Software Architecture Project',
    description:
      'Clean Architecture-based system with microservices, monitoring, and deployment strategies using Docker, Kubernetes, and AWS.',
    link: 'https://github.com/orgs/4SOAT-G48/repositories',
    image: '/projects/software_architecture.png'
  },
  {
    name: 'Sentiment Analysis API',
    description: 'AI-powered REST API using FastAPI, Hugging Face, and Docker for real-time sentiment classification.',
    link: 'https://github.com/MateusSousa00/sentiment-analysis',
    image: '/projects/sentiment_analysis.png'
  },
  {
    name: 'Version.com.br',
    description: 'Corporate website focused on SEO, performance, and responsive design for a consulting agency.',
    link: 'https://version.com.br',
    image: '/projects/version.png'
  },
  {
    name: 'Confiareservicos.com.br',
    description: 'Full redesign and frontend development of a condominium services website using Next.js and Tailwind.',
    link: 'https://confiareservicos.com.br',
    image: '/projects/confiare.png'
  }
];

export default function HighlightProjects() {
  return (
    <section id="projects" className="space-y-6 px-5 py-10 mb-14">
      <h2 className="md:hidden text-2xl font-bold">Highlight Projects</h2>
      {projects.map((project, index) => (
        <Link key={index} href={project.link} target="_blank">
          <div className="flex items-center gap-6 border border-muted rounded-2xl p-6 shadow-sm transition-transform transform hover:scale-[1.02] hover:bg-muted/30 hover:shadow-md mb-4">
            <div className="w-24 h-24 relative flex-shrink-0">
              <Image src={project.image} alt={project.name} fill className="object-cover rounded-md" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">{project.name}</h3>
              <p className="text-base text-foreground">{project.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
}
