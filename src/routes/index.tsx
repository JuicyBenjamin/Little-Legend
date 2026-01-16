import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 flex flex-col items-center justify-center gap-6">
        <img src="/poro.png" alt="Little Legend" className="w-48 h-48 object-contain" />
        <h1 className="text-4xl font-bold">Little Legend</h1>
      </main>
      <footer className="py-4 text-center text-sm text-muted-foreground">
        Poro artwork via{' '}
        <a
          href="https://www.clipartmax.com/middle/m2i8d3i8b1H7m2Z5_poro-png-clipart-chibi-lol-poro/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-foreground"
        >
          ClipartMax
        </a>
        {' '}· Artist unknown
      </footer>
    </div>
  )
}
