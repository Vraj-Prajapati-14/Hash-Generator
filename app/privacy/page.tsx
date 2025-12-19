import styles from '../Home.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Hash Generator',
  description: 'Privacy policy for Hash Generator. Learn how we handle your data and protect your privacy.',
  alternates: {
    canonical: 'https://www.hashgenerator.online/privacy',
  },
};

export default function PrivacyPage() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1 className={styles.title}>Privacy Policy</h1>
        <p className={styles.subtitle}>Last updated: December 2024</p>
      </section>

      <section className={styles.section}>
        <div className="glass-card">
          <h2 className={styles.sectionTitle}>Data Collection</h2>
          <p className={styles.text}>
            <strong>We do not collect, store, or transmit any data you enter.</strong> All hash 
            generation happens entirely in your browser (client-side). Your data never leaves your device.
          </p>
        </div>

        <div className="glass-card">
          <h2 className={styles.sectionTitle}>Analytics</h2>
          <p className={styles.text}>
            We may use anonymous analytics to understand usage patterns. No personal information is collected.
          </p>
        </div>

        <div className="glass-card">
          <h2 className={styles.sectionTitle}>Contact Us</h2>
          <p className={styles.text}>
            Questions? Contact us at:{' '}
            <a href="mailto:connect@rivonixtech.com" style={{ color: 'var(--accent-primary)' }}>
              connect@rivonixtech.com
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}

