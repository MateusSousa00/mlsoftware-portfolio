import Hero from '@/components/home/Hero';
import Pillars from '@/components/home/Pillars';
import Packages from '@/components/home/Packages';
import Projects from '@/components/home/Projects';
import Process from '@/components/home/Process';

export default function Home() {
  return (
    <>
      <Hero />
      <Pillars />
      <Packages />
      <Projects />
      <Process />
    </>
  );
}
