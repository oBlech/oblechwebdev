import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://oblech-aoe.pages.dev'),
  title: {
    default: 'OBLECH - Web Developer & SEO Expert',
    template: '%s | OBLECH'
  },
  description: 'Professional web developer specializing in React, Next.js, and TailwindCSS with a focus on modern, performant web applications.',
  keywords: ['web developer', 'react developer', 'nextjs developer', 'frontend developer', 'SEO expert', 'TailwindCSS specialist'],
  creator: 'OBLECH',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://oblech-aoe.pages.dev',
    title: 'OBLECH - Web Developer & SEO Expert',
    description: 'Professional web developer specializing in React, Next.js, and TailwindCSS with a focus on modern, performant web applications.',
    siteName: 'OBLECH',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'OBLECH - Web Development & SEO Services'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OBLECH - Web Developer & SEO Expert',
    description: 'Professional web developer specializing in React, Next.js, and TailwindCSS with a focus on modern, performant web applications.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'ws4Jmmc-f_BsMQNB_D0b83Sy97I5BinPjJBJ4l0RLA8',
  },
  alternates: {
    canonical: 'https://oblech-aoe.pages.dev'
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}