
export default function sitemap() {
  const baseUrl = 'https://photo-poses.vercel.app/'; // Replace with your actual domain
  
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/search`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];

  // Add category pages
  Object.entries(posesData.categories).forEach(([categorySlug, category]) => {
    routes.push({
      url: `${baseUrl}/${categorySlug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    });

    // Add niche pages
    Object.entries(category.niches).forEach(([nicheSlug, niche]) => {
      routes.push({
        url: `${baseUrl}/${categorySlug}/${nicheSlug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      });

      // Add individual pose pages
      niche.poses.forEach(pose => {
        routes.push({
          url: `${baseUrl}/${categorySlug}/${nicheSlug}/${pose.id}`,
          lastModified: new Date(),
          changeFrequency: 'monthly',
          priority: 0.7,
        });
      });
    });
  });

  return routes;
}
