/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'deeproot.com.au',
        pathname: '/wp-content/**',
      },
    ],
  },
};

export default nextConfig;
