import styles from '../Home.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hash Examples | Common Hash Use Cases',
  description: 'Examples of hash generation and common use cases for MD5, SHA-1, SHA-256, and SHA-512 hashes.',
  alternates: {
    canonical: 'https://www.hashgenerator.online/examples',
  },
};

export default function ExamplesPage() {
  const examples = [
    { input: 'hello', md5: '5d41402abc4b2a76b9719d911017c592', sha256: '2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824' },
    { input: 'password', md5: '5f4dcc3b5aa765d61d8327deb882cf99', sha256: '5e884898da28047d9167e1c6b0b90d06b8f6e05f0a8b0c77e0ab8f0a5d5dbd1c' },
    { input: 'test', md5: '098f6bcd4621d373cade4e832627b4f6', sha256: '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08' },
  ];

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1 className={styles.title}>Hash Examples</h1>
        <p className={styles.subtitle}>
          Common hash examples and use cases.
        </p>
      </section>

      <section className={styles.section}>
        <div className="glass-card">
          <h2 className={styles.sectionTitle}>Example Hashes</h2>
          <div style={{ display: 'grid', gap: '24px', marginTop: '20px' }}>
            {examples.map((example, index) => (
              <div key={index} style={{ padding: '16px', background: 'var(--bg-secondary)', borderRadius: '8px' }}>
                <div style={{ marginBottom: '12px' }}>
                  <strong style={{ color: 'var(--text-primary)' }}>Input:</strong>{' '}
                  <code style={{ color: 'var(--accent-primary)' }}>{example.input}</code>
                </div>
                <div style={{ marginBottom: '8px' }}>
                  <strong style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>MD5:</strong>
                  <div style={{ fontFamily: 'JetBrains Mono', fontSize: '0.75rem', color: 'var(--text-muted)', wordBreak: 'break-all' }}>{example.md5}</div>
                </div>
                <div>
                  <strong style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>SHA-256:</strong>
                  <div style={{ fontFamily: 'JetBrains Mono', fontSize: '0.75rem', color: 'var(--text-muted)', wordBreak: 'break-all' }}>{example.sha256}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card">
          <h2 className={styles.sectionTitle}>Common Use Cases</h2>
          <div className={styles.grid}>
            <div>
              <h3 className={styles.featureTitle}>File Integrity</h3>
              <p className={styles.text}>Verify file downloads haven't been corrupted or tampered with.</p>
            </div>
            <div>
              <h3 className={styles.featureTitle}>Password Storage</h3>
              <p className={styles.text}>Store password hashes instead of plain text (use with salt).</p>
            </div>
            <div>
              <h3 className={styles.featureTitle}>Data Deduplication</h3>
              <p className={styles.text}>Identify duplicate files or content using hash comparison.</p>
            </div>
            <div>
              <h3 className={styles.featureTitle}>Digital Signatures</h3>
              <p className={styles.text}>Create unique identifiers for data verification.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

