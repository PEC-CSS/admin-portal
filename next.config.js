/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BACKEND: process.env.BACKEND
  }
}

module.exports = nextConfig
