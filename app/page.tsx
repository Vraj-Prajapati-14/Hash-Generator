import HashTool from '@/components/HashTool';
import styles from './Home.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Online Hash Generator | MD5, SHA-1, SHA-256, SHA-512',
  description: 'Generate MD5, SHA-1, SHA-256, and SHA-512 hashes instantly. Secure, client-side processing ensuring your data never leaves your browser.',
  alternates: {
    canonical: 'https://www.hashgenerator.online',
  },
  openGraph: {
    title: 'Best Online Hash Generator',
    description: 'Generate MD5, SHA-1, SHA-256, and SHA-512 hashes instantly.',
    url: 'https://www.hashgenerator.online',
    siteName: 'Hash Pro',
    locale: 'en_US',
    type: 'website',
  },
};

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Hash Generator',
    url: 'https://www.hashgenerator.online',
    description: 'A free online tool to generate MD5, SHA-1, SHA-256, and SHA-512 hashes instantly.',
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    featureList: [
      'MD5 Hash Generation',
      'SHA-1 Hash Generation',
      'SHA-256 Hash Generation',
      'SHA-512 Hash Generation',
      'Secure Client-Side Processing'
    ]
  };

  return (
    <div className={styles.container}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className={styles.hero}>
        <h1 className={styles.title}>
          Best Online Hash Generator
        </h1>
        <p className={styles.subtitle}>
          Generate MD5, SHA-1, SHA-256, and SHA-512 hashes instantly. Secure, client-side processing ensuring your data never leaves your browser.
        </p>
      </section>

      <HashTool />

      <section className={styles.section}>
        <div className="glass-card">
          <h2 className={styles.sectionTitle}>Why use this Hash Generator?</h2>
          <div className={styles.grid}>
            <div>
              <h3 className={styles.featureTitle}>Secure & Client-Side</h3>
              <p className={styles.text}>
                We prioritize your privacy. All hashing happens locally in your browser using JavaScript. No data is sent to any server.
              </p>
            </div>
            <div>
              <h3 className={styles.featureTitle}>Multiple Hash Algorithms</h3>
              <p className={styles.text}>
                Generate MD5, SHA-1, SHA-256, and SHA-512 hashes all in one place. Perfect for checksums, verification, and security purposes.
              </p>
            </div>
            <div>
              <h3 className={styles.featureTitle}>Fast & Efficient</h3>
              <p className={styles.text}>
                Generate hashes instantly as you type. No waiting, no loading times. Real-time hash generation for maximum productivity.
              </p>
            </div>
            <div>
              <h3 className={styles.featureTitle}>Easy to Use</h3>
              <p className={styles.text}>
                Simple, intuitive interface. Just paste your text and get all hash types at once. One-click copy functionality included.
              </p>
            </div>
          </div>
        </div>

        <div className="glass-card">
          <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className={styles.faqItem}>
              <h4 className={styles.faqQuestion}>What is a hash?</h4>
              <p className={styles.text}>
                A hash is a fixed-size string generated from input data of any size. Hash functions are one-way functions, meaning you cannot reverse the process to get the original data from the hash.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h4 className={styles.faqQuestion}>Is my data safe?</h4>
              <p className={styles.text}>
                Yes! We do not store or transmit your data. Everything is processed locally on your device using JavaScript in your browser.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h4 className={styles.faqQuestion}>Which hash algorithm should I use?</h4>
              <p className={styles.text}>
                For security purposes, SHA-256 or SHA-512 are recommended as they are more secure than MD5 or SHA-1. MD5 and SHA-1 are considered cryptographically broken but are still useful for checksums and non-security applications.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

