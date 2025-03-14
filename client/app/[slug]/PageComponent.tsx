"use client";

import { usePageData } from "@/context/pageContext/PageContext";
import React, { useEffect, useState } from "react";
import Navbar from "../home-component/Navbar";
import { useParams, useRouter } from "next/navigation";
import Footer from "../ucomponent/Footer";
import { FaHome } from "react-icons/fa";
import Preloader from "../ucomponent/Preloader";

type PageData = {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  PageCode: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

const PageComponent: React.FC = () => {
  const { pageData, loading, error } = usePageData();
  const { slug } = useParams(); // ✅ Next.js 14 fix
  const [page, setPage] = useState<PageData | null>(null);
  const router = useRouter();
  const [showPage, setShowPage] = useState<boolean>(false); // ✅ Manage page visibility in state

  useEffect(() => {
    if (!slug || !pageData) return;

    const selectedPage = pageData.find((p) => p.slug === slug) || null;
    
    setPage(selectedPage);
    setShowPage(!!selectedPage); // ✅ Update state only when necessary
  }, [slug, pageData]);

  if (loading) return <Preloader />;
  if (error) return <div>{error}</div>;

  return (
    <>
      {showPage && page ? (
        <div>
          <Navbar />
          <h1>{page.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: page.PageCode || "" }} />
          <Footer />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center px-6">
          <h1 className="text-7xl font-bold text-green-500 animate-bounce">404</h1>
          <h2 className="text-3xl font-semibold mt-4">Oops! Page Not Found</h2>
          <p className="text-gray-600 mt-2 max-w-md">
            {`The page you're looking for doesn't exist or has been moved.`}
          </p>
          <button
            onClick={() => router.push('/')}
            className="mt-6 flex items-center bg-green-500 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-green-600 transition"
          >
            <FaHome className="mr-2" /> Go Home
          </button>
        </div>
      )}
    </>
  );
};

export default PageComponent;
