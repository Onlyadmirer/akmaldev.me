import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { prisma } from "./prisma"
import { PrismaAdapter } from "@auth/prisma-adapter"

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [Google({
    clientId: process.env.AUTH_GOOGLE_ID,
    clientSecret: process.env.AUTH_GOOGLE_SECRET,
  })],

  callbacks: {
    async session({ session, user }) {
      if (session.user) {
        session.user.id = user.id
      }

      return session
    }
  }
})