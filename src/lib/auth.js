import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { Resend } from 'resend';

const client = new MongoClient(process.env.BETTER_AUTH_BD_URI);
const db = client.db('fitness');

const resend = new Resend(process.env.RESEND_API_KEY);

export const auth = betterAuth({
    emailAndPassword: { 
    enabled: true, 
    requireEmailVerification:true,
    sendResetPassword:async({user, url, token}) =>{
      void resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: user.email,
        subject:'Reset your password',
        html:`
        <h4>Reset your password</h4>
        <p>Click <a href="${url}">here</a> to reset your password.</p>
        <p> Ignore this email if you did not request a password reset.</p>
        `,
      })
    }
  }, 
  emailVerification: {
    sendVerificationEmail: async({user, url}) => {
      const {data, error} = await resend.emails.send({
        // from:'Acme <onboarding@resend.dev>',
        // to:user.email,
        from: 'Acme <onboarding@resend.dev>',
        to: user.email,
        subject: "Verify your email",
        html: `<p>Click <a href="${url}">here</a> to verify your email.</p>`,
      })
      console.log("Email sent:", data, error);
    },
    sendOnSignUp: true,
		autoSignInAfterVerification: true,
		expiresIn: 3600 *24 //1 day
  },
  socialProviders:{
    google: { 
            clientId: process.env.BETTER_AUTH_GOOGLE_CLIENT_ID, 
            clientSecret: process.env.BETTER_AUTH_GOOGLE_CLIENT_SECRET 
        },
  },
  database: mongodbAdapter(db, {
    // Optional: if you don't provide a client, database transactions won't be enabled.
    client
  }),
}); 