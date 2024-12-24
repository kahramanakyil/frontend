const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return {
      fallback: [
        {
          source: '/api/:path*',
          destination: `http://cae-test-backend:8080/api/:path*`
        }
      ]
    }
  }
}

module.exports = nextConfig
