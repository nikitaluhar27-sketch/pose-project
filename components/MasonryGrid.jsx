'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

<head>
  <link rel="canonical" href="https://photo-poses.vercel.app">
</head>

export default function MasonryGrid({ poses, columns = 3 }) {
  const [columnCount, setColumnCount] = useState(columns);

  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth < 640) {
        setColumnCount(1);
      } else if (window.innerWidth < 1024) {
        setColumnCount(2);
      } else {
        setColumnCount(3);
      }
    };

    updateColumns();
    window.addEventListener('resize', updateColumns);
    return () => window.removeEventListener('resize', updateColumns);
  }, []);

  const getColumns = () => {
    const cols = Array.from(
      { length: columnCount },
      () => []
    );

    poses.forEach((item, index) => {
      cols[index % columnCount].push(item);
    });

    return cols;
  };

  const columnsData = getColumns();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
      {columnsData.map((column, colIndex) => (
        <div key={colIndex} className="flex flex-col gap-4">
          {column.map(({ pose, category, niche }) => (
            <Link
              key={pose.id}
              href={`/${category}/${niche}/${pose.id}`}
              className="group block"
            >
              <div className="relative overflow-hidden rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
                <div className="relative aspect-[3/4] w-full flex-shrink-0 overflow-hidden">
                  <Image
                    src={pose.image}
                    alt={pose.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-semibold text-lg mb-1">{pose.title}</h3>
                    <p className="text-sm text-white/90">{pose.difficulty}</p>
                  </div>
                </div>
                <div className="p-4 flex-1 flex flex-col gap-3">
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-tight">
                    {pose.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {pose.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-200 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}

