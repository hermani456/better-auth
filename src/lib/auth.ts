import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/db"; // your drizzle instance
import { nextCookies } from "better-auth/next-js";
import { schema } from "@/db/schema";
import { Resend } from "resend";
import UserVerificationEmail from "@/components/emails/verification-email";
import PasswordResetEmail from "@/components/emails/reset-email";

const resend = new Resend(process.env.RESEND_API_KEY);

interface AuthEmailProps {
    user: {
        email: string;
    };
    url: string;
}

export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "pg",
        schema,
    }),
    emailAndPassword: {
        enabled: true,
        sendResetPassword: async ({ user, url }: AuthEmailProps) => {
            await resend.emails.send({
                from: 'Restablecer tu contraseña <contact@diegocampuzano.dev>',
                to: [user.email],
                subject: "Restablecer tu contraseña",
                react: PasswordResetEmail({ userEmail: user.email, resetLink: url }),
            });
        },
    },
    emailVerification: {
        sendVerificationEmail: async ({ user, url }: AuthEmailProps) => {
            await resend.emails.send({
                from: 'Verificar dirección de correo electrónico <contact@diegocampuzano.dev>',
                to: [user.email],
                subject: 'Verificar dirección de correo electrónico',
                react: UserVerificationEmail({ userEmail: user.email, verificationUrl: url }),
            });
        },
        sendOnSignUp: true,
    },
    socialProviders: {
        google: { 
            clientId: process.env.GOOGLE_CLIENT_ID as string, 
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string, 
        }, 
    },
    plugins: [nextCookies()]
});