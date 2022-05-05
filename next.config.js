/** @type {import('next').NextConfig} */

const path = require("path");

module.exports = (phase, { defaultConfig }) => {
  const nextConfig = {
    reactStrictMode: true,
  };

  if ("sassOptions" in defaultConfig) {
    defaultConfig["sassOptions"] = {
      includePaths: ["./src"],
      prependData: `@import "variables.scss";`,
    };
  }

  return {
    nextConfig,
    defaultConfig,
  };
};
