import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getPose, getCategory, getNiche } from '@/lib/data';
import StructuredData from '@/components/StructuredData';

export async function generateMetadata({ params }) {
  const { category, niche, poseId } = await params;
  const categoryData = getCategory(category);
  const nicheData = getNiche(category, niche);
  const pose = getPose(category, niche, poseId);
  
  if (!categoryData || !nicheData || !pose) {
    return {
      title: 'Pose Not Found',
    };
  }

  return {
    title: `${pose.title} - ${nicheData.title} | Photo Poses Platform`,
    description: `Learn how to pose: ${pose.title}. ${pose.steps[0]}. Difficulty: ${pose.difficulty}.`,
    alternates: {
      canonical: `https://photo-poses.vercel.app/${category}/${niche}/${poseId}`,
    },
    openGraph: {
      images: [pose.image],
    },
  };
}

export default async function PosePage({ params }) {
  const { category, niche, poseId } = await params;
  const categoryData = getCategory(category);
  const nicheData = getNiche(category, niche);
  const pose = getPose(category, niche, poseId);

  if (!categoryData || !nicheData || !pose) {
    notFound();
  }

  return (
    <div className="min-h-screen py-12 bg-white dark:bg-gray-950">
      <StructuredData pose={pose} type="pose" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 dark:text-gray-400 mb-8">
          <Link href="/" className="hover:text-indigo-600 dark:hover:text-indigo-400">Home</Link>
          {' / '}
          <Link href={`/${category}`} className="hover:text-indigo-600 dark:hover:text-indigo-400 capitalize">
            {categoryData.title}
          </Link>
          {' / '}
          <Link href={`/${category}/${niche}`} className="hover:text-indigo-600 dark:hover:text-indigo-400">
            {nicheData.title}
          </Link>
          {' / '}
          <span className="text-gray-900 dark:text-white">{pose.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Section */}
          <div className="space-y-6">
            <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden shadow-2xl">
              <Image
                src={pose.image}
                alt={pose.alt}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {pose.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-200 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white">{pose.title}</h1>
                <span className="px-4 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium">
                  {pose.difficulty}
                </span>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-400">{pose.alt}</p>
            </div>

            {/* Step-by-Step Instructions */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
                Step-by-Step Instructions
              </h2>
              <ol className="space-y-4">
                {pose.steps.map((step, index) => (
                  <li key={index} className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-indigo-600 dark:bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </span>
                    <p className="text-gray-700 dark:text-gray-300 pt-1">{step}</p>
                  </li>
                ))}
              </ol>
            </div>

            {/* Body Language Tips */}
            <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Body Language Tips
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Posture</h3>
                  <p className="text-gray-700 dark:text-gray-300">{pose.bodyLanguage.posture}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Hands</h3>
                  <p className="text-gray-700 dark:text-gray-300">{pose.bodyLanguage.hands}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Expression</h3>
                  <p className="text-gray-700 dark:text-gray-300">{pose.bodyLanguage.expression}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Angle</h3>
                  <p className="text-gray-700 dark:text-gray-300">{pose.bodyLanguage.angle}</p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex gap-4">
              <Link
                href={`/${category}/${niche}`}
                className="flex-1 px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-center font-medium"
              >
                ← Back to {nicheData.title}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

