import styles from '../Home.module.css';
import { Metadata } from 'next';
import { Hash, Shield, Zap, Copy, RefreshCw, Lock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Features | Hash Generator Online Tool',
  description: 'Explore all features of our free online hash generator. Generate MD5, SHA-1, SHA-256, SHA-512 hashes instantly.',
  alternates: {
    canonical: 'https://www.hashgenerator.online/features',
  },
};

export default function FeaturesPage() {
  const features = [
    {
      icon: <Hash size={32} />,
      title: 'Multiple Hash Algorithms',
      description: 'Generate MD5, SHA-1, SHA-256, and SHA-512 hashes all at once. Compare different algorithms side by side.',
    },
    {
      icon: <Zap size={32} />,
      title: 'Real-time Generation',
      description: 'Hashes are generated instantly as you type. No need to click a button or wait for processing.',
    },
    {
      icon: <Shield size={32} />,
      title: '100% Client-Side',
      description: 'All processing happens in your browser. Your data never leaves your device, ensuring complete privacy.',
    },
    {
      icon: <Copy size={32} />,
      title: 'One-Click Copy',
      description: 'Copy any hash to clipboard with a single click. Perfect for quick integration into your workflow.',
    },
    {
      icon: <Lock size={32} />,
      title: 'Secure Hashing',
      description: 'Uses industry-standard cryptographic libraries for accurate and secure hash generation.',
    },
    {
      icon: <RefreshCw size={32} />,
      title: 'Instant Results',
      description: 'No delays or loading times. Get your hashes immediately, even for large text inputs.',
    },
  ];

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1 className={styles.title}>Features</h1>
        <p className={styles.subtitle}>
          Powerful hash generation features for developers.
        </p>
      </section>

      <section className={styles.section}>
        <div className="glass-card">
          <div className={styles.grid}>
            {features.map((feature, index) => (
              <div key={index} style={{ padding: '20px' }}>
                <div style={{ color: 'var(--accent-primary)', marginBottom: '16px' }}>
                  {feature.icon}
                </div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.text}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

