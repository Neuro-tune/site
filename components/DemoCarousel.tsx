import { motion } from 'framer-motion';

export function DemoCarousel() {
  return (
    <section className="py-16 bg-white">
      <h2 className="text-3xl text-center font-bold mb-8">Скриншоты в действии</h2>
      <div className="overflow-x-scroll flex gap-4 px-4">
        {[1,2,3,4].map((i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="min-w-[300px] rounded-2xl shadow-lg bg-gray-100 h-60 flex items-center justify-center"
          >
            Скрин {i}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
