import NextAuth from "next-auth"
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
    providers: [
        GitHubProvider({
            clientId: "c4b8e75527db28d8953b",
            clientSecret: "d712f52f3a7576e000e36de6855bab48f36f70ed",
        }),
        GoogleProvider({
            clientId: "505092088941-m3mhh0cc2ha75tfuhu8ltn9fde01b871.apps.googleusercontent.com",
            clientSecret: "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",
        })
    ]
})

export { handler as GET, handler as POST }