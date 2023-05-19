/* eslint-env node */
module.exports = {
  webpack(config) {
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.('.svg'),
    );

    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/,
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: /url/ },
        use: ['@svgr/webpack'],
      },
    );
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
  reactStrictMode: true,
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3.timeweb.com',
        port: '',
        pathname: '/41591949-c38f91aa-39f7-48e6-832c-c590ded4c690/**',
      },
    ],
  },
};
