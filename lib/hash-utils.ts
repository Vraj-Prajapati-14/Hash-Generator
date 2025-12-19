/**
 * Utility functions for hash generation
 */

export type HashAlgorithm = 'MD5' | 'SHA1' | 'SHA256' | 'SHA512';

export interface HashResult {
    algorithm: HashAlgorithm;
    hash: string;
}

/**
 * Hash algorithm descriptions
 */
export const hashAlgorithmInfo: Record<HashAlgorithm, { name: string; bits: number; description: string }> = {
    MD5: {
        name: 'MD5',
        bits: 128,
        description: 'Message Digest Algorithm 5 - Fast but considered cryptographically broken. Use for checksums only.',
    },
    SHA1: {
        name: 'SHA-1',
        bits: 160,
        description: 'Secure Hash Algorithm 1 - Deprecated for security purposes. Use SHA-256 or higher instead.',
    },
    SHA256: {
        name: 'SHA-256',
        bits: 256,
        description: 'Secure Hash Algorithm 256-bit - Recommended for most security applications.',
    },
    SHA512: {
        name: 'SHA-512',
        bits: 512,
        description: 'Secure Hash Algorithm 512-bit - Maximum security, larger output size.',
    },
};

/**
 * Validates if a string is a valid hex hash
 */
export function isValidHexHash(hash: string, algorithm: HashAlgorithm): boolean {
    const expectedLength = hashAlgorithmInfo[algorithm].bits / 4;
    const hexRegex = /^[a-fA-F0-9]+$/;
    return hash.length === expectedLength && hexRegex.test(hash);
}

/**
 * Formats a hash string with optional grouping
 */
export function formatHash(hash: string, groupSize: number = 0): string {
    if (groupSize <= 0) return hash;
    
    const groups = [];
    for (let i = 0; i < hash.length; i += groupSize) {
        groups.push(hash.slice(i, i + groupSize));
    }
    return groups.join(' ');
}

