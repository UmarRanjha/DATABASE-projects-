// Simple in-memory auth store - can be replaced with database later
const users: Map<string, { email: string; username: string; password: string }> = new Map()
let currentUser: { id: string; email: string; username: string } | null = null

export const authStore = {
  signup: (email: string, username: string, password: string) => {
    if (users.has(email)) {
      throw new Error("Email already exists")
    }
    const id = Math.random().toString(36).substr(2, 9)
    users.set(email, { email, username, password })
    currentUser = { id, email, username }
    return { id, email, username }
  },

  login: (email: string, password: string) => {
    const user = users.get(email)
    if (!user || user.password !== password) {
      throw new Error("Invalid email or password")
    }
    const id = Array.from(users.entries())
      .findIndex(([key]) => key === email)
      .toString()
    currentUser = { id, email, username: user.username }
    return { id, email, username: user.username }
  },

  logout: () => {
    currentUser = null
  },

  getCurrentUser: () => currentUser,
}
