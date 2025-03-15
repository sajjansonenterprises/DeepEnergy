"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import { useDebounce } from "../../hooks/useDebounce";
import Link from "next/link";
import { usePageData } from "@/context/pageContext/PageContext";

type ContentType = "blog" | "service" | "project";

interface SearchResult {
  id: string;
  type: ContentType;
  title: string;
  slug: string;
  description?: string;
  category?: string;
}

interface APIResponseItem {
  id: string;

    title?: string;
    Title?: string;
    slug: string;
    description?: string;
    category?: string;
  
}

export default function SearchBar() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const debouncedQuery = useDebounce(query, 300);
  const { serverurl } = usePageData();

  // ✅ Use useMemo to prevent re-creation of this array on every render
  const searchEndpoints = useMemo(
    () => [
      { type: "blog", path: "blogs", searchFields: ["title", "description"] },
      { type: "service", path: "services", searchFields: ["Title", "description"] },
      { type: "project", path: "projects", searchFields: ["title", "description"] },
    ],
    []
  );

  const fetchSuggestions = useCallback(
    async (searchTerm: string) => {
      setIsLoading(true);
      try {
        const promises = searchEndpoints.map(async ({ type, path, searchFields }) => {
          const filters = searchFields
            .map((field, index) => `filters[$or][${index}][${field}][$containsi]=${searchTerm}`)
            .join("&");

          const response = await fetch(`${serverurl}/api/${path}?${filters}&pagination[pageSize]=3`);
          const { data } = await response.json();

          return data.map((item: APIResponseItem) => ({
            id: item.id,
            type,
            title: item.title || item.Title || "Untitled",
            slug: item.slug,
            description: item.description,
            category: item.category,
          }));
        });

        const allResults = await Promise.all(promises);
        setResults(allResults.flat());
      } catch (error) {
        console.error("Search failed:", error);
      } finally {
        setIsLoading(false);
      }
    },
    [serverurl, searchEndpoints] // ✅ Now `searchEndpoints` is stable due to useMemo
  );

  useEffect(() => {
    if (debouncedQuery.length > 2) {
      fetchSuggestions(debouncedQuery);
    } else {
      setResults([]);
    }
  }, [debouncedQuery, fetchSuggestions]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`);
      setResults([]);
    }
  };

  const getResultPath = (result: SearchResult) => {
    switch (result.type) {
      case "blog":
        return `/blog/${result.slug}`;
      case "service":
        return `/service/${result.slug}`;
      case "project":
        return `/project/${result.slug}`;
      default:
        return "#";
    }
  };

  const getTypeBadge = (type: ContentType) => {
    const typeStyles = {
      blog: "bg-blue-100 text-blue-800",
      service: "bg-green-100 text-green-800",
      project: "bg-purple-100 text-purple-800",
    };

    return <span className={`px-2 py-1 text-xs rounded-full ${typeStyles[type]}`}>{type.charAt(0).toUpperCase() + type.slice(1)}</span>;
  };

  return (
    <form onSubmit={handleSearch} className="relative w-full max-w-xl">
      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Search articles, services, projects..."
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
          Search
        </button>
      </div>

      {isLoading && (
        <div className="absolute right-20 top-3">
          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-600"></div>
        </div>
      )}

      {results.length > 0 && (
        <div className="absolute z-50 w-full mt-2 bg-white border rounded-lg shadow-lg max-h-96 overflow-y-auto">
          {results.map((item) => (
            <Link
              key={`${item.type}-${item.id}`}
              href={getResultPath(item)}
              className="block px-4 py-3 hover:bg-gray-50 border-b last:border-0"
              onClick={() => setResults([])}
            >
              <div className="flex items-center justify-between mb-2">
                {getTypeBadge(item.type)}
                {item.category && <span className="text-sm text-gray-500">{item.category}</span>}
              </div>
              <h3 className="font-medium">{item.title}</h3>
              {item.description && <p className="text-sm text-gray-600 line-clamp-2">{item.description}</p>}
            </Link>
          ))}
        </div>
      )}
    </form>
  );
}
