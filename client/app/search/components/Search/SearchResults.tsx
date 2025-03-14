import Navbar from '@/app/home-component/Navbar';
import Footer from '@/app/ucomponent/Footer';
import Link from 'next/link';
import { FaSearch, FaArrowRight } from 'react-icons/fa';

interface SearchResult {
  id: string;
  type: 'blog' | 'service' | 'project';
  title: string;
  slug: string;
  description?: string;
  content?: string;
  publishedAt?: string;
}

interface SearchResultsProps {
  results: SearchResult[];
  query: string;
}


export default function SearchResults({ results, query }: SearchResultsProps) {
  if (results.length === 0) {
    return (
      <div className="max-w-4xl mx-auto py-16 px-6 text-center min-h-[60vh] flex flex-col justify-center">
        <div className="mb-8">
          <FaSearch className="h-16 w-16 text-gray-300 mx-auto" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          No results for <span className="text-green-600">{`"${query}"`}</span>
        </h1>
        <p className="text-gray-500 text-lg mb-6">
          Try different keywords or check spelling
        </p>
        <div className="flex justify-center gap-3">
          <button 
            onClick={() => window.history.back()}
            className="px-6 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
  <><Navbar/>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          Results for <span className="text-green-600">{`"${query}"`}</span>
        </h1>
        <p className="text-gray-500 text-lg">
          Found {results.length} matching {results.length === 1 ? 'result' : 'results'}
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {results.map((result) => (
          <article
            key={result.id}
            className="relative bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 group"
          >
            <Link 
              href={`/${result.type}/${result.slug}`}
              className="block h-full p-6"
            >
              {/* Type Indicator */}
              <div className="mb-4 flex items-center gap-2">
                <span className={`px-3 py-1 rounded-full text-sm font-medium
                  ${result.type === 'blog' ? 'bg-blue-100 text-blue-800' : 
                    result.type === 'service' ? 'bg-green-100 text-green-800' :
                    'bg-purple-100 text-purple-800'}
                  `}>
                  {result.type.charAt(0).toUpperCase() + result.type.slice(1)}
                </span>
                {result.publishedAt && (
                  <time className="text-sm text-gray-500">
                    {new Date(result.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </time>
                )}
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                  {result.title}
                </h2>
                
                <p className="text-gray-600 line-clamp-3 leading-relaxed">
                  {result.type === 'blog' 
                    ? result.content?.replace(/<[^>]+>/g, '')
                    : result.description}
                </p>
              </div>

              {/* CTA */}
              <div className="mt-6 flex items-center justify-between">
                <span className="inline-flex items-center text-green-600 font-medium">
                  Read {result.type === 'blog' ? 'article' : 'more'}
                  <FaArrowRight className="ml-2 h-4 w-4" />
                </span>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div><Footer/></>
  );
}