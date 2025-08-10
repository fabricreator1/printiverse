import { useEffect } from "react";

interface SEOProps {
  title: string;
  description?: string;
  canonical?: string;
  structuredData?: Record<string, any>;
}

const SEO = ({ title, description, canonical, structuredData }: SEOProps) => {
  useEffect(() => {
    document.title = title;

    const ensureMeta = (name: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", name);
        document.head.appendChild(meta);
      }
      return meta as HTMLMetaElement;
    };

    if (description) {
      const metaDesc = ensureMeta("description");
      metaDesc.setAttribute("content", description);
    }

    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (!link) {
        link = document.createElement("link");
        link.rel = "canonical";
        document.head.appendChild(link);
      }
      link.href = canonical;
    }

    const existing = document.getElementById("ldjson-printiverse");
    if (existing) existing.remove();
    if (structuredData) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = "ldjson-printiverse";
      script.text = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
  }, [title, description, canonical, structuredData]);

  return null;
};

export default SEO;
