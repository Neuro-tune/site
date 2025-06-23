import { FaSpotify } from 'react-icons/fa';
import { MdAudiotrack } from 'react-icons/md';
import { GiHeadphones } from 'react-icons/gi';
import { RiEmotionHappyFill } from 'react-icons/ri';

const data = [
  { icon: <FaSpotify size={28} />, text: 'Spotify, YouTube, SoundCloud и пр.' },
  { icon: <MdAudiotrack size={28} />, text: 'Автодисшилай автоматически' },
  { icon: <GiHeadphones size={28} />, text: 'Авто DJ и автоматский лист' },
  { icon: <RiEmotionHappyFill size={28} />, text: 'Mood-настройки и выходаи' },
];

export default function Features() {
  return (
    <section className="py-20 px-6 text-center">
      <h2 className="text-4xl font-semibold mb-12">Особенности</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
        {data.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center space-x-4 bg-card p-6 rounded-2xl"
          >
            <div className="text-primary">{item.icon}</div>
            <p className="font-medium text-lg">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
