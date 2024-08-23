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
      name: 'Credentials',
      async authorize (credentials, req) {
        const res = await fetch(`${process.env.NEXTAUTH_URL}/api/auth/auth`, {
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
  ],
  callbacks: {
    async session ({ session, token }) {
      if (token) session.user = token.user
      return session
    },
    async jwt ({ token, user }) {
      if (user) token.user = user
      return token
    }
  }
}

export default NextAuth(authOptions)
