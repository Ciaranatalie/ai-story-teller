import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(process.cwd(), "src/styles")],
    padditionalData: `@import "./src/styles/global/"`,
  },
};

export default nextConfig;
