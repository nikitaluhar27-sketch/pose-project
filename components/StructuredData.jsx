export default function StructuredData({ pose, type = 'website' }) {
  if (type === 'pose' && pose) {
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: pose.title,
      description: pose.alt,
      image: pose.image,
      step: pose.steps.map((step, index) => ({
        '@type': 'HowToStep',
        position: index + 1,
        text: step,
      })),
      difficultyLevel: pose.difficulty,
      keywords: pose.tags.join(', '),
    };

    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    );
  }

  const websiteStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Photo Poses Platform',
    description: 'Professional photo poses guide with step-by-step instructions and body language tips',
    url: 'https://photoposes.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://photoposes.com/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteStructuredData) }}
    />
  );
}

