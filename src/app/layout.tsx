import type { Metadata } from 'next';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Yuvraj Singh - Full Stack Developer',
  description: 'Yuvraj Singh - Full Stack Developer specializing in React, Node.js, and modern web technologies. View my portfolio and get in touch.',
  keywords: 'Full Stack Developer, React, Node.js, Portfolio, Web Developer, JavaScript, TypeScript, Yuvraj Singh',
  authors: [{ name: 'Yuvraj Singh' }],
  openGraph: {
    title: 'Yuvraj Singh - Full Stack Developer',
    description: 'Yuvraj Singh - Full Stack Developer specializing in React, Node.js, and modern web technologies. View my portfolio and get in touch.',
    type: 'website',
    url: 'https://your-portfolio-url.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yuvraj Singh - Full Stack Developer',
    description: 'Yuvraj Singh - Full Stack Developer specializing in React, Node.js, and modern web technologies. View my portfolio and get in touch.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}