import styles from '../Home.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hash Algorithm Reference | Complete Guide',
  description: 'Complete reference for hash algorithms. Learn about MD5, SHA-1, SHA-256, SHA-512 and their properties.',
  alternates: {
    canonical: 'https://www.hashgenerator.online/reference',
  },
};

export default function ReferencePage() {
  const algorithms = [
    { name: 'MD5', bits: 128, hex: 32, security: 'Broken', speed: 'Fast', useCase: 'Checksums only' },
    { name: 'SHA-1', bits: 160, hex: 40, security: 'Weak', speed: 'Fast', useCase: 'Legacy systems' },
    { name: 'SHA-256', bits: 256, hex: 64, security: 'Strong', speed: 'Medium', useCase: 'General security' },
    { name: 'SHA-512', bits: 512, hex: 128, security: 'Very Strong', speed: 'Medium', useCase: 'High security' },
  ];

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1 className={styles.title}>Hash Algorithm Reference</h1>
        <p className={styles.subtitle}>
          Complete reference for cryptographic hash algorithms.
        </p>
      </section>

      <section className={styles.section}>
        <div className="glass-card">
          <h2 className={styles.sectionTitle}>Algorithm Comparison</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '16px' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--glass-border)' }}>
                  <th style={{ padding: '12px', textAlign: 'left', color: 'var(--text-secondary)' }}>Algorithm</th>
                  <th style={{ padding: '12px', textAlign: 'left', color: 'var(--text-secondary)' }}>Bits</th>
                  <th style={{ padding: '12px', textAlign: 'left', color: 'var(--text-secondary)' }}>Hex Length</th>
                  <th style={{ padding: '12px', textAlign: 'left', color: 'var(--text-secondary)' }}>Security</th>
                  <th style={{ padding: '12px', textAlign: 'left', color: 'var(--text-secondary)' }}>Use Case</th>
                </tr>
              </thead>
              <tbody>
                {algorithms.map((algo, index) => (
                  <tr key={index} style={{ borderBottom: '1px solid var(--glass-border)' }}>
                    <td style={{ padding: '12px', color: 'var(--accent-primary)', fontWeight: 600 }}>{algo.name}</td>
                    <td style={{ padding: '12px' }}>{algo.bits}</td>
                    <td style={{ padding: '12px' }}>{algo.hex}</td>
                    <td style={{ padding: '12px' }}>{algo.security}</td>
                    <td style={{ padding: '12px', color: 'var(--text-secondary)' }}>{algo.useCase}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="glass-card">
          <h2 className={styles.sectionTitle}>Security Recommendations</h2>
          <p className={styles.text}>
            For security-sensitive applications, always use SHA-256 or SHA-512. MD5 and SHA-1 are 
            considered cryptographically broken and should only be used for non-security purposes 
            like checksums or content identification.
          </p>
        </div>
      </section>
    </div>
  );
}

