import { ThemeToggle } from '@/components/ui/ThemeToggle';

export default function Home() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-color-bg-primary text-color-text-primary">
      <h1 className="mb-8 text-4xl font-bold text-color-text-primary">
        DONEZO App
      </h1>

      <ThemeToggle />
    </section>
  );
}
