import express from 'express'
import passport from 'passport'
import { Strategy as GoogleStrategy } from 'passport-google-oauth20'
import { Strategy as LocalStrategy } from 'passport-local'
import session from 'express-session'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

// Middleware
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://salahmart.vercel.app', 'https://salahmart.netlify.app'] 
    : 'http://localhost:5173',
  credentials: true
}))
app.use(express.json())
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { 
    secure: process.env.NODE_ENV === 'production', // HTTPS in production
    sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax'
  }
}))
app.use(passport.initialize())
app.use(passport.session())

// Mock user database (replace with real database in production)
const users = [
  {
    id: '1',
    name: 'Demo User',
    email: 'demo@example.com',
    password: 'password123',
  }
]

// Passport Local Strategy
passport.use(new LocalStrategy(
  { usernameField: 'email' },
  (email, password, done) => {
    const user = users.find(u => u.email === email && u.password === password)
    if (user) {
      const { password, ...userWithoutPassword } = user
      return done(null, userWithoutPassword)
    }
    return done(null, false, { message: 'Invalid email or password' })
  }
))

// Passport Google Strategy
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "/auth/google/callback"
}, (accessToken, refreshToken, profile, done) => {
  // Check if user already exists in database
  let user = users.find(u => u.googleId === profile.id)
  
  if (user) {
    return done(null, user)
  } else {
    // Create new user
    const newUser = {
      id: `${users.length + 1}`,
      googleId: profile.id,
      name: profile.displayName,
      email: profile.emails[0].value,
      avatar: profile.photos[0].value
    }
    users.push(newUser)
    return done(null, newUser)
  }
}))

// Serialize/Deserialize user
passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser((id, done) => {
  const user = users.find(u => u.id === id)
  done(null, user)
})

// Routes

// Local login
app.post('/auth/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) return next(err)
    if (!user) return res.status(401).json({ error: info.message })
    
    req.logIn(user, (err) => {
      if (err) return next(err)
      return res.json({ user, success: true })
    })
  })(req, res, next)
})

// Local register
app.post('/auth/register', (req, res) => {
  const { name, email, password } = req.body
  
  // Check if user exists
  const existingUser = users.find(u => u.email === email)
  if (existingUser) {
    return res.status(400).json({ error: 'User with this email already exists' })
  }
  
  // Create new user
  const newUser = {
    id: `${users.length + 1}`,
    name,
    email,
    password // In production, hash this password!
  }
  users.push(newUser)
  
  // Log in the user
  req.logIn(newUser, (err) => {
    if (err) return res.status(500).json({ error: 'Login failed' })
    const { password, ...userWithoutPassword } = newUser
    return res.json({ user: userWithoutPassword, success: true })
  })
})

// Google OAuth routes
app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
)

app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    // Successful authentication, redirect to frontend
    res.redirect('http://localhost:5173/?auth=success')
  }
)

// Get current user
app.get('/auth/user', (req, res) => {
  if (req.isAuthenticated()) {
    res.json({ user: req.user, isAuthenticated: true })
  } else {
    res.json({ user: null, isAuthenticated: false })
  }
})

// Logout
app.post('/auth/logout', (req, res) => {
  req.logout((err) => {
    if (err) return res.status(500).json({ error: 'Logout failed' })
    res.json({ success: true })
  })
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})