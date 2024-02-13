/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    additionalData: "@use '/src/shared/styles/base/index' as *;" // inject using scss variables and mixins into each file
  }
};

export default nextConfig;
