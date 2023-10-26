import prisma from "@/app/lib/prisma";
import { Account, AuthOptions, Profile, Session, User } from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'
import { JWT } from "next-auth/jwt";
import NextAuth from "next-auth/next";

export const authOptions= {
    providers: [
        CredentialsProvider({
            name: 'credentials',
            
            credentials: {
                name: {
                    label: 'name',
                    type: 'text',
                    placeholder: 'Name'
                },
                email: {
                    label: 'Email',
                    type: 'text',
                    placeholder: 'your@email.com'
                },
                
                password: {
                    label: 'Password',
                    type: 'password'
                }
            },
            authorize: async (credentials) => {
                if(!credentials) {
                    return null;
                }

                const {name, email, password } = credentials;

                const user = await prisma.user.findUnique({
                    where: {
                        email
                    }
                });

                if(!user) {
                    return null;
                }

                const userPassword = user.passwordHash;

                const isValidPassword = bcrypt.compareSync(password, userPassword);

                if(!isValidPassword) {
                    return null;
                }

                return user;
            }
        })
    ],
    pages: {
        signIn: '/auth/signin',
        signOut: '/auth/signout',
    },
    secret: process.env.NEXTAUTH_SECRET,
    jwt: {
        async encode({secret, token}) {
            if(!token) {
                throw new Error('No token to encode');
            }
            return jwt.sign(token, secret);
        },
        async decode({secret, token}) {
            if(!token) {
                throw new Error('No token to decode');
            }
            const decodedToken = jwt.verify(token, secret);
            if(typeof decodedToken === 'string') {
                return JSON.parse(decodedToken);
            } else {
                return decodedToken;
            }
        }
    },
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60,
        updateAge: 24 * 60 * 60,
    },
    callbacks: {
        async session({session, token, user}) {
            if(user) {
                session.user.name = user.name;
                session.user.email = user.email;
            }

            return session;
        },
        async jwt(params) {
            if(params.user) {
                params.token.name = params.user.name;
                params.token.email = params.user.email;
            }

            return params.token;
        }
    }
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };