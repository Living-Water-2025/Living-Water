import Image from "next/image";

export default function Home() {
  return (
    <div className="grid justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-5xl font-thin">Living Water 2025</h1>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        Content
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        Footer
      </footer>
    </div>
  );
}
