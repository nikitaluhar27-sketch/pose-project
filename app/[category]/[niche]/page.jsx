import { notFound } from 'next/navigation';
import { getNiche, getCategory } from '@/lib/data';
import MasonryGrid from '@/components/MasonryGrid';

export async function generateMetadata({ params }) {
  const { category, niche } = await params;
  const categoryData = getCategory(category);
  const nicheData = getNiche(category, niche);
  
  if (!categoryData || !nicheData) {
    return {
      title: 'Niche Not Found',
    };
  }

  return {
    title: `${nicheData.title} - ${categoryData.title} | Photo Poses Platform`,
    description: nicheData.description,
    alternates: {
      canonical: `https://photo-poses.vercel.app/${category}/${niche}`,
    },
  };
}

export default async function NichePage({ params }) {
  const { category, niche } = await params;
  const categoryData = getCategory(category);
  const nicheData = getNiche(category, niche);

  if (!categoryData || !nicheData) {
    notFound();
  }

  const poses = nicheData.poses.map(pose => ({
    pose,
    category,
    niche,
  }));

  return (
    <div className="min-h-screen py-12 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <nav className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            <a href="/" className="hover:text-indigo-600 dark:hover:text-indigo-400">Home</a>
            {' / '}
            <a href={`/${category}`} className="hover:text-indigo-600 dark:hover:text-indigo-400 capitalize">
              {categoryData.title}
            </a>
            {' / '}
            <span className="text-gray-900 dark:text-white">{nicheData.title}</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {nicheData.title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
            {nicheData.description}
          </p>
          <p className="text-gray-500 dark:text-gray-500">
            {poses.length} {poses.length === 1 ? 'pose' : 'poses'} available
          </p>
        </div>

        <MasonryGrid poses={poses} />
      </div>
    </div>
  );
}

