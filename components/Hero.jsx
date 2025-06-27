import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black via-gray-900 to-black text-center p-8">
      <motion.h1
        className="text-5xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Neuro•Tune
      </motion.h1>
      <motion.p
        className="text-xl md:text-2xl mb-6 text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Музыка. Эффекты. Эмоции.
      </motion.p>
      <motion.div
        className="space-x-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <div className="relative group inline-block mt-6">
  <div className="absolute -inset-[2px] rounded-lg bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 blur opacity-75 group-hover:opacity-100 transition"></div>
  <a
    href="https://discord.com/oauth2/authorize?client_id=..." 
    className="relative px-6 py-3 font-semibold text-white bg-black rounded-lg border z-10"
  >
    Добавить в Discord
  </a>
  </div>

        <a href="#features" className="px-6 py-3 border border-purple-600 rounded-xl hover:bg-purple-600 transition">
          Узнать больше
        </a>
      </motion.div>
    </section>
  );
}
