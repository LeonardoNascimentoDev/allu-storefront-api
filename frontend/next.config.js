/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  ...nextConfig,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/catalog/all',
        permanent: true,
      },
    ]
  },
  images: {
    domains: [
      "imgur.com",
      "i.imgur.com",
      "fakestoreapi.com",
      "v2-allugator-images.s3.amazonaws.com",
      "yacare-products-image.s3.sa-east-1.amazonaws.com",
    ],
  },
};
