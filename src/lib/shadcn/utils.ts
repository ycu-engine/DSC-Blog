import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * ClassNameをTailwindCSSのクラス名の重複を防ぎつつマージする
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
