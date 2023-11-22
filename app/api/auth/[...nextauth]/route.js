import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            id: "login-form",
            name: "login",
            credentials: {
                "username": {
                    label: "User name",
                    type: "text",
                    placeholder: "Enter your valid username",
                },
                "password": {
                    label: "Password",
                    type: "password",
                    placeholder: "Enter your password",
                }
            },
            async authorize(credentials, req) {
                const user = { id: "1", email: "test1234@example.com", "fullName": "Test Test", "contact" : "9999999999" }
                console.log("credentials ",credentials)
                if (credentials.username === "Test1234" && credentials.password === "Test@1234") {
                    return user
                } else {
                    return null
                }
            }
        }),
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