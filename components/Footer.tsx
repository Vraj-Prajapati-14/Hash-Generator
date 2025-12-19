import Link from 'next/link';
import { Hash } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
    const productLinks = [
        { href: '/', label: 'Generator' },
        { href: '/features', label: 'Features' },
        { href: '/guide', label: 'User Guide' },
        { href: '/examples', label: 'Examples' },
        { href: '/reference', label: 'Algorithm Reference' },
    ];

    const resourceLinks = [
        { href: '/guide', label: 'Documentation' },
        { href: '/examples', label: 'Hash Examples' },
        { href: '/reference', label: 'Algorithm Comparison' },
    ];

    const legalLinks = [
        { href: '/privacy', label: 'Privacy Policy' },
        { href: '/terms', label: 'Terms of Service' },
        { href: '/contact', label: 'Contact' },
    ];

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.brandSection}>
                        <Link href="/" className={styles.logo}>
                            <Hash size={24} />
                            <span>Hash Pro</span>
                        </Link>
                        <p className={styles.description}>
                            Generate MD5, SHA-1, SHA-256, SHA-512 hashes instantly. Free, fast, and secure.
                        </p>
                    </div>

                    <div className={styles.linksSection}>
                        <h4 className={styles.linksTitle}>Product</h4>
                        <ul className={styles.linksList}>
                            {productLinks.map((link) => (
                                <li key={link.href + link.label}>
                                    <Link href={link.href} className={styles.link}>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={styles.linksSection}>
                        <h4 className={styles.linksTitle}>Resources</h4>
                        <ul className={styles.linksList}>
                            {resourceLinks.map((link) => (
                                <li key={link.href + link.label}>
                                    <Link href={link.href} className={styles.link}>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={styles.linksSection}>
                        <h4 className={styles.linksTitle}>Legal</h4>
                        <ul className={styles.linksList}>
                            {legalLinks.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className={styles.link}>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p className={styles.copyright}>
                        © {new Date().getFullYear()} Hash Pro. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
