import React from 'react';

export default function StructuredData() {
  const schoolData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Faith Community Baptist Complex Of Schools",
    "url": "https://faithcbs.org",
    "logo": "https://faithcbs.org/src/assets/Baptist Logo.png",
    "description": "Faith Community Baptist Complex Of Schools offers quality education from Nursery to Senior High School in a Christ-centered learning environment.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2 Common Street",
      "addressLocality": "Madina",
      "addressRegion": "Accra",
      "addressCountry": "GH"
    },
    "telephone": "0302501692",
    "email": "info@faithcbs.org",
    "sameAs": [
      "https://facebook.com/fcbcs",
      "https://twitter.com/fcbcs",
      "https://instagram.com/fcbcs"
    ],
    "offers": {
      "@type": "Offer",
      "category": "Education",
      "availabilityStarts": "2024-09-01",
      "availabilityEnds": "2025-06-30"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schoolData) }}
    />
  );
} 