import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { Invite } from '../components/Invite';
import { Footer } from '../components/Footer';
import { DemoCarousel } from '../components/DemoCarousel';

export default function Home() {
  return (
    <main className="bg-gray-900 text-white">
      <Hero />
      <Features />
      <DemoCarousel />
      <Invite />
      <Footer />
    </main>
  );
}
