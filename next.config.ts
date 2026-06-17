import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/index.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/admin.html",
        destination: "/dashboard",
        permanent: true,
      },
      {
        source: "/investor-dashboard.html",
        destination: "/dashboard",
        permanent: true,
      },
      {
        source: "/broker-desk.html",
        destination: "/dashboard",
        permanent: true,
      },
      {
        source: "/distillery-console.html",
        destination: "/dashboard",
        permanent: true,
      },
      {
        source: "/private-seller.html",
        destination: "/dashboard",
        permanent: true,
      },
      {
        source: "/marketplace.html",
        destination: "/products",
        permanent: true,
      },
      {
        source: "/portfolio.html",
        destination: "/owners",
        permanent: true,
      },
      {
        source: "/transactions.html",
        destination: "/owners",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;