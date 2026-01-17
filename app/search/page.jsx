

import { searchPoses } from '@/lib/data';
import MasonryGrid from '@/components/MasonryGrid';
import SearchBar from '@/components/SearchBar';
<head>
  <link rel="canonical" href="https://photo-poses.vercel.app">
</head>


export async function generateMetadata({ searchParams }) {
  const { q } = await searchParams;
  const query = q || '';
  
  return {
    title: query ? `Search Results for "${query}" - Photo Poses Platform` : 'Search - Photo Poses Platform',
    description: query ? `Find photo poses matching "${query}"` : 'Search for photo poses by name, tags, or style',
  };
}

export default async function SearchPage({ searchParams }) {
  const { q } = await searchParams;
  const query = q || '';
  const results = query ? searchPoses(query) : [];

  return (
    <div className="min-h-screen py-12 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Search Poses
          </h1>
          <SearchBar />
        </div>

        {query ? (
          <>
            {results.length > 0 ? (
              <>
                <p className="text-gray-600 dark:text-gray-400 mb-8 text-center">
                  Found {results.length} {results.length === 1 ? 'pose' : 'poses'} matching &quot;{query}&quot;
                </p>
                <MasonryGrid poses={results} />
              </>
            ) : (
              <div className="text-center py-16">
                <svg
                  className="w-24 h-24 text-gray-400 dark:text-gray-600 mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                  No poses found
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Try searching with different keywords or browse our categories
                </p>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-16">
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Enter a search term to find poses
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

