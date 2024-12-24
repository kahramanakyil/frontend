const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return {
      fallback: [
        {
          source: '/api/:path*',
          destination: `http://cae-test-backend/api/:path*`
        }
      ]
    }
  }
}

module.exports = nextConfig
