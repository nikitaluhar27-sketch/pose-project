
import Link from 'next/link';
import Image from 'next/image';
  


export default function CategoryCard({ category, slug }) {
  const nicheCount = Object.keys(category.niches).length;
  const totalPoses = Object.values(category.niches).reduce(
    (sum, niche) => sum + niche.poses.length,
    0
  );

  // Get the first image from the first pose in the first niche
  const firstNiche = Object.values(category.niches)[0];
  const firstPose = firstNiche?.poses[0];
  const imageUrl = firstPose?.image || '/default-pose.jpg';
  const imageAlt = firstPose?.alt || category.title;
  const canonicalUrl = `https://photo-poses.vercel.app/${slug}`;

  return (
    <Link href={`/${slug}`} className="group block" rel="canonical" data-canonical={canonicalUrl}>
      <div className="relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
        <div className="relative h-64 bg-indigo-600 overflow-hidden">
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-4xl font-bold text-white drop-shadow-lg">
              {category.title}
            </h2>
          </div>
        </div>
        <div className="p-6">
          <p className="text-gray-600 dark:text-gray-300 mb-4">{category.description}</p>
          <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
            <span>{nicheCount} {nicheCount === 1 ? 'niche' : 'niches'}</span>
            <span>{totalPoses} {totalPoses === 1 ? 'pose' : 'poses'}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

