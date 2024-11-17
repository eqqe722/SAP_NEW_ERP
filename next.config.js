/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['ar-IQ'],
    defaultLocale: 'ar-IQ',
  },
}

module.exports = nextConfig