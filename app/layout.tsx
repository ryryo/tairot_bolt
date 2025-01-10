import './globals.css';
import type { Metadata } from 'next';
import { Header } from '@/components/layout/header';
import { MobileFooter } from '@/components/layout/mobile-footer';
import { siteConfig } from '@/config/site';
import { AuthProvider } from '@/providers/auth-provider';
import { CardDetailProvider } from '@/providers/card-detail-provider';

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head />
      <body className="font-sans">
        <AuthProvider>
          <CardDetailProvider>
            <Header />
            <main className="min-h-screen pb-16 md:pb-0">
              {children}
            </main>
            <MobileFooter />
          </CardDetailProvider>
        </AuthProvider>
      </body>
    </html>
  );
}