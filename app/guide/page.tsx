import styles from '../Home.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hash Generator Guide | How to Generate Hashes',
  description: 'Complete guide on how to use hash functions. Learn about MD5, SHA-1, SHA-256, and SHA-512 hashing algorithms.',
  alternates: {
    canonical: 'https://www.hashgenerator.online/guide',
  },
};

export default function GuidePage() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1 className={styles.title}>Hash Generator Guide</h1>
        <p className={styles.subtitle}>
          Learn how to generate and use cryptographic hashes.
        </p>
      </section>

      <section className={styles.section}>
        <div className="glass-card">
          <h2 className={styles.sectionTitle}>What is a Hash Function?</h2>
          <p className={styles.text}>
            A hash function is a mathematical algorithm that converts input data of any size into 
            a fixed-size output (hash). Hash functions are one-way functions, meaning you cannot 
            reverse the process to get the original data from the hash.
          </p>
        </div>

        <div className="glass-card">
          <h2 className={styles.sectionTitle}>Supported Hash Algorithms</h2>
          <div className={styles.grid}>
            <div>
              <h3 className={styles.featureTitle}>MD5 (128-bit)</h3>
              <p className={styles.text}>Fast but considered cryptographically broken. Use only for checksums, not security.</p>
            </div>
            <div>
              <h3 className={styles.featureTitle}>SHA-1 (160-bit)</h3>
              <p className={styles.text}>Deprecated for security purposes. Still useful for non-security applications.</p>
            </div>
            <div>
              <h3 className={styles.featureTitle}>SHA-256 (256-bit)</h3>
              <p className={styles.text}>Recommended for most security applications. Part of the SHA-2 family.</p>
            </div>
            <div>
              <h3 className={styles.featureTitle}>SHA-512 (512-bit)</h3>
              <p className={styles.text}>Maximum security with larger output. Best for high-security requirements.</p>
            </div>
          </div>
        </div>

        <div className="glass-card">
          <h2 className={styles.sectionTitle}>How to Use This Tool</h2>
          <div className={styles.text}>
            <ol style={{ marginLeft: '20px', lineHeight: '2' }}>
              <li>Enter or paste your text in the input area</li>
              <li>All hash types are generated automatically in real-time</li>
              <li>Click the copy button next to any hash to copy it</li>
              <li>Use the Clear button to reset the input</li>
            </ol>
          </div>
        </div>
      </section>
    </div>
  );
}

