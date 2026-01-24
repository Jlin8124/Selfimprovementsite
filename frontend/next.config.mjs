// import type { NextConfig } from "next";
import {withContentlayer} from 'next-contentlayer';

/** @type {import('next').nextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

export default withContentlayer(nextConfig);