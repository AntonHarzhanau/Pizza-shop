import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatPrice = (value: number): string => {
  const normalized = Number.isFinite(value) ? value : 0;
  return normalized.toFixed(2);
};
