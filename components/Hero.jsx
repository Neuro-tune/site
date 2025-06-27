import { Button } from 'shadcn-ui';
import { Music } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="text-center py-20">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-bold mb-4"
      >
        NeuroTune — Ваш музыкальный бот для Discord
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-lg text-gray-300 mb-8 max-w-xl mx-auto"
      >
        Полный контроль над плейлистами, высокое качество звучания, совместимые команды.
      </motion.p>
      <Button size="lg" className="rounded-2xl shadow-lg px-8">
        Пригласить бота <Music className="ml-2" />
      </Button>
    </section>
  );
}
