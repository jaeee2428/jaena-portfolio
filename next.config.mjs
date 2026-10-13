/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // Old CV link keeps working after the rename.
    async redirects() {
        return [{ source: '/cv.pdf', destination: '/DeLaPena_PrincessJaenaCV.pdf', permanent: false }];
    },
};

export default nextConfig;
