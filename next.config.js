/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ajukivxzgclzxkwneebs.supabase.co'
      }
    ]
  }
}

module.exports = nextConfig
