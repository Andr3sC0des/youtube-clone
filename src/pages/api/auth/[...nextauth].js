import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions = {
  debug: true,
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/auth/signin/identifier',
    error: '/auth/error'
  },
  providers: [
    CredentialsProvider({
      name: 'YoutubeClone',
      async authorize (credentials, req) {
        try {
          const res = await fetch(`${process.env.NEXTAUTH_URL}/api/auth/auth`, {
            method: 'POST',
            body: JSON.stringify(credentials),
            headers: { 'Content-Type': 'application/json' }
          })

          if (!res.ok) {
            throw new Error('Failed to authenticate')
          }

          const user = await res.json()
          return user
        } catch (error) {
          console.error(error)
          throw new Error('Authentication error: ' + error.message)
        }
      }
    })
  ]
}

export default NextAuth(authOptions)
