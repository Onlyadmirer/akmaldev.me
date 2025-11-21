import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',  // Tambah ini untuk GitHub
        port: '',  // Opsional, kosongkan jika standar
        pathname: '/**',  // Allow semua path di hostname ini
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',  // Tambah ini untuk GitHub
        port: '',  // Opsional, kosongkan jika standar
        pathname: '/**',  // Allow semua path di hostname ini
      },
      {
        protocol: 'https',
        hostname: 'learn.wpucourse.id',  // Tambah ini untuk GitHub
        port: '',  // Opsional, kosongkan jika standar
        pathname: '/**',  // Allow semua path di hostname ini
      },
      {
        protocol: 'https',
        hostname: 'akmaldev.my.id',  // Tambah ini untuk GitHub
        port: '',  // Opsional, kosongkan jika standar
        pathname: '/**',  // Allow semua path di hostname ini
      },
    ],
  },
};

export default nextConfig;
