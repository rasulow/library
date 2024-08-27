/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.module.rules.push({
          test: /\.node/,
          use: "raw-loader",
        });
    return config;
      },
      experimental: {
        // …
        serverComponentsExternalPackages: ['@react-pdf/renderer'],
      },
      images: {
        remotePatterns: [
          {
            protocol: 'http',
            hostname: '10.10.73.31',
            port: '4000',
            pathname: '/**',
          },
        ],
      },
};
export default  nextConfig;
