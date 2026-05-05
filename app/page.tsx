export default function Home() {
  const faqs = [
    {
      q: 'How does the hashtag analysis work?',
      a: 'We pull live data from the YouTube Data API to surface trending hashtags in your niche, ranked by reach and competition score.'
    },
    {
      q: 'Can I analyze competitor channels?',
      a: 'Yes. Enter any public channel URL and get a breakdown of their top-performing Shorts, posting cadence, and keyword strategy.'
    },
    {
      q: 'What does the $12/mo subscription include?',
      a: 'Unlimited SEO audits, daily trending hashtag reports, optimal posting time recommendations, and title/description AI suggestions.'
    }
  ]

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          YouTube Shorts SEO
        </span>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Optimize YouTube Shorts for<br />
          <span className="text-[#58a6ff]">Maximum Reach &amp; Engagement</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Trending hashtags, competitor analysis, and AI-powered title suggestions — everything you need to grow your Shorts channel fast.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Optimizing — $12/mo
        </a>
        <div className="mt-8 flex justify-center gap-8 text-sm text-[#8b949e]">
          <span>✓ Trending hashtags daily</span>
          <span>✓ Competitor insights</span>
          <span>✓ Best posting times</span>
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$12</div>
          <div className="text-[#8b949e] text-sm mb-6">per month, cancel anytime</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              'Unlimited SEO audits',
              'Daily trending hashtag reports',
              'Optimal posting time analysis',
              'AI title & description suggestions',
              'Competitor channel breakdowns',
              'Niche keyword tracking'
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="mt-20 text-center text-[#484f58] text-xs">
        &copy; {new Date().getFullYear()} YouTube Shorts SEO Optimizer. All rights reserved.
      </footer>
    </main>
  )
}
