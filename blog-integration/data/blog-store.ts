import type { Blog, Comment } from "./blog-types"

// Simple in-memory blog store - can be replaced with database later
const blogs: Blog[] = [
  {
    id: "1",
    title: "Getting Started with Next.js",
    excerpt: "Learn the basics of Next.js and build your first application.",
    content:
      "Next.js is a React framework that enables you to build full-stack web applications. With features like server-side rendering, static site generation, and API routes...",
    author: "John Doe",
    authorId: "1",
    date: "2024-01-15",
    image: "/nextjs-logo.png",
    category: "Technology",
    comments: [],
  },
  {
    id: "2",
    title: "Understanding React Hooks",
    excerpt: "Deep dive into React Hooks and how to use them effectively.",
    content:
      "React Hooks are functions that let you use state and other React features in functional components. They were introduced in React 16.8 and have become essential...",
    author: "Jane Smith",
    authorId: "2",
    date: "2024-01-20",
    image: "/react-logo-abstract.png",
    category: "Development",
    comments: [],
  },
]

export const blogStore = {
  getBlogs: () => blogs,

  getBlogById: (id: string) => blogs.find((blog) => blog.id === id),

  createBlog: (blog: Omit<Blog, "id" | "comments">) => {
    const newBlog: Blog = {
      ...blog,
      id: Math.random().toString(36).substr(2, 9),
      comments: [],
    }
    blogs.push(newBlog)
    return newBlog
  },

  addComment: (blogId: string, comment: Omit<Comment, "id">) => {
    const blog = blogs.find((b) => b.id === blogId)
    if (!blog) throw new Error("Blog not found")
    const newComment: Comment = {
      ...comment,
      id: Math.random().toString(36).substr(2, 9),
    }
    blog.comments.push(newComment)
    return newComment
  },
}
