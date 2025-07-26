/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // App directory is now stable in Next.js 14
  },
  webpack: (config, { isServer }) => {
    config.resolve.alias.canvas = false;
    
    // Configurações para lidar com caminhos especiais
    config.resolve.symlinks = false;
    
    // Configuração para resolver problemas com caracteres especiais
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        os: false,
      };
    }
    
    return config;
  },
  // Configurações adicionais para estabilidade
  compiler: {
    removeConsole: false,
  },
}

module.exports = nextConfig