/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: 'build', 
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        issuer: /\.[jt]sx?$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              ref: true, 
            }
          },
        ],
      });

      return config;
    },
  };
  
  export default nextConfig;
  
