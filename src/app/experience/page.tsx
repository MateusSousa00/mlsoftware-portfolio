import Link from 'next/link';
import { FaCode } from 'react-icons/fa';

const experiences = [
  {
    title: 'Senior Software Engineer',
    company: 'Globant - Neobrain',
    startDate: 'Jan 2022',
    endDate: 'Dec 2023',
    link: '/#1',
    description: [
      'Designed and developed a €200,000 custom employee skill assessment solution, enabling workforce-wide talent evaluation.',
      'Built a high-performance batch processing system capable of inserting 10,000+ users per minute, ensuring seamless synchronization between services across multiple languages.',
      'Initiated the migration of legacy monolithic code to a microservices architecture, significantly improving system scalability and maintainability.',
      'Predominantly focused on fixing bugs directly in the database using SAP HANA, ensuring data integrity and system reliability.',
      'Developed and maintained application features using Node.js and PHP, enhancing system functionality and performance. For frontend, utilized Vue.js to build and improve user interfaces, delivering a seamless user experience.',
      'Ensured all code was rigorously tested, achieving a 10% increase in test coverage for legacy projects. Implemented automated tests using Jest to maintain high-quality code standards.'
    ],
    stack: ['Vue.js', 'Typescript', 'Node.js', 'PHP', 'WebSocket', 'Jest', 'VPN', 'HanaDB', 'Gitlab Actions']
  },
  {
    title: 'Software Engineer',
    company: 'Alloy Mit',
    startDate: 'Jan 2021',
    endDate: 'Mar 2024',
    link: 'https://alloymit.com/',
    description: [
      'Led deployment for the company’s flagship project using containerization (Docker, Kubernetes), improving scalability and operational efficiency.',
      'Refactored a legacy Laravel system to Kotlin, enhancing system performance and maintainability.',
      'Integrated two accounting systems, automating payment processes via API and increasing financial productivity by 20x.',
      'Developed a universal communication interface, improving system interoperability and organizational innovation.',
      'Provided mentorship to junior developers, fostering a culture of continuous learning and technical growth.',
      'Developed and maintained backend services and APIs for high-traffic applications.',
      'Implemented CI/CD pipelines, reducing deployment times and increasing delivery efficiency.',
      'Participated in refactoring legacy code, improving performance and reducing operational costs.',
      'Optimized database queries and backend processes for scalability and lower latency.'
    ],
    stack: [
      'Next.js',
      'TypeScript',
      'Node.js',
      'PHP',
      'Laravel',
      'Docker',
      'Redis',
      'AWS',
      'Nginx',
      'Apache2',
      'Swagger',
      'Linux',
      'Kotlin'
    ]
  },
  {
    title: 'Backend Engineer',
    company: 'LIQI Digital Assets',
    startDate: 'Jan 2020',
    endDate: 'Dec 2020',
    link: 'https://www.liqi.com.br/',
    description: [
      'Integrated an accounting system, automating the generation of up to 120 invoices per minute, streamlining financial processes.',
      'Boosted customer acquisition by 100% through the successful "Member Get Member" campaign.',
      'Introduced and created cashback functionality, resulting in a 5%+ increase in the customer base.',
      'Developed APIs for financial transactions using Node.js & PostgreSQL.',
      'Assisted in database query optimization, enhancing system response times.',
      'Contributed to microservices development, improving system modularity and scalability.',
      'Assisted in writing internal documentation and process standardization, improving team efficiency.'
    ],
    stack: ['Node.js', 'TypeScript', 'Nest.js', 'Prisma', 'Postgres', 'Docker', 'GraphQL', 'Jest']
  }
];

export default function ExperiencePage() {
  return (
    <section className="max-w-4xl mx-auto py-24 px-6 space-y-16">
      <div>
        <h1 className="text-3xl font-bold mb-2">My Full Experience</h1>
        <p className="text-neutral-600 dark:text-neutral-400 text-lg">
          Here’s a detailed look at the roles, projects, and results I’ve delivered across multiple industries and
          stacks.
        </p>
      </div>

      {experiences.map((exp, index) => (
        <Link href={exp.link} key={index}>
          <div className="p-6 mb-4 shadow-sm">
            <h3 className="text-lg font-semibold">
              {exp.title} – {exp.company}
            </h3>
            <p className="text-sm text-muted-foreground mb-2">
              {exp.startDate} – {exp.endDate}
            </p>

            <ul className="list-disc pl-5 mb-4 text-base text-foreground space-y-1">
              {exp.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {exp.stack.map((tech, i) => (
                <div key={i} className="px-3 py-1 rounded-md text-sm flex items-center gap-1 bg-primary text-white">
                  <FaCode className="text-xs" /> {tech}
                </div>
              ))}
            </div>
          </div>
        </Link>
      ))}
      <div className="pt-20 text-center">
        <p className="text-xl font-medium mb-2">Like it that much? You can keep it 😉</p>
        <Link
          href="/mateus-resume.pdf"
          target="_blank"
          className="inline-block px-6 py-3 rounded-md bg-primary text-white hover:bg-opacity-90 transition"
        >
          Download My Resume - EN (PDF)
        </Link>
      </div>
    </section>
  );
}
