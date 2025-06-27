import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section ...>
      {/* существующее содержимое */}
      <a
        href="#features"
        className="relative inline-block px-6 py-3 rounded-xl overflow-hidden group"
      >
        <span className="absolute inset-0 border-2 rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-border group-hover:animate-gradientBorder"></span>
        <span className="relative block bg-black text-white font-medium text-center">
          Узнать больше
        </span>
      </a>
    </section>
  );
}
