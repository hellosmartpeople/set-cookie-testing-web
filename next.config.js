/**
 * @type {import('next').NextConfig}
 */
 const securityHeaders = [
    {
        key: 'Referrer-Policy',
        value: 'no-referrer'
      }
 ]

 const nextConfig = {
    /* config options here */
    async headers() {
        return [
          {
            // Apply these headers to all routes in your application.
            source: '/:path*',
            headers: securityHeaders,
          },
        ]
      },
  }
  
  module.exports = nextConfig