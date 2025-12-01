import { Navbar } from '@/components/layout/navbar';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Flash Sale',
  description: 'Diskon hingga 50% untuk game favorit kamu',
};

export default function FlashSalePage() {
  return (
    &lt;main className="min-h-screen"&gt;
      &lt;div className="fixed inset-0 cyber-grid opacity-50 pointer-events-none" /&gt;
      &lt;Navbar /&gt;
      &lt;div className="relative pt-24 pb-12 px-4"&gt;
        &lt;div className="container mx-auto text-center"&gt;
          &lt;h1 className="text-4xl md:text-5xl font-orbitron font-bold mb-4"&gt;
            &lt;span className="text-neon-magenta"&gt;Flash&lt;/span&gt; Sale
          &lt;/h1&gt;
          &lt;p className="text-white/70 mb-12"&gt;Diskon spesial waktu terbatas!&lt;/p&gt;
          &lt;div className="text-white/50 py-20"&gt;
            &lt;p className="text-xl mb-4"&gt;🔥&lt;/p&gt;
            &lt;p&gt;Flash sale akan segera hadir...&lt;/p&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/main&gt;
  );
}
