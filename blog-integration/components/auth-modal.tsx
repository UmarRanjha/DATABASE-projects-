"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { authStore } from "@/data/auth-store"

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
  onSuccess: (user: any) => void
  isSignup?: boolean
}

export default function AuthModal({ isOpen, onClose, onSuccess, isSignup = false }: AuthModalProps) {
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isSignupMode, setIsSignupMode] = useState(isSignup)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    try {
      let user
      if (isSignupMode) {
        user = authStore.signup(email, username, password)
      } else {
        user = authStore.login(email, password)
      }
      onSuccess(user)
      onClose()
      // Reset form
      setEmail("")
      setUsername("")
      setPassword("")
      setIsSignupMode(false)
    } catch (err: any) {
      setError(err.message)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{isSignupMode ? "Sign Up" : "Log In"}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          {isSignupMode && (
            <Input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          )}
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
            {isSignupMode ? "Sign Up" : "Log In"}
          </Button>
          <p className="text-center text-sm text-gray-600">
            {isSignupMode ? "Already have an account?" : "Don't have an account?"}{" "}
            <button
              type="button"
              onClick={() => setIsSignupMode(!isSignupMode)}
              className="text-blue-600 hover:underline"
            >
              {isSignupMode ? "Log In" : "Sign Up"}
            </button>
          </p>
        </form>
      </DialogContent>
    </Dialog>
  )
}
