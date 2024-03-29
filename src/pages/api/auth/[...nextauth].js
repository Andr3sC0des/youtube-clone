import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/auth/signin/identifier',
    error: '/auth/error'
  },
  providers: [
    CredentialsProvider({
      name: 'YoutubeClone',
      async authorize (credentials, req) {
        const res = await fetch(`${process.env.NEXT_PUBLIC_HOST_URL}/api/auth/auth`, {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: { 'Content-Type': 'application/json' }
        })
        const user = await res.json()
        if (res.ok && user) {
          return user
        }
        return null
      }
    })
  ]
}

export default NextAuth(authOptions)
