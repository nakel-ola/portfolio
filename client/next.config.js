/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID,
    SANITY_TOKEN: process.env.SANITY_TOKEN,
    SANITY_DATASET: process.env.SANITY_DATASET,
    BASE_URL: process.env.BASE_URL
  },
};
