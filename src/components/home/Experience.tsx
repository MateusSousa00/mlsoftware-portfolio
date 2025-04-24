import Link from 'next/link';
import { FaCode } from 'react-icons/fa';

const experiences = [
  {
    title: 'Full-Stack Developer',
    company: 'Neobrain',
    startDate: 'Jan 2022',
    endDate: 'Dec 2023',
    link: '/#1',
    description:
      'Led development of scalable features, improved architecture, and deployed AI-powered tools for HR platforms.',
    stack: ['TypeScript', 'Node.js', 'Python', 'Next.js', 'Docker', 'PostgreSQL']
  },
  {
    title: 'Software Engineer',
    company: 'LIQI',
    startDate: 'Apr 2021',
    endDate: 'Dec 2021',
    link: '/#2',
    description:
      'Contributed to blockchain integrations and built secure microservices with strong testing and CI/CD workflows.',
    stack: ['Kotlin', 'Spring Boot', 'Docker', 'GraphQL', 'Redis']
  },
  {
    title: 'Tech Lead & Developer',
    company: 'Globant France',
    startDate: 'Jan 2020',
    endDate: 'Mar 2021',
    link: '/#3',
    description: 'Refactored legacy systems, mentored junior devs, and designed high-throughput backend architectures.',
    stack: ['JavaScript', 'PHP', 'Laravel', 'MySQL', 'RabbitMQ']
  }
];

export default function Experience() {
  return (
    <section className="space-y-8 px-5 py-10 mb-14" id="experience">
      <h1 className="md:hidden text-2xl text-left mb-6">Experience</h1>
      {experiences.map((exp, index) => (
        <Link href={exp.link} key={index}>
          <div className="border border-muted rounded-2xl p-6 mb-4 shadow-sm transition-transform transform hover:scale-[1.02] hover:bg-muted/30 hover:shadow-md">
            <h3 className="text-lg font-semibold">
              {exp.title} – {exp.company}
            </h3>
            <p className="text-sm text-muted-foreground mb-2">
              {exp.startDate} – {exp.endDate}
            </p>
            <p className="mb-4 text-base text-foreground">{exp.description}</p>
            <div className="flex flex-wrap gap-2">
              {exp.stack.map((tech, i) => (
                <div
                  key={i}
                  className="border border-muted px-3 py-1 rounded-md text-sm flex items-center gap-1 bg-primary"
                >
                  <FaCode className="text-xs" /> {tech}
                </div>
              ))}
            </div>
          </div>
        </Link>
      ))}

      <Link
        href="/experience"
        className="text-accent-foreground text-left dark:text-primary underline underline-offset-4 hover:opacity-80"
      >
        Full experience →
      </Link>
    </section>
  );
}
