import type { Metadata } from 'next';
import { Inter, Orbitron, JetBrains_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';

import { Providers } from '@/components/providers';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
  weight: ['400', '700', '900'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'NovaTopup - Revolutionary Gaming Topup Platform',
    template: '%s | NovaTopup',
  },
  description: 'Platform topup game terbaik dengan konfirmasi real-time, AI recommendations, dan AR preview. Topup Mobile Legends, Free Fire, PUBG, Genshin Impact, dan 50+ game lainnya.',
  keywords: ['topup game', 'mobile legends', 'free fire', 'pubg', 'genshin impact', 'diamond murah', 'top up cepat'],
  authors: [{ name: 'NovaTopup Team' }],
  creator: 'NovaTopup',
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://novatopup.com',
    title: 'NovaTopup - Revolutionary Gaming Topup Platform',
    description: 'Platform topup game terbaik dengan konfirmasi real-time &lt;5 detik',
    siteName: 'NovaTopup',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NovaTopup - Revolutionary Gaming Topup Platform',
    description: 'Platform topup game terbaik dengan konfirmasi real-time',
    creator: '@novatopup',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    &lt;html lang="id" suppressHydrationWarning className={`${inter.variable} ${orbitron.variable} ${jetbrainsMono.variable}`}&gt;
      &lt;body className="bg-deep-void text-white antialiased"&gt;
        &lt;Providers&gt;
          {children}
        &lt;/Providers&gt;
        &lt;Analytics /&gt;
      &lt;/body&gt;
    &lt;/html&gt;
  );
}
