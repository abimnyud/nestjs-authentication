import * as bcrypt from 'bcrypt';
import { QueryFailedError } from 'typeorm';

/**
 * Generate hash from plain text
 * @param {string} plainTextPassword
 * @returns {string}
 */
export function generateHash(plainTextPassword: string): string {
  const saltRounds = 10;
  return bcrypt.hashSync(plainTextPassword, saltRounds);
}

/**
 * Validate plain text password with hash
 * @param {string} plainTextPassword
 * @param {string} hash
 * @returns {Promise<boolean>}
 */
export function validateHash(
  plainTextPassword: string | undefined,
  hash: string | undefined,
): Promise<boolean> {
  if (!plainTextPassword || !hash) {
    return Promise.resolve(false);
  }

  return bcrypt.compare(plainTextPassword, hash);
}
