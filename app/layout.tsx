import type { Metadata } from 'next';
import './globals.css';
import ClientLayout from '@/components/ClientLayout';

export const metadata: Metadata = {
  title: 'Best Online Hash Generator | MD5, SHA-1, SHA-256, SHA-512',
  description: 'Generate MD5, SHA-1, SHA-256, and SHA-512 hashes instantly. Secure, client-side processing ensuring your data never leaves your browser.',
  keywords: 'hash generator, md5 generator, sha256 generator, sha1, sha512, checksum calculator, online hash tool',
  openGraph: {
    title: 'Best Online Hash Generator',
    description: 'Generate MD5, SHA-1, SHA-256, and SHA-512 hashes instantly.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme') || 
                    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                  document.documentElement.setAttribute('data-theme', theme);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}

