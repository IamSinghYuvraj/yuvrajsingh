import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Yuvraj Singh - Full Stack Developer',
  description: 'Portfolio of Yuvraj Singh - Full Stack Developer specializing in React, Next.js, and modern web technologies',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}