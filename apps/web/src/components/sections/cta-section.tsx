'use client';

import { motion } from 'framer-motion';
import { Button } from '@novatopup/ui';

export function CTASection() {
  return (
    &lt;section className="relative py-24 px-4 overflow-hidden"&gt;
      &lt;div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/20 via-neon-magenta/20 to-electric-green/20 blur-3xl" /&gt;
      &lt;div className="container mx-auto relative z-10"&gt;
        &lt;motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-12 md:p-16 text-center"
        &gt;
          &lt;h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6"&gt;
            Siap &lt;span className="text-neon-cyan"&gt;Top Up&lt;/span&gt; Sekarang?
          &lt;/h2&gt;
          &lt;p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto"&gt;
            Bergabung dengan 1 juta+ gamer yang sudah mempercayai NovaTopup untuk kebutuhan top up game mereka.
          &lt;/p&gt;
          &lt;div className="flex flex-col sm:flex-row gap-4 justify-center"&gt;
            &lt;Button variant="neonGlow" size="lg" className="min-w-[200px]"&gt;Daftar Gratis&lt;/Button&gt;
            &lt;Button variant="neonOutline" size="lg" className="min-w-[200px]"&gt;Hubungi Kami&lt;/Button&gt;
          &lt;/div&gt;
        &lt;/motion.div&gt;
      &lt;/div&gt;
    &lt;/section&gt;
  );
}
