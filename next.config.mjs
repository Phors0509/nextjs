/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["cdn.dummyjson.com"],
    },
    redirects: async () => {
        return [
            {
                source: "/pageq",
                destination: "/",
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
