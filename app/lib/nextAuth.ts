// lib/nextAuth.ts
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// Replace this with your real DB lookup
const users = [
  {
    id: "1",
    email: "client@example.com",
    password: "password123",
    name: "Client User",
    role: "client",
  },
  {
    id: "2",
    email: "admin@example.com",
    password: "password456",
    name: "Admin User",
    role: "admin",
  },
];

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(creds) {
        const user = users.find(
          (u) => u.email === creds?.email && u.password === creds?.password
        );
        return user ?? null;
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      // on first sign in, attach role to token
      if (user) token.role = (user as any).role;
      return token;
    },
    session({ session, token }) {
      // expose role on session.user
      (session.user as any).role = token.role;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
