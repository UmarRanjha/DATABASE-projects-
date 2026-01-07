"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { blogStore } from "@/data/blog-store"

export default function CreateBlogPage() {
  const router = useRouter()

  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [contactName, setContactName] = useState("")
  const [contactEmail, setContactEmail] = useState("")
  const [city, setCity] = useState("")
  const [phone, setPhone] = useState("")
  const [aboutYourself, setAboutYourself] = useState("")
  const [category, setCategory] = useState("Technology")
  const [image, setImage] = useState("/blog-concept.png")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const countWords = (text: string) => {
    return text
      .trim()
      .split(/\s+/)
      .filter((word) => word.length > 0).length
  }

  const contentWordCount = countWords(content)
  const aboutWordCount = countWords(aboutYourself)
  const isContentValid = contentWordCount >= 600
  const isAboutValid = aboutWordCount <= 100

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setSuccess("")
    setIsSubmitting(true)

    if (
      !title.trim() ||
      !content.trim() ||
      !contactName.trim() ||
      !contactEmail.trim() ||
      !city.trim() ||
      !phone.trim() ||
      !aboutYourself.trim()
    ) {
      setError("Please fill in all required fields")
      setIsSubmitting(false)
      return
    }

    if (!isContentValid) {
      setError(`Blog content must have at least 600 words (currently ${contentWordCount} words)`)
      setIsSubmitting(false)
      return
    }

    if (!isAboutValid) {
      setError(`About yourself section must not exceed 100 words (currently ${aboutWordCount} words)`)
      setIsSubmitting(false)
      return
    }

    try {
      blogStore.createBlog({
        title,
        excerpt: aboutYourself,
        content,
        author: contactName,
        authorId: `author-${Date.now()}`,
        date: new Date().toLocaleDateString(),
        image,
        category,
      })

      setSuccess("Blog submitted successfully! Redirecting...")
      setTimeout(() => {
        router.push("/blog")
      }, 1500)
    } catch (err: any) {
      setError(err.message)
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Back Button */}
        <Link
          href="/blog"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors mb-8"
        >
          ← Back to Blogs
        </Link>

        {/* Main Card Container */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-blue-100">
          {/* Beautiful Header */}
          <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-8 md:px-12 py-16">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <h1 className="text-5xl md:text-6xl font-black text-white mb-3 text-pretty">Share Your Story</h1>
              <p className="text-xl text-blue-100 max-w-xl">
                Publish your insights, experiences, and ideas with our community of readers
              </p>
            </div>
          </div>

          {/* Form Section */}
          <div className="p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-10">
              {/* Blog Title Section */}
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-3 uppercase tracking-wide">
                  Blog Title <span className="text-red-500">*</span>
                </label>
                <Input
                  type="text"
                  placeholder="Enter an engaging title for your blog"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all text-base"
                  required
                />
              </div>

              {/* Blog Content Section */}
              <div>
                <div className="flex justify-between items-baseline mb-3">
                  <label className="block text-sm font-bold text-gray-900 uppercase tracking-wide">
                    Blog Content <span className="text-gray-500 font-normal text-xs">(min 600 words)</span>{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <span
                    className={`text-xs font-bold uppercase tracking-wide ${isContentValid ? "text-green-600" : "text-gray-400"}`}
                  >
                    {contentWordCount} Word(s)
                  </span>
                </div>
                <Textarea
                  placeholder="Write your blog content here... (minimum 600 words required)"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 resize-none transition-all text-base"
                  rows={14}
                  required
                />
              </div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

              {/* Contact Information Section */}
              <div>
                <h2 className="text-2xl font-black text-gray-900 mb-6 uppercase tracking-wide">Contact Information</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {/* Contact Name */}
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="text"
                      placeholder="Your full name"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                      required
                    />
                  </div>

                  {/* Contact Email */}
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="email"
                      placeholder="your.email@example.com"
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                      required
                    />
                  </div>

                  {/* City */}
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">
                      City <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="text"
                      placeholder="Your city"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                      required
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="tel"
                      placeholder="Your phone number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                      required
                    />
                  </div>
                </div>

                {/* About Yourself */}
                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <label className="block text-sm font-bold text-gray-900 uppercase tracking-wide">
                      About yourself <span className="text-gray-500 font-normal text-xs">(max 100 words)</span>{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <span
                      className={`text-xs font-bold uppercase tracking-wide ${aboutWordCount <= 100 ? "text-green-600" : "text-red-600"}`}
                    >
                      {aboutWordCount} Word(s)
                    </span>
                  </div>
                  <Textarea
                    placeholder="Tell us about yourself..."
                    value={aboutYourself}
                    onChange={(e) => setAboutYourself(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 resize-none transition-all"
                    rows={6}
                    required
                  />
                </div>
              </div>

              {/* Category Selection */}
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-3 uppercase tracking-wide">Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all text-base font-medium"
                >
                  <option>Technology</option>
                  <option>Development</option>
                  <option>Business</option>
                  <option>Lifestyle</option>
                  <option>Other</option>
                </select>
              </div>

              {/* Error Message */}
              {error && (
                <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded-xl animate-in">
                  <p className="text-red-700 font-bold text-sm">{error}</p>
                </div>
              )}

              {/* Success Message */}
              {success && (
                <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded-xl animate-in">
                  <p className="text-green-700 font-bold text-sm">{success}</p>
                </div>
              )}

              {/* Submit Button */}
              <div className="flex justify-end pt-8">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-10 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-lg rounded-xl shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 uppercase tracking-wide"
                >
                  {isSubmitting ? "Submitting..." : "Submit Blog"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
