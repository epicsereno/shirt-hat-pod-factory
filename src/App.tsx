import { useState } from 'react'
import { ShoppingBag, Shirt, HardHat, Zap, Github, ArrowRight, Check } from 'lucide-react'
import { motion } from 'framer-motion'

const products = [
  {
    id: 1,
    name: 'Sigma Factory Tee',
    type: 'shirt',
    price: 29.99,
    tagline: 'Built by the automation. Worn by the builders.',
    colors: ['Black', 'Navy', 'White'],
    image: 'https://placehold.co/600x700/0c0c0e/7c7cff?text=Sigma+Tee',
    badge: 'Best Seller',
  },
  {
    id: 2,
    name: 'Pipeline Cap',
    type: 'hat',
    price: 24.99,
    tagline: 'Ship code. Ship merch. Same energy.',
    colors: ['Black', 'Olive', 'Charcoal'],
    image: 'https://placehold.co/600x700/0c0c0e/a3e635?text=Pipeline+Cap',
    badge: 'New',
  },
  {
    id: 3,
    name: 'Zero Inventory Hoodie',
    type: 'shirt',
    price: 49.99,
    tagline: 'No stock. No stress. Just pure POD flow.',
    colors: ['Black', 'Ash', 'Forest'],
    image: 'https://placehold.co/600x700/0c0c0e/f472b6?text=Zero+Inv+Hoodie',
    badge: null,
  },
  {
    id: 4,
    name: 'GitHub Actions Beanie',
    type: 'hat',
    price: 22.99,
    tagline: 'Runs on every push. Looks good on every head.',
    colors: ['Black', 'Heather Grey'],
    image: 'https://placehold.co/600x700/0c0c0e/38bdf8?text=Actions+Beanie',
    badge: 'Limited',
  },
]

function App() {
  const [filter, setFilter] = useState<'all' | 'shirt' | 'hat'>('all')

  const filtered = filter === 'all' ? products : products.filter(p => p.type === filter)

  return (
    <div className="min-h-screen">
      {/* Nav */}
      <nav className="sticky top-0 z-50 glass border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-indigo-500/20 flex items-center justify-center">
              <Zap className="w-5 h-5 text-indigo-400" />
            </div>
            <span className="font-bold text-lg tracking-tight">Shirt & Hat Factory</span>
          </div>
          <div className="hidden sm:flex items-center gap-6 text-sm text-zinc-400">
            <a href="#products" className="hover:text-white transition">Products</a>
            <a href="#automation" className="hover:text-white transition">Automation</a>
            <a href="https://github.com/epicsereno/shirt-hat-pod-factory" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-white transition">
              <Github className="w-4 h-4" /> Repo
            </a>
          </div>
          <button className="btn-primary text-sm py-2 px-4">
            <ShoppingBag className="w-4 h-4" /> Cart
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden pt-20 pb-24 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium mb-6">
              <Zap className="w-3.5 h-3.5" /> Fully Automated POD Pipeline
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight mb-6">
              Design once.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-fuchsia-400">Sell forever.</span>
            </h1>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-10">
              Zero inventory. Zero fulfillment headaches. Every shirt and hat is printed on demand the moment someone orders. Powered by GitHub Actions + Printful-ready payloads.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#products" className="btn-primary">
                Shop the Factory <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#automation" className="btn-secondary">
                See the Automation
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <h2 className="text-3xl font-bold mb-2">Factory Line</h2>
              <p className="text-zinc-400">Shirts & hats ready for Printful / any POD partner</p>
            </div>
            <div className="flex gap-2">
              {(['all', 'shirt', 'hat'] as const).map(f => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                    filter === f
                      ? 'bg-indigo-500 text-white'
                      : 'bg-white/5 text-zinc-400 hover:bg-white/10'
                  }`}
                >
                  {f === 'all' ? 'All' : f === 'shirt' ? <><Shirt className="w-4 h-4 inline mr-1" />Shirts</> : <><HardHat className="w-4 h-4 inline mr-1" />Hats</>}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="glass-card overflow-hidden group"
              >
                <div className="aspect-[4/5] relative overflow-hidden bg-zinc-900">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {p.badge && (
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-indigo-500 text-xs font-semibold">
                      {p.badge}
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="font-semibold">{p.name}</h3>
                    <span className="text-indigo-300 font-bold">${p.price}</span>
                  </div>
                  <p className="text-sm text-zinc-400 mb-4">{p.tagline}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {p.colors.map(c => (
                      <span key={c} className="text-xs px-2 py-0.5 rounded bg-white/5 text-zinc-400">{c}</span>
                    ))}
                  </div>
                  <button className="w-full btn-primary text-sm py-2.5">
                    Add to Cart
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Automation section */}
      <section id="automation" className="py-20 px-4 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">How the Factory Runs</h2>
            <p className="text-zinc-400">Everything is designed to build and ship with zero manual work</p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {[
              { title: 'Push to Main', desc: 'GitHub Actions builds the storefront and deploys to GitHub Pages automatically.' },
              { title: 'Design → Payload', desc: 'Drop new designs into /designs. Printful-ready JSON payloads are generated for shirts & hats.' },
              { title: 'Order → Print', desc: 'Customer orders → Printful (or any POD partner) prints & ships. Zero inventory held.' },
            ].map((step, i) => (
              <div key={i} className="glass-card p-6">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-300 font-bold text-sm mb-4">
                  {i + 1}
                </div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-zinc-400">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="glass-card p-6 sm:p-8">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <Check className="w-5 h-5 text-green-400" /> Local run & build
            </h3>
            <pre className="bg-black/40 rounded-xl p-4 text-sm overflow-x-auto text-zinc-300 font-mono">
{`npm install
npm run dev          # local preview
npm run build        # production build
npm run deploy       # or just push to main`}
            </pre>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-10 px-4 text-center text-sm text-zinc-500">
        <p>Shirt & Hat Factory · Automated POD · Built with React + Vite + Tailwind</p>
        <p className="mt-2">
          <a href="https://github.com/epicsereno/shirt-hat-pod-factory" className="text-indigo-400 hover:underline">
            github.com/epicsereno/shirt-hat-pod-factory
          </a>
        </p>
      </footer>
    </div>
  )
}

export default App
