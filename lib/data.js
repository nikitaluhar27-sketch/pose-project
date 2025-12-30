import posesData from '@/data/poses.json';

const data = posesData;

export function getAllCategories() {
  return Object.values(data.categories);
}

export function getCategory(categorySlug) {
  return data.categories[categorySlug] || null;
}

export function getNiche(categorySlug, nicheSlug) {
  const category = getCategory(categorySlug);
  if (!category) return null;
  return category.niches[nicheSlug] || null;
}

export function getPose(categorySlug, nicheSlug, poseId) {
  const niche = getNiche(categorySlug, nicheSlug);
  if (!niche) return null;
  return niche.poses.find(pose => pose.id === poseId) || null;
}

export function getAllPoses() {
  const allPoses = [];
  
  Object.entries(data.categories).forEach(([categorySlug, category]) => {
    Object.entries(category.niches).forEach(([nicheSlug, niche]) => {
      niche.poses.forEach(pose => {
        allPoses.push({ pose, category: categorySlug, niche: nicheSlug });
      });
    });
  });
  
  return allPoses;
}

export function searchPoses(query) {
  const lowerQuery = query.toLowerCase();
  return getAllPoses().filter(({ pose }) => 
    pose.title.toLowerCase().includes(lowerQuery) ||
    pose.tags.some(tag => tag.toLowerCase().includes(lowerQuery)) ||
    pose.alt.toLowerCase().includes(lowerQuery) ||
    pose.difficulty.toLowerCase().includes(lowerQuery)
  );
}

