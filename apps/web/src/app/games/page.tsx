import { Navbar } from '@/components/layout/navbar';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Katalog Game',
  description: '50+ game populer tersedia untuk top up instan',
};

export default function GamesPage() {
  return (
    &lt;main className="min-h-screen"&gt;
      &lt;div className="fixed inset-0 cyber-grid opacity-50 pointer-events-none" /&gt;
      &lt;Navbar /&gt;
      &lt;div className="relative pt-24 pb-12 px-4"&gt;
        &lt;div className="container mx-auto"&gt;
          &lt;h1 className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-8"&gt;
            &lt;span className="text-neon-cyan"&gt;Katalog&lt;/span&gt; Game
          &lt;/h1&gt;
          &lt;p className="text-center text-white/70 mb-12 max-w-2xl mx-auto"&gt;
            Pilih game favorit kamu dan top up dengan harga termurah
          &lt;/p&gt;
          
          {/* Filter Section - Coming Soon */}
          &lt;div className="glass rounded-xl p-6 mb-8"&gt;
            &lt;div className="flex flex-wrap gap-4"&gt;
              &lt;button className="px-4 py-2 rounded-lg bg-neon-cyan/10 border border-neon-cyan text-neon-cyan"&gt;
                Semua Game
              &lt;/button&gt;
              &lt;button className="px-4 py-2 rounded-lg border border-white/20 hover:bg-white/5"&gt;
                MOBA
              &lt;/button&gt;
              &lt;button className="px-4 py-2 rounded-lg border border-white/20 hover:bg-white/5"&gt;
                Battle Royale
              &lt;/button&gt;
              &lt;button className="px-4 py-2 rounded-lg border border-white/20 hover:bg-white/5"&gt;
                RPG
              &lt;/button&gt;
            &lt;/div&gt;
          &lt;/div&gt;

          {/* Games Grid - Placeholder */}
          &lt;div className="text-center text-white/50 py-20"&gt;
            &lt;p className="text-xl mb-4"&gt;🎮&lt;/p&gt;
            &lt;p&gt;Game catalog coming soon...&lt;/p&gt;
            &lt;p className="text-sm mt-2"&gt;Connect to GraphQL API to fetch games&lt;/p&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/main&gt;
  );
}
