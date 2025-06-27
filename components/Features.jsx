import { Card, CardContent, CardHeader } from 'shadcn-ui';
import { PlayCircle, Settings2, Users } from 'lucide-react';

const featureList = [
  { icon: <PlayCircle />, title: 'Проигрывание музыки', desc: 'Поддержка YouTube, Spotify и файлов.' },
  { icon: <Settings2 />, title: 'Гибкие настройки', desc: 'Настройте команды под себя.' },
  { icon: <Users />, title: 'Совместимость', desc: 'Работает во всех популярных серверах.' },
];

export function Features() {
  return (
    <section className="py-16 px-4 grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
      {featureList.map((f, i) => (
        <Card key={i} className="rounded-2xl shadow hover:shadow-xl transition">
          <CardHeader>{f.icon}</CardHeader>
          <CardContent>
            <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
            <p className="text-gray-600">{f.desc}</p>
          </CardContent>
        </Card>
      ))}
    </section>
  );
}
