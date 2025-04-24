'use client';
import ProjectCard from '@/components/projects/ProjectCard';

const projects = [
  {
    title: 'WhatsApp SaaS',
    description:
      'A scalable SaaS for scheduling WhatsApp messages, with plans for AI-driven interactions and customer support automation.',
    tech: ['FastAPI', 'Next.js', 'PostgreSQL', 'Docker'],
    link: 'https://your-saas-demo-link.com',
    image: '/images/whatsapp-saas.png'
  },
  {
    title: 'Confiare Website',
    description:
      'Professional website for a condominium management company. Built with clean Tailwind UI and custom animations.',
    tech: ['Next.js', 'Tailwind', 'Framer Motion'],
    link: 'https://confiare.vercel.app',
    image: '/images/confiare.png'
  }
  // Add more projects as needed
];

export default function Experience() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-20" id="projects">
      <h1 className="text-4xl font-bold mb-10 text-center">Projects</h1>
      <div className="grid gap-10 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
