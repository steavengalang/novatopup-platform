'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@novatopup/ui';

const games = [
  { id: 1, name: 'Mobile Legends', category: 'MOBA', discount: '15%', popular: true },
  { id: 2, name: 'Free Fire', category: 'Battle Royale', discount: '10%', popular: true },
  { id: 3, name: 'Genshin Impact', category: 'RPG', discount: '5%', popular: false },
  { id: 4, name: 'PUBG Mobile', category: 'Battle Royale', discount: '12%', popular: true },
];

export function FeaturedGames() {
  return (
    &lt;section className="relative py-24 px-4"&gt;
      &lt;div className="container mx-auto"&gt;
        &lt;motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        &gt;
          &lt;h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4"&gt;
            &lt;span className="text-neon-cyan"&gt;Game&lt;/span&gt; Populer
          &lt;/h2&gt;
          &lt;p className="text-white/70 text-lg"&gt;Top up game favorit kamu dengan harga termurah&lt;/p&gt;
        &lt;/motion.div&gt;

        &lt;div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"&gt;
          {games.map((game, index) =&gt; (
            &lt;motion.div
              key={game.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            &gt;
              &lt;Card className="group cursor-pointer overflow-hidden"&gt;
                &lt;div className="relative aspect-[3/4] overflow-hidden"&gt;
                  &lt;div className="absolute inset-0 bg-gradient-to-t from-deep-void via-transparent to-transparent z-10" /&gt;
                  &lt;div className="w-full h-full bg-void-light group-hover:scale-110 transition-transform duration-500" /&gt;
                  {game.popular &amp;&amp; (
                    &lt;div className="absolute top-4 left-4 z-20 px-3 py-1 bg-neon-magenta rounded-full text-xs font-semibold"&gt;
                      🔥 Populer
                    &lt;/div&gt;
                  )}
                  {game.discount &amp;&amp; (
                    &lt;div className="absolute top-4 right-4 z-20 px-3 py-1 bg-electric-green/20 border border-electric-green rounded-full text-xs font-semibold text-electric-green"&gt;
                      -{game.discount}
                    &lt;/div&gt;
                  )}
                &lt;/div&gt;
                &lt;CardContent className="p-4 relative z-20"&gt;
                  &lt;h3 className="font-orbitron font-bold text-lg mb-1"&gt;{game.name}&lt;/h3&gt;
                  &lt;p className="text-sm text-white/60 mb-3"&gt;{game.category}&lt;/p&gt;
                  &lt;div className="flex items-center justify-between"&gt;
                    &lt;span className="text-sm text-neon-cyan"&gt;Mulai Rp 5.000&lt;/span&gt;
                    &lt;span className="text-xs text-white/50"&gt;⚡ Instan&lt;/span&gt;
                  &lt;/div&gt;
                &lt;/CardContent&gt;
              &lt;/Card&gt;
            &lt;/motion.div&gt;
          ))}
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/section&gt;
  );
}
