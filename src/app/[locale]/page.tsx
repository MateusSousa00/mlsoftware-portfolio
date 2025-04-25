import Articles from '@/components/home/Articles';
import About from '@/components/home/About';
import Experience from '@/components/home/Experience';
import HighlightProjects from '@/components/home/HighlightProjects';

export default function Home() {
  return (
    <>
      <About />
      <Experience />
      <HighlightProjects />
      <Articles />
    </>
  );
}
