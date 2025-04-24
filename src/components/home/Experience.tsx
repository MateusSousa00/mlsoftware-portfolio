import Link from 'next/link';
import { FaCode } from 'react-icons/fa';

const experiences = [
  {
    title: 'Full-Stack Developer',
    company: 'Neobrain',
    startDate: 'Jan 2022',
    endDate: 'Dec 2023',
    link: 'https://www.neobrain.io/',
    description:
      'Led development of scalable features, improved architecture, and deployed AI-powered tools for HR platforms.',
    stack: ['Vue.js', 'Typescript', 'Node.js', 'PHP', 'And more...']
  },
  {
    title: 'Software Engineer',
    company: 'Alloy Mit',
    startDate: 'Jan 2021',
    endDate: 'Mar 2024',
    link: 'https://alloymit.com/',
    description:
      'At Alloy, I led containerized deployments, refactored Laravel to Kotlin, and integrated APIs that boosted financial productivity 20x. Previously, I built high-traffic services, improved CI/CD, and optimized legacy code for performance and scalability.',
    stack: ['Next.js', 'TypeScript', 'Node.js', 'PHP', 'And More...']
  },
  {
    title: 'Backend Engineer',
    company: 'LIQI Digital Assets',
    startDate: 'Jan 2020',
    endDate: 'Dec 2020',
    link: 'https://www.liqi.com.br/',
    description:
      'At Liqi, I automated invoices and doubled user acquisition with a referral campaign. Also built APIs and optimized database performance.',
    stack: ['Node.js', 'TypeScript', 'Nest.js', 'Prisma', 'And More...']
  }
];

export default function Experience() {
  return (
    <section className="space-y-8 px-5 py-10 mb-14" id="experience">
      <h1 className="md:hidden text-2xl text-left mb-6">Experience</h1>
      {experiences.map((exp, index) => (
        <Link href={exp.link} key={index}>
          <div className="rounded-2xl p-6 mb-4 shadow-sm transition-transform transform hover:scale-[1.02] hover:bg-muted/30 hover:shadow-md">
            <h3 className="text-lg font-semibold">
              {exp.title} – {exp.company}
            </h3>
            <p className="text-sm text-muted-foreground mb-2">
              {exp.startDate} – {exp.endDate}
            </p>
            <p className="mb-4 text-base text-foreground">{exp.description}</p>
            <div className="flex flex-wrap gap-2">
              {exp.stack.map((tech, i) => (
                <div key={i} className="px-3 py-1 rounded-md text-sm flex items-center gap-1 bg-primary">
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
