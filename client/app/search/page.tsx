"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import SearchResults from "@/app/search/components/Search/SearchResults";
import { usePageData } from "@/context/pageContext/PageContext";
import Preloader from "../ucomponent/Preloader";

interface SearchResult {
  id: string;
  type: "blog" | "service" | "project";
  title: string;
  slug: string;
  content?: string;
  description?: string;
  publishedAt?: string;
}

interface APIResponseItem {
  id: string;
  attributes: {
    title?: string;
    Title?: string;
    slug: string;
    content?: string;
    description?: string;
    publishedAt?: string;
  };
}

function SearchPageContent() {
  const searchParams = useSearchParams(); // ✅ Moved inside client component
  const { serverurl } = usePageData();
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const query = searchParams.get("q") || "";

  useEffect(() => {
    if (!query || query.trim().length < 3) {
      setLoading(false);
      return;
    }

    const fetchResults = async () => {
      try {
        setLoading(true);

        // Define search endpoints
        const endpoints = [
          {
            type: "blog",
            url: `${serverurl}/api/blogs?filters[$or][0][title][$containsi]=${query}&filters[$or][1][content][$containsi]=${query}&populate=*`,
          },
          {
            type: "service",
            url: `${serverurl}/api/services?filters[$or][0][Title][$containsi]=${query}&filters[$or][1][description][$containsi]=${query}&populate=*`,
          },
          {
            type: "project",
            url: `${serverurl}/api/projects?filters[$or][0][title][$containsi]=${query}&filters[$or][1][description][$containsi]=${query}&populate=*`,
          },
        ];

        // Fetch all results
        const responses = await Promise.all(
          endpoints.map(async (endpoint) => {
            const response = await fetch(endpoint.url);
            if (!response.ok) throw new Error(`Failed to fetch ${endpoint.type}`);
            return response.json();
          })
        );

        // Transform results
        const combinedResults: SearchResult[] = responses.flatMap((response, index) => {
          const type = endpoints[index].type;

          return response.data.map((item: APIResponseItem) => ({
            id: item.id,
            type,
            title: item.attributes.title || item.attributes.Title || "Untitled",
            slug: item.attributes.slug,
            content: type === "blog" ? item.attributes.content : undefined,
            description: type !== "blog" ? item.attributes.description : undefined,
            publishedAt: item.attributes.publishedAt,
          }));
        });

        setResults(combinedResults);
        setError("");
      } catch (err) {
        console.error("Search failed:", err);
        setError("Failed to load search results");
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [query, serverurl]);

  if (!query || query.trim().length < 3) {
    return <h1 className="p-4 text-center">Please enter at least 3 characters to search.</h1>;
  }

  if (loading) {
    return (
      <div className="p-4 text-center">
        <Preloader />
      </div>
    );
  }

  if (error) {
    return <h1 className="p-4 text-center text-red-500">{error}</h1>;
  }

  return <SearchResults results={results} query={query} />;
}

// ✅ Wrapping with Suspense for proper client-side handling
export default function SearchPage() {
  return (
    <Suspense fallback={<div className="p-4 text-center"><Preloader /></div>}>
      <SearchPageContent />
    </Suspense>
  );
}
