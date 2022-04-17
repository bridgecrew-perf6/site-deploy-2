/** @type {{images: {loaders: string[], formats: (string)[], domains: string[]}, assetPrefix: string, reactStrictMode: boolean}} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['2abf8861.site-deploy.pages.dev'],
        formats: ['image/avif', "image/webp"],
        loader: 'custom'
    },
    assetPrefix: './'
}

module.exports = nextConfig
