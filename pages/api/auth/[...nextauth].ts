import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import FacebookProvider from "next-auth/providers/facebook"

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID || "",
        clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
    }),
    FacebookProvider({
        clientId: process.env.FACEBOOK_CLIENT_ID || "",
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET || ""
    }),
    // EMAIL: NEED DB SO IN THE FUTURE WILL DO THIS
    // https://next-auth.js.org/configuration/providers/email
  ],

  // Callbacks are asynchronous functions you can use to control what happens when an action is performed.
  callbacks: {
    async signIn({ account, profile }) {
      if (account.provider === "google") {
        return profile.email_verified ? true : false // && profile.email.endsWith("@example.com")
      } else if (account.provider === "facebook") {
        return true
      }
      return true // Do different verification for other providers that don't have `email_verified`, true continues with sign In flow
    }
  },

  theme: {
    colorScheme: "auto", // "auto" | "dark" | "light"
    //brandColor: "", // Hex color code
    logo: "../../smolwafflenotext.svg", // Absolute URL to image
    //buttonText: "" // Hex color code
  }
})