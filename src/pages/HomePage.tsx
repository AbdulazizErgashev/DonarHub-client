import { motion } from 'framer-motion'
import { ArrowRight, HandCoins, Sparkles } from 'lucide-react'
import { useAppStore } from '../store'

export function HomePage() {
  const { isDark, toggleTheme } = useAppStore()

  return (
    <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="space-y-6"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary">
          <Sparkles className="h-4 w-4" />
          Humanitarian support made simple
        </div>
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold tracking-tight text-text sm:text-5xl">
            Connect donors, responders, and communities in real time.
          </h1>
          <p className="max-w-xl text-lg text-muted">
            DonarHub helps teams prepare emergency response, publish urgent needs, and coordinate support with confidence.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 font-medium text-soft transition hover:bg-primary/90">
            Explore platform
            <ArrowRight className="h-4 w-4" />
          </button>
          <button
            onClick={toggleTheme}
            className="rounded-full border border-primary/20 px-5 py-3 font-medium text-text transition hover:bg-soft"
          >
            {isDark ? 'Light' : 'Dark'} mode
          </button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35, delay: 0.1 }}
        className="rounded-3xl border border-primary/10 bg-soft/90 p-6 shadow-2xl shadow-black/20"
      >
        <div className="flex items-center gap-3">
          <div className="rounded-2xl bg-teal/15 p-3 text-teal">
            <HandCoins className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm text-slate-400">Live impact</p>
            <p className="text-xl font-semibold">24 active relief streams</p>
          </div>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            ['Donors', '1,240 verified'],
            ['Alerts', '18 urgent requests'],
            ['Volunteers', '360 ready'],
            ['Coverage', '92% area reach'],
          ].map(([label, value]) => (
            <div key={label} className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
              <p className="text-sm text-muted">{label}</p>
              <p className="mt-2 text-lg font-semibold">{value}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
