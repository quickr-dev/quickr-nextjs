const productionUrl = 'https://next-image.quickr.dev'; // For Vercel use `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
const quickrUrl = 'https://quickr-cdn.quickr.dev'; // Replace with your subdomain

export default function loader({ src, width, quality }) {
  if (!shouldOptimize(src)) {
    return src;
  }

  if (src.startsWith("http")) {
    return quickrSrc(src, width, quality);
  }

  return quickrSrc(`${productionUrl}${src}`, width, quality);
}

function shouldOptimize() {
  const isProduction =
    process.env.VERCEL_ENV === "production" ||
    process.env.NODE_ENV === "production";

  return isProduction;
}

function quickrSrc(src, width, quality) {
  const params = [`width=${width}`];
  if (quality) params.push(`quality=${quality}`);

  return [quickrUrl, params.join(","), src].join("/");
}
