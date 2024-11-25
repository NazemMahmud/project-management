import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "pm-s3-images.s3.us-east-2.amazonaws.com", // this is an example hostname, later will add the original path
                port: "",
                pathname: "/**",
            }
        ]
    }
};

export default nextConfig;