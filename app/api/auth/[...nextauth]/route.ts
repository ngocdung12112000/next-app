import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const handler = NextAuth({
    // session: {
    //     strategy: 'jwt',
    // },
    // pages: {
    //     signIn: '/login',
    // },
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials: any) {
                const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL as string;
                const loginUrl = `${baseUrl}/users/login`;
                const res = await fetch(loginUrl, {
                    method: 'POST',
                    body: JSON.stringify(credentials),
                    headers: { "Content-Type": "application/json" }
                })
                
                console.log("RES = ", res)
                const user = await res.json()
                console.log("USER = ", user)
                if (res.ok && user) {
                    console.log("HELLLOOO")
                    return {
                        email: credentials.email,
                        password: credentials.password
                    } as any
                }
                return null
            }
        })
    ],
});

export { handler as GET, handler as POST }
