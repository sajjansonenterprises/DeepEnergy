"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { FaHome, FaUser, FaCalendarAlt } from "react-icons/fa";
import Image from "next/image"; // ✅ Optimized Next.js Image
import { useBlogs } from "@/context/blogContext/BlogContext";
import Navbar from "@/app/home-component/Navbar";
import Footer from "@/app/ucomponent/Footer";
import { usePageData } from "@/context/pageContext/PageContext";
import Preloader from "@/app/ucomponent/Preloader";
import { useRouter } from "next/navigation";
import SearchBar from "@/app/search/components/Search/SearchBar";
import ReactMarkdown from 'react-markdown';
import rehypeRaw from "rehype-raw";
// ✅ Define Blog Interface (Handling `image` as an array)
interface Blog {
  slug: string;
  title: string;
  description?: string;
  content?: string;
  image?: { formats: { small?: { url: string }; medium?: { url: string } }
url?:string ;
alternativeText?:string;}; // ✅ Fixed: Image is now an array
  createdAt: string;
  category?: { categoryName: string };
  author?: string;
}

export default function BlogSlugComponent() {
  const { blogs, loading } = useBlogs(); // Fetch blogs from context
  const { slug } = useParams(); // ✅ Fix for Next.js 14
const [slugBackground,setSlugBackground]=useState('https://images.pexels.com/photos/1556704/pexels-photo-1556704.jpeg')
const router =useRouter()
// ✅ Explicit Type for useState Hooks
const [blog, setBlog] = useState<Blog | null>(null);
const [recentBlogs, setRecentBlogs] = useState<Blog[]>([]);
const {serverurl}=usePageData()
 useEffect(() => {
    const fetchSlugBg = async () => {
      try {
        const response = await fetch(`${serverurl}/api/blog-page?populate[slugBackground][populate]=*`);
        const data = await response.json();
        setSlugBackground(`${data?.data?.slugBackground.url}`);
      } catch (error) {
        console.error("Error fetching logo:", error);
      }
    };

    if (serverurl) fetchSlugBg();
  }, [serverurl]);

  useEffect(() => {
    if (!slug || !blogs || blogs.length === 0) return;

    // ✅ Ensure correct type when setting state
    const selectedBlog: Blog | null = blogs.find((b) => b.slug === slug) || null;
    setBlog(selectedBlog);

    setRecentBlogs(blogs.filter((b) => b.slug !== slug).slice(0, 5));
  }, [slug, blogs]);

  if (loading) {
    return <p className="text-center text-xl"><Preloader/></p>;
  }

  if (!blog) {
    return (
   <>
  {blog?( <div className="text-center py-20">
        <h1 className="text-3xl font-bold">Blog Not Found</h1>
        <p className="text-gray-500">We couldn&apos;t find the blog you were looking for.</p>
        <button onClick={()=>router.push("/blogs")} className="mt-6 bg-green-500 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-green-600">
          Back to Blogs
        </button>
      </div>):(<Preloader/>)}</> 
    );
  }

  return (
    <>{blog?(<div>
      <Navbar />

      {/* Breadcrumb Navigation */}
      <div className="relative w-full h-[300px] bg-cover bg-center flex items-center px-6 md:px-20"
        style={{ backgroundImage: `url(${slugBackground})`, backgroundColor: "rgb(27 26 26 / 32%)", backgroundBlendMode: "overlay" }}>
        <div className="absolute top-5 left-5 text-white text-sm flex items-center">
          <FaHome className="mr-2" />
          <button onClick={()=>router.push("/")} className="hover:underline">Home</button>
          <span className="mx-2">/</span>
          <button onClick={()=>router.push("/blogs")} className="hover:underline">Blogs</button>
          <span className="mx-2">/</span>
          <span className="text-gray-300">{blog.title}</span>
        </div>
        <h1 className="text-4xl font-bold text-white">{blog.title}</h1>
      </div>

      {/* Blog Content Section */}
      <section className="py-16 px-6 md:px-20 flex flex-col md:flex-row gap-10">
        {/* Left Side - Blog Content */}
        <div className="md:w-3/4 bg-white shadow-lg p-8 rounded-lg">
          {/* ✅ Fixed Image Handling (Mapping Over Images) */}
         
              <Image
               
                src={`${blog?.image?.url}`}
                alt={blog?.image?.alternativeText?? "biomass energy"}
                width={800}
                height={500}
                className="w-full h-96 object-cover rounded-lg"
              />
           
   

          {/* Blog Meta Data */}
          <div className="flex justify-between items-center mt-6 text-gray-600 text-sm">
            <div className="flex items-center">
              <span className="bg-green-500 text-white px-3 py-1 rounded-md text-xs">{blog.category?.categoryName || "General"}</span>
              <FaCalendarAlt className="ml-4 mr-2" />
              <span>{new Date(blog.createdAt).toDateString()}</span>
            </div>
            <div className="flex items-center">
              <FaUser className="mr-2" />
              <span>{blog.author || "Admin"}</span>
            </div>
          </div>

          {/* Blog Content */}
          <div className="prose prose-lg max-w-none text-gray-700">
<ReactMarkdown rehypePlugins={[rehypeRaw]}>
                {blog.content || "No content available."}
              </ReactMarkdown>     </div>   </div>

        {/* Right Sidebar */}
        <div className="md:w-1/4 space-y-6">
          {/* Search Bar */}
          <div className="bg-white shadow-lg p-4 rounded-lg flex items-center">
            <SearchBar/>
            
          </div>

          {/* Recent Blog List */}
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Recent Blogs</h3>
            <ul className="space-y-4">
              {recentBlogs.map((recent, index) => (
                <li key={index} className="flex items-center gap-3">
                  {/* ✅ Fixed Image Handling (Mapping Over Recent Blog Images) */}
                 
                      <Image
                
                        src={`${recent?.image?.formats?.medium?.url}`}
                        alt={recent.title}
                        width={80}
                        height={80}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                 
                  <div>
                    <button onClick={()=>router.push(`/blog/${recent.slug}`)} className="text-green-500 font-semibold hover:underline">
                      {recent.title}
                    </button>
                    <p className="text-gray-500 text-sm">{new Date(recent.createdAt).toDateString()}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <Footer/>
    </div>):(<Preloader/>)}</>
  );
}
