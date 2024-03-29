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
        try {
          console.log(credentials)
          const res = await fetch('https://youtube-clone-dun-sigma.vercel.app/api/auth/auth', {
            method: 'POST',
            body: JSON.stringify(credentials),
            headers: { 'Content-Type': 'application/json' }
          })

          if (!res.ok) {
            throw new Error('Failed to authenticate')
          }

          const user = await res.json()
          console.log(user)
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
