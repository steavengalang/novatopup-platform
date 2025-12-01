'use client';

import { motion } from 'framer-motion';

const features = [
  { icon: '⚡', title: 'Proses Instan', description: 'Konfirmasi real-time kurang dari 5 detik via WebSocket' },
  { icon: '🔒', title: 'Aman &amp; Terpercaya', description: '2FA authentication dan blockchain verification' },
  { icon: '🤖', title: 'AI Recommendations', description: 'Smart suggestions game favorit berbasis machine learning' },
  { icon: '🎁', title: 'Loyalty Rewards', description: 'Cashback 2% setiap transaksi, redeem skin gratis' },
  { icon: '🎮', title: '50+ Game', description: 'Support game populer dari Mobile Legends hingga Genshin Impact' },
  { icon: '💳', title: 'Multi Payment', description: 'E-wallet, bank transfer, hingga cryptocurrency' },
];

export function WhyChooseUs() {
  return (
    &lt;section className="relative py-24 px-4 bg-void-light/30"&gt;
      &lt;div className="container mx-auto"&gt;
        &lt;motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        &gt;
          &lt;h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4"&gt;
            Kenapa &lt;span className="text-neon-cyan"&gt;NovaTopup&lt;/span&gt;?
          &lt;/h2&gt;
          &lt;p className="text-white/70 text-lg"&gt;Platform topup game terbaik dengan teknologi terdepan&lt;/p&gt;
        &lt;/motion.div&gt;

        &lt;div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"&gt;
          {features.map((feature, index) =&gt; (
            &lt;motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-xl p-6 hover:bg-white/10 transition-all group"
            &gt;
              &lt;div className="text-5xl mb-4 group-hover:scale-110 transition-transform"&gt;{feature.icon}&lt;/div&gt;
              &lt;h3 className="font-orbitron font-bold text-xl mb-2 text-neon-cyan"&gt;{feature.title}&lt;/h3&gt;
              &lt;p className="text-white/70"&gt;{feature.description}&lt;/p&gt;
            &lt;/motion.div&gt;
          ))}
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/section&gt;
  );
}
