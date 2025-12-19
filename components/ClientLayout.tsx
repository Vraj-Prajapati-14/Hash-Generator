'use client';

import Header from './Header';
import Footer from './Footer';
import { ThemeProvider } from './ThemeProvider';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider>
            <Header />
            <main className="container" style={{ minHeight: '80vh', padding: '40px 20px' }}>
                {children}
            </main>
            <Footer />
        </ThemeProvider>
    );
}
