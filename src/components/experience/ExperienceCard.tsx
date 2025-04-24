type Props = {
  title: string;
  description: string;
  tech: string[];
  link: string;
  image: string;
};

export default function ExperienceCard({ title, description, tech, link, image }: Props) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block border border-neutral-200 dark:border-neutral-800 rounded-lg overflow-hidden hover:shadow-lg transition"
    >
      <p>some image here{image}</p>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-neutral-600 dark:text-neutral-400 mb-4">{description}</p>
        <ul className="flex flex-wrap gap-2 text-sm text-neutral-500 dark:text-neutral-400">
          {tech.map((t) => (
            <li key={t} className="bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded">
              {t}
            </li>
          ))}
        </ul>
      </div>
    </a>
  );
}
