import type { Metadata } from 'next';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Zilla_Slab } from "next/font/google";
import { Roboto } from "next/font/google";


const zilla_slab = Zilla_Slab({
  variable: "--font-zilla",
  subsets: ["latin"],
  weight: "700"
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: 'OneUniX Ecosystem',
  description: 'Discover the OneUniX Ecosystem: products, platform architecture, and vision.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${zilla_slab.variable} ${roboto.variable} font-main min-h-dvh text-fg antialiased`}>
        <ThemeProvider>
          {/* Background blobs */}
          <div className="relative flex min-h-dvh flex-col">
            <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
              <div className="bg-blur-layer" />
              <div className="bg-liquid-blob blob-1" />
              <div className="bg-liquid-blob blob-2" />
              <div className="bg-liquid-blob blob-3" />
              <div className="bg-grid-mask" />
            </div>

            <Header />

            <main className="container mx-auto w-full flex-1 px-4 py-10 sm:py-14">
              {children}
            </main>

            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
