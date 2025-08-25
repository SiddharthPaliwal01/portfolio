import { useEffect } from 'react';

interface SEOData {
  title?: string;
  description?: string;
  keywords?: string;
  author?: string;
  url?: string;
  image?: string;
  type?: string;
}

const useMetaTags = (seoData: SEOData) => {
  useEffect(() => {
    const {
      title = "Siddharth Paliwal - Full Stack Developer & AI/ML Engineer",
      description = "Experienced Full Stack Developer specializing in AI/ML, React, Node.js, and modern web technologies. Available for freelance projects and collaboration.",
      keywords = "Siddharth Paliwal, Full Stack Developer, AI/ML Engineer, React Developer, Node.js, TypeScript, Machine Learning, Web Development, Portfolio",
      author = "Siddharth Paliwal",
      url = window.location.href,
      image = "/profile-picture.png",
      type = "website"
    } = seoData;

    // Update document title
    document.title = title;

    // Create or update meta tags
    const metaTags = [
      { name: 'description', content: description },
      { name: 'keywords', content: keywords },
      { name: 'author', content: author },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: 'robots', content: 'index, follow' },
      { name: 'language', content: 'en' },
      { name: 'revisit-after', content: '7 days' },
      
      // Open Graph tags
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:type', content: type },
      { property: 'og:url', content: url },
      { property: 'og:image', content: image },
      { property: 'og:site_name', content: 'Siddharth Paliwal Portfolio' },
      { property: 'og:locale', content: 'en_US' },
      
      // Twitter Card tags
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image },
      { name: 'twitter:creator', content: '@siddharthpaliwal' },
      
      // Additional SEO tags
      { name: 'theme-color', content: '#3b82f6' },
      { name: 'msapplication-TileColor', content: '#3b82f6' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
    ];

    metaTags.forEach(({ name, property, content }) => {
      const selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`;
      let metaTag = document.querySelector(selector) as HTMLMetaElement;
      
      if (!metaTag) {
        metaTag = document.createElement('meta');
        if (name) metaTag.name = name;
        if (property) metaTag.setAttribute('property', property);
        document.head.appendChild(metaTag);
      }
      
      metaTag.content = content;
    });

    // Add canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = url;

    // Add JSON-LD structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Siddharth Paliwal",
      "jobTitle": "Full Stack Developer & AI/ML Engineer",
      "description": description,
      "url": url,
      "image": image,
      "sameAs": [
        "https://github.com/SiddharthPaliwal01",
        "https://linkedin.com/in/siddharthpaliwal01",
        "https://leetcode.com/u/SiddharthPaliwal",
        "https://geeksforgeeks.org/user/siddharthpa521r"
      ],
      "knowsAbout": [
        "JavaScript",
        "TypeScript",
        "React",
        "Node.js",
        "Python",
        "Machine Learning",
        "Artificial Intelligence",
        "Web Development",
        "Full Stack Development"
      ],
      "alumniOf": {
        "@type": "Organization",
        "name": "Educational Institution"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "paliwalsiddharth4@gmail.com",
        "contactType": "professional"
      }
    };

    let structuredDataScript = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement;
    if (!structuredDataScript) {
      structuredDataScript = document.createElement('script');
      structuredDataScript.type = 'application/ld+json';
      document.head.appendChild(structuredDataScript);
    }
    structuredDataScript.textContent = JSON.stringify(structuredData);

  }, [seoData]);
};

export default useMetaTags;
