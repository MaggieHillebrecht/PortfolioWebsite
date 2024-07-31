import './global.css';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Navbar } from './components/nav';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Footer from './components/footer';
import { baseUrl } from './sitemap';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Home | Maggie Hillebrecht :)',
    template: '%s | Maggie Hillebrecht :)',
  },
  description: 'This is my website!',
  openGraph: {
    title: 'Maggie Hillebrecht',
    description: 'Click to see all the cool stuff I work on',
    url: baseUrl,
    siteName: 'My Website!',
    locale: 'en_US',
    type: 'website',
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
};

const cx = (...classes) => classes.filter(Boolean).join(' ');

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-black',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased h-screen flex justify-center items-center">
        <div className="overlay fixed top-0 left-0 w-full h-full bg-black opacity-70 pointer-events-none z-0"></div>
        <div className="main-container max-w-4xl w-full p-4 relative z-10 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <main className="flex-auto min-w-0 flex flex-col">
            <Navbar />
            {children}
            <Footer />
            <Analytics />
            <SpeedInsights />
          </main>
        </div>
      </body>
    </html>
  );
}
