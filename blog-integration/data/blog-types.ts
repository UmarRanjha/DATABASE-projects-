export interface Blog {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  authorId: string
  date: string
  image: string
  category: string
  comments: Comment[]
}

export interface Comment {
  id: string
  text: string
  author: string
  authorId: string
  date: string
}

export interface User {
  id: string
  email: string
  username: string
  password: string
}
