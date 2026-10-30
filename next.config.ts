import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cartão virtual de Jomar: página estática gerada no projeto cartao-virtual.
  async rewrites() {
    return [{ source: "/jomar", destination: "/jomar.html" }];
  },
};

export default nextConfig;
