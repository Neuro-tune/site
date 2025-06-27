module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

// pages/index.tsx
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { Invite } from '../components/Invite';
import { Footer } from '../components/Footer';
import { DemoCarousel } from '../components/DemoCarousel';

export default function Home() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <Hero />
      <Features />
      <DemoCarousel />
      <Invite />
      <Footer />
    </main>
  );
}
