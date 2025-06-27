import { Button } from 'shadcn-ui';

export function Invite() {
  return (
    <section className="py-16 text-center">
      <h2 className="text-2xl font-bold mb-4">Готовы начать?</h2>
      <Button size="lg" className="rounded-2xl shadow-lg px-8">
        Пригласить в Discord
      </Button>
    </section>
  );
}
