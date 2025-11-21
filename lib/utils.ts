import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function createSlug(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')    // Hapus karakter aneh
    .replace(/[\s_-]+/g, '-')    // Ganti spasi dengan -
    .replace(/^-+|-+$/g, '');    // Hapus - di awal/akhir
}