"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { blogStore } from "@/data/blog-store"
import { authStore } from "@/data/auth-store"
import AuthModal from "@/components/auth-modal"
import type { Blog } from "@/data/blog-types"

interface PageProps {
  params: Promise<{ id: string }>
}

export default function BlogDetailPage({ params }: PageProps) {
  const [blog, setBlog] = useState<Blog | null>(null)
  const [user, setUser] = useState<any>(null)
  const [commentText, setCommentText] = useState("")
  const [authModalOpen, setAuthModalOpen] = useState(false)
  const [id, setId] = useState<string>("")

  useEffect(() => {
    ;(async () => {
      const resolvedParams = await params
      setId(resolvedParams.id)
      const foundBlog = blogStore.getBlogById(resolvedParams.id)
      setBlog(foundBlog || null)
      setUser(authStore.getCurrentUser())
    })()
  }, [params])

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault()

    if (!user) {
      setAuthModalOpen(true)
      return
    }

    if (!blog) return

    try {
      blogStore.addComment(blog.id, {
        text: commentText,
        author: user.username,
        authorId: user.id,
        date: new Date().toLocaleDateString(),
      })

      // Update blog state
      const updatedBlog = blogStore.getBlogById(blog.id)
      if (updatedBlog) setBlog(updatedBlog)
      setCommentText("")
    } catch (err: any) {
      console.error(err.message)
    }
  }

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Blog post not found</h1>
          <Link href="/blog">
            <Button className="bg-blue-600 hover:bg-blue-700">Back to Blogs</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <Link href="/blog" className="text-blue-600 hover:text-blue-700 font-semibold mb-6 inline-block">
            ← Back to Blogs
          </Link>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          {/* Featured Image */}
          <div className="mb-8 rounded-2xl overflow-hidden shadow-lg">
            <img src={blog.image || "/placeholder.svg"} alt={blog.title} className="w-full h-96 object-cover" />
          </div>

          {/* Header */}
          <div className="mb-8">
            <div className="inline-block bg-blue-600 text-white text-xs font-bold px-4 py-2 rounded-full mb-4">
              {blog.category}
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">{blog.title}</h1>
            <div className="flex items-center gap-4 text-gray-600">
              <span className="font-semibold">{blog.author}</span>
              <span>•</span>
              <span>{blog.date}</span>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-wrap">{blog.content}</p>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-300 my-12"></div>

          {/* Comments Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Comments</h2>

            {/* Comment Form */}
            <form onSubmit={handleAddComment} className="mb-8 bg-white p-6 rounded-2xl shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {user ? "Leave a Comment" : "Sign in to Comment"}
              </h3>
              <Textarea
                placeholder="Share your thoughts..."
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                className="mb-4 resize-none rounded-lg"
                rows={4}
                disabled={!user}
              />
              <div className="flex gap-2">
                <Button
                  type="submit"
                  disabled={!user || !commentText.trim()}
                  className={`${
                    user && commentText.trim() ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-400 cursor-not-allowed"
                  }`}
                >
                  Post Comment
                </Button>
                {!user && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setAuthModalOpen(true)}
                    className="border-blue-600 text-blue-600 hover:bg-blue-50"
                  >
                    Sign In to Comment
                  </Button>
                )}
              </div>
            </form>

            {/* Comments List */}
            <div className="space-y-6">
              {blog.comments.length === 0 ? (
                <p className="text-gray-500 italic">No comments yet. Be the first to comment!</p>
              ) : (
                blog.comments.map((comment) => (
                  <div key={comment.id} className="bg-white p-6 rounded-2xl shadow-md">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-bold text-gray-800">{comment.author}</span>
                      <span className="text-gray-500 text-sm">{comment.date}</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{comment.text}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </section>

      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        onSuccess={() => {
          setUser(authStore.getCurrentUser())
        }}
        isSignup={false}
      />
    </div>
  )
}
