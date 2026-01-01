import posesData from '@/data/poses.js';

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
  return getAllPoses().filter(({ pose }) => {
    const title = (pose.title || '').toLowerCase();
    const alt = (pose.alt || '').toLowerCase();
    const difficulty = (pose.difficulty || '').toLowerCase();
    const tags = Array.isArray(pose.tags) ? pose.tags : [];

    return (
      title.includes(lowerQuery) ||
      alt.includes(lowerQuery) ||
      difficulty.includes(lowerQuery) ||
      tags.some(tag => (tag || '').toLowerCase().includes(lowerQuery))
    );
  });
}

