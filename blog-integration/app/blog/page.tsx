"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { blogStore } from "@/data/blog-store"
import type { Blog } from "@/data/blog-types"

export default function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([])

  useEffect(() => {
    setBlogs(blogStore.getBlogs())
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Latest Insights & News</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Stay updated with the latest trends in technology, development, and innovation.
          </p>
        </div>
      </section>

      {/* Auth Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-8 border-b border-blue-200">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div>
            <p className="text-gray-700 font-medium">Share your story with our community</p>
          </div>
          <Link href="/blog/create">
            <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold px-6 py-2 rounded-lg shadow-lg transition-transform hover:scale-105">
              Submit Your Blog
            </Button>
          </Link>
        </div>
      </section>

      {/* Blog Grid Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-cyan-100">
        <div className="container mx-auto px-4">
          {blogs.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg mb-4">No blogs yet. Be the first to share your story!</p>
              <Link href="/blog/create">
                <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white">
                  Write First Blog
                </Button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog) => (
                <BlogCard key={blog.id} {...blog} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

function BlogCard({ id, title, excerpt, date, image, category }: Blog) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 flex flex-col">
      <div className="relative h-56 overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
          {category}
        </div>
      </div>

      <div className="p-8 flex flex-col flex-grow">
        <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
          <span>{date}</span>
        </div>

        <h3 className="text-2xl font-bold text-gray-800 mb-4 leading-tight hover:text-blue-600 transition-colors">
          <Link href={`/blog/${id}`}>{title}</Link>
        </h3>

        <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">{excerpt}</p>

        <div className="mt-auto">
          <Link href={`/blog/${id}`} className="text-blue-600 font-bold inline-flex items-center gap-2 group">
            Read Full Article
            <span className="transition-transform group-hover:translate-x-2">→</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
