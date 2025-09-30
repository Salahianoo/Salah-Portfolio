import React, { useEffect, useState, createContext, useContext } from 'react'

const AuthContext = createContext(undefined)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [error, setError] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  // Check authentication status on initial render
  useEffect(() => {
    checkAuthStatus()
  }, [])

  const checkAuthStatus = async () => {
    try {
      const response = await fetch('http://localhost:3001/auth/user', {
        credentials: 'include'
      })
      const data = await response.json()
      if (data.isAuthenticated) {
        setUser(data.user)
        setIsAuthenticated(true)
      }
    } catch (error) {
      console.error('Auth check failed:', error)
    }
  }

  const login = async (email, password) => {
    setError(null)
    try {
      const response = await fetch('http://localhost:3001/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ email, password }),
      })

      const data = await response.json()
      
      if (response.ok && data.success) {
        setUser(data.user)
        setIsAuthenticated(true)
        return true
      } else {
        setError(data.error || 'Login failed')
        return false
      }
    } catch (error) {
      setError('Network error occurred')
      return false
    }
  }

  const register = async (name, email, password) => {
    setError(null)
    try {
      const response = await fetch('http://localhost:3001/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ name, email, password }),
      })

      const data = await response.json()
      
      if (response.ok && data.success) {
        setUser(data.user)
        setIsAuthenticated(true)
        return true
      } else {
        setError(data.error || 'Registration failed')
        return false
      }
    } catch (error) {
      setError('Network error occurred')
      return false
    }
  }

  const loginWithGoogle = () => {
    window.location.href = 'http://localhost:3001/auth/google'
  }

  const logout = async () => {
    try {
      await fetch('http://localhost:3001/auth/logout', {
        method: 'POST',
        credentials: 'include'
      })
      setUser(null)
      setIsAuthenticated(false)
    } catch (error) {
      console.error('Logout failed:', error)
      // Still clear local state even if server request fails
      setUser(null)
      setIsAuthenticated(false)
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        login,
        register,
        loginWithGoogle,
        logout,
        error,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
