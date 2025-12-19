import styles from '../Home.module.css';
import { Metadata } from 'next';
import { Mail, MessageSquare, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | Hash Generator',
  description: 'Get in touch with the Hash Generator team.',
  alternates: {
    canonical: 'https://www.hashgenerator.online/contact',
  },
};

export default function ContactPage() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1 className={styles.title}>Contact Us</h1>
        <p className={styles.subtitle}>Have questions or feedback? We'd love to hear from you.</p>
      </section>

      <section className={styles.section}>
        <div className="glass-card">
          <div className={styles.grid}>
            <div style={{ padding: '20px', textAlign: 'center' }}>
              <div style={{ color: 'var(--accent-primary)', marginBottom: '16px', display: 'flex', justifyContent: 'center' }}>
                <Mail size={48} />
              </div>
              <h3 className={styles.featureTitle}>Email Us</h3>
              <p className={styles.text}>
                <a href="mailto:connect@rivonixtech.com" style={{ color: 'var(--accent-primary)', fontSize: '1.125rem' }}>
                  connect@rivonixtech.com
                </a>
              </p>
            </div>
            <div style={{ padding: '20px', textAlign: 'center' }}>
              <div style={{ color: 'var(--accent-primary)', marginBottom: '16px', display: 'flex', justifyContent: 'center' }}>
                <Clock size={48} />
              </div>
              <h3 className={styles.featureTitle}>Response Time</h3>
              <p className={styles.text}>We typically respond within 24-48 hours.</p>
            </div>
          </div>
        </div>

        <div className="glass-card">
          <h2 className={styles.sectionTitle}>Get In Touch</h2>
          <div style={{ marginTop: '16px' }}>
            <a 
              href="mailto:connect@rivonixtech.com" 
              className="btn btn-primary"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}
            >
              <MessageSquare size={18} />
              Send us a message
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

