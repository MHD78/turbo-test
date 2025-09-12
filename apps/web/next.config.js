/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/turbo-test' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/turbo-test' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
