import type { Metadata } from 'next'
import Button from '@/components/Button'

export const metadata: Metadata = {
  title: 'Home | O10N Design',
  description: 'Welcome to O10N Design portfolio',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-8">Welcome to O10N Design</h1>
        <p className="text-xl mb-4">
          Design & Development Portfolio
        </p>
        <Button label="Click me" to="/about" />
      </div>
    </main>
  )
}
