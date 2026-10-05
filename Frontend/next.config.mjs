/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "codewiresolutions.com",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
