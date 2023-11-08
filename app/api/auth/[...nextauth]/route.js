import { authOptions } from "@/lib/auth";
import NextAuth from "next-auth";

const handler = NextAuth({
    providers: [
        GithubProvider({
            clientId: "c4b8e75527db28d8953b",
            clientSecret: "d712f52f3a7576e000e36de6855bab48f36f70ed",
        }),
    ],
});
export { handler as GET, handler as POST };