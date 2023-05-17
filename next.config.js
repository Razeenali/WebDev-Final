/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains: ["media.rawg.io"]
  },
  publicRuntimeConfig:{
    REACT_APP_KEY: '75e53d907c13453b8a917121e9f1d53f'
  }
}

module.exports = nextConfig
