"use client";

import { useState, useEffect } from "react";
import Image from "next/image"; // ✅ Use Next.js Image for optimization
import { FaHome, FaArrowRight } from "react-icons/fa";
import Navbar from "../home-component/Navbar";
import { useBlogs } from "@/context/blogContext/BlogContext"; // Import the Blog Context
import { usePageData } from "@/context/pageContext/PageContext"; // ✅ Import Page Context
import Footer from "../ucomponent/Footer";
import Preloader from "../ucomponent/Preloader";
import { useRouter } from "next/navigation";


// ✅ Updated Blog Interface (categoryName is optional)
interface Blog {
  slug: string;
  title: string;
  description: string;
  image?: { formats: { small: { url: string } } }; // ✅ Ensure correct image structure
  createdAt: string;
  categoryName?: { categoryName: string }; // ✅ Make optional
  author?: string;
}
interface BlogPage {
BreadCrumbTitle:string;
title_description:{
  title:string;
  description:string
};
background:{url:string}
}

interface BlogContext {
  blogs?: Blog[]; // ✅ Ensure blogs is optional to prevent errors
  loading: boolean;
}


export default function BlogComponent() {
  const { blogs = [], loading } = useBlogs() as BlogContext; // ✅ Default empty array
  const { serverurl } = usePageData(); // ✅ Get Strapi URL from context
  const [pageData, setPageData] = useState<BlogPage | null>(null);
  const [error, setError] = useState("");
const router=useRouter()
  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;
  const totalPages = blogs.length > 0 ? Math.ceil(blogs.length / blogsPerPage) : 1;

  // ✅ Ensure `blogs` is an array before slicing
  const currentBlogs = Array.isArray(blogs)
    ? blogs.slice((currentPage - 1) * blogsPerPage, currentPage * blogsPerPage)
    : [];

  // ✅ Fetch Blog Page Data from Strapi
  useEffect(() => {
    fetch(`${serverurl}/api/blog-page?populate=*`) // ✅ Corrected URL
      .then((res) => res.json())
      .then((data) => setPageData(data?.data))
      .catch((err) => {
        console.error("Error fetching blog page data:", err);
        setError("Failed to load blog page.");
      });
  }, [serverurl]);

 
  if (error) return <div className="text-center py-10 text-red-500">{error}</div>;

  return (
    <>{pageData&&blogs.length>0?(<div>
      <Navbar />

      {/* Breadcrumb Section */}
      <div
        className="relative w-full h-[300px] bg-cover bg-center flex items-center justify-center text-center"
        style={{
          backgroundImage:
            `url(${pageData?.background?.url})`,
          backgroundColor: "rgb(27 26 26 / 32%)",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="absolute top-5 left-5 text-white text-sm flex items-center">
          <FaHome className="mr-2" />
          <button onClick={()=>router.push("/")} className="hover:underline">
            Home
          </button>
          <span className="mx-2">/</span>
          <span className="text-gray-300">
            {pageData?.BreadCrumbTitle || "Our Blogs"}
          </span>
        </div>
        <h1 className="text-4xl font-bold text-white">
          {pageData?.BreadCrumbTitle || "Our Blogs"}
        </h1>
      </div>

      {/* Blog Section */}
      <section className="py-20 px-6 md:px-20 text-center">
        <h2 className="text-4xl font-bold text-black">
          {pageData?.title_description?.title || "Latest News & Articles"}
        </h2>
        <p className="text-gray-600 mt-4">
          {pageData?.title_description?.description ||
            "Stay updated with the latest trends and insights in the industry."}
        </p>

        {loading ? (
          <p className="text-xl mt-10">Loading blogs...</p>
        ) : blogs.length === 0 ? (
          <p className="text-xl mt-10">No blogs available.</p>
        ) : (
          <>
            {/* Blogs Grid */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {currentBlogs.map((blog, index) => (
                <div
                  key={index}
                  className="w-full bg-white p-6 rounded-lg text-black shadow-lg flex flex-col hover:shadow-xl transition-all duration-300 relative"
                >
                  {/* Category Tag */}
                  {blog.categoryName?.categoryName && (
                    <span className="absolute top-2 left-2 bg-green-500 text-white px-3 py-1 rounded-md text-xs">
                      {blog.categoryName.categoryName}
                    </span>
                  )}

                  {/* Date and Author */}
                  <div className="flex justify-between text-gray-500 text-sm mb-2 mt-2">
                    <span>{new Date(blog.createdAt).toDateString()}</span>
                    <span>by {blog.author || "Admin"}</span>
                  </div>

                  {/* Blog Title */}
                  <h3 className="text-lg font-bold mb-2">{blog.title}</h3>

                  {/* Blog Image (✅ Fixed) */}
                  {blog.image?.formats?.small?.url && (
  <div className="relative w-full h-40">
    <Image
      src={`${blog.image.formats.small.url}`}
      alt={blog.title}
      fill
      className="object-cover rounded-md"
    />
  </div>
)}



                  {/* Description */}
                  <p className="text-gray-600 mb-4">
                    {blog.description?.slice(0, 100) || ""}...
                  </p>

                  {/* Read More Button */}
                  
                    <button onClick={()=>router.push(`/blog/${blog.slug}`)} className="mt-auto flex items-center bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600">
                      Read More <FaArrowRight className="ml-2" />
                    </button>
                
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-10 space-x-4">
              <button
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-6 py-2 rounded-md font-semibold text-white bg-gray-700 hover:bg-gray-600 flex items-center ${
                  currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                <FaArrowRight className="mr-2" /> Previous
              </button>
              <span className="text-lg font-semibold">
                {currentPage} / {totalPages}
              </span>
              <button
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-6 py-2 rounded-md font-semibold text-white bg-green-500 hover:bg-green-600 flex items-center ${
                  currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                Next <FaArrowRight className="ml-2" />
              </button>
            </div>
          </>
        )}
      </section>
      <Footer/>
    </div>):(<div><Preloader/></div>)}</>
  );
}
