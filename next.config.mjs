import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const CANONICAL_ORIGIN = 'https://mlsoftware.com.br';

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Enables React <ViewTransition> (locale-switch crossfade).
    viewTransition: true
  },
  async redirects() {
    return [
      // mlsoftware.tech (and www) permanently moves to mlsoftware.com.br, preserving path.
      {
        source: '/:path*',
        has: [{ type: 'host', value: '(www\\.)?mlsoftware\\.tech' }],
        destination: `${CANONICAL_ORIGIN}/:path*`,
        statusCode: 301
      },
      // The personal experience page was removed; send old links to the locale's home.
      { source: '/:locale(en|es)/:slug(experience|experiencia)', destination: '/:locale', statusCode: 301 },
      { source: '/pt/:slug(experience|experiencia)', destination: '/', statusCode: 301 },
      { source: '/:slug(experience|experiencia)', destination: '/', statusCode: 301 },
      // Portuguese is now the unprefixed default; old /pt URLs move permanently.
      { source: '/pt', destination: '/', statusCode: 301 },
      { source: '/pt/:path*', destination: '/:path*', statusCode: 301 }
    ];
  }
};

export default withNextIntl(nextConfig);
