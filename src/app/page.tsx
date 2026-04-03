import Image from "next/image";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center relative overflow-hidden px-6">
      {/* Decorative background elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-500/10 blur-[120px] pointer-events-none" />

      <div className="z-10 w-full max-w-5xl flex flex-col items-center gap-12 py-20">
        {/* Hero Section */}
        <div className="flex flex-col items-center text-center gap-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-blue-400 mb-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Next-Gen Performance
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500 leading-[1.1] animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            Building the Future <br /> of Digital Excellence
          </h1>
          
          <p className="max-w-2xl text-lg md:text-xl text-zinc-400 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            Experience lightning-fast interfaces, seamless transitions, and 
            premium aesthetics designed for the modern web.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
            <a
              href="#get-started"
              className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-zinc-200 transition-all shadow-lg hover:shadow-white/10"
            >
              Get Started
            </a>
            <a
              href="https://nextjs.org/docs"
              className="px-8 py-4 rounded-full glass font-semibold text-white transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              Documentation
            </a>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-12 animate-in fade-in zoom-in duration-1000 delay-700">
          {[
            {
              title: "Performance First",
              desc: "Optimized for the speed of light with server-side excellence.",
              icon: "⚡"
            },
            {
              title: "Modern Design",
              desc: "Crafted with precision using modern CSS and Tailwind.",
              icon: "🎨"
            },
            {
              title: "SEO Optimized",
              desc: "Built to be discovered by search engines out of the box.",
              icon: "🔍"
            }
          ].map((feature, i) => (
            <div 
              key={i}
              className="glass p-8 rounded-2xl flex flex-col gap-4 border border-white/5 transition-all hover:scale-[1.02]"
            >
              <div className="text-3xl">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
              <p className="text-zinc-400 leading-relaxed text-sm">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full max-w-5xl py-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 mt-20 text-zinc-500 text-sm">
        <p>© 2026 Catch-up Technologies. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
        </div>
      </footer>
    </main>
  );
}
