import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getCategory } from '@/lib/data';

export async function generateMetadata({ params }) {
  const { category } = params;
  const categoryData = getCategory(category);

  if (!categoryData) {
    return {
      title: 'Category Not Found',
    };
  }

  const baseUrl = 'https://photo-poses.vercel.app';

  return {
    title: `${categoryData.title} - Photo Poses Platform`,
    description: categoryData.description,
    alternates: {
      canonical: `${baseUrl}/${category}`,
    },
  };
}

export default async function CategoryPage({ params }) {
  const { category } = params;
  const categoryData = getCategory(category);

  if (!categoryData) {
    notFound();
  }

  const niches = Object.entries(categoryData.niches);

  return (
    <div className="min-h-screen py-12 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {categoryData.title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {categoryData.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {niches.map(([nicheSlug, niche]) => {
            const totalPoses = niche.poses.length;
            const firstPoseImage = niche.poses[0]?.image || '/default-pose.jpg';
            const firstPoseAlt = niche.poses[0]?.alt || niche.title;

            return (
              <Link
                key={nicheSlug}
                href={`/${category}/${nicheSlug}`}
                className="group block"
              >
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="relative h-48 bg-indigo-600 overflow-hidden">
                    <Image
                      src={firstPoseImage}
                      alt={firstPoseAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h2 className="text-2xl font-bold text-white mb-1">
                        {niche.title}
                      </h2>
                      <p className="text-white/90 text-sm">
                        {totalPoses} {totalPoses === 1 ? 'pose' : 'poses'}
                      </p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 dark:text-gray-300">
                      {niche.description}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
