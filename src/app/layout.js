"use client";

import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { useRouter, usePathname } from "next/navigation";
import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { Inter } from "next/font/google";
import { Providers } from "@/components/Providers";
import { Footer } from "@/components/Footer";
import UserSyncProvider from "@/components/UserSyncProvider";
import LoadingSpinner from "@/components/LoadingSpinner";
import Navbar from "@/components/Navbar";
import AuthGuard from "@/components/AuthGuard";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const publicRoutes = [
  "/sign-in",
  "/sign-up",
  "/sign-in/factor-one",
  "/sign-up/continue",
  "/sso-callback",
  "/verify",
  "/reset-password",
  "/reset-password/confirm",
  "/onboarding",
];

export default function RootLayout({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const isAuthPage = publicRoutes.includes(pathname);

  function routerPush(to) {
    router.push(to);
  }

  return (
    <ClerkProvider
      navigate={(to) => routerPush(to)}
      afterSignOutUrl="/sign-in"
      signInUrl="/sign-in"
      signUpUrl="/sign-up"
      afterSignInUrl="/redirecting"
      afterSignUpUrl="/redirecting"
    >
      <Providers>
        <AuthGuard>
          <html lang="en" data-theme="light">
            <head>
              <link rel="icon" href="/favicon.png" sizes="any" />
            </head>
            <body
              className={`${inter.variable} antialiased flex flex-col min-h-screen`}
            >
              <UserSyncProvider>
                <Suspense fallback={<LoadingSpinner />}>
                  {isAuthPage ? (
                    <div className="min-h-screen flex items-center justify-center">
                      {children}
                    </div>
                  ) : (
                    <>
                      <div className="bg-gray-100">
                        <Navbar />
                      </div>
                      <main className="bg-gray-100 p-5">
                        <Toaster position="top-right" reverseOrder={false} />
                        {children}
                      </main>
                      <Footer />
                    </>
                  )}
                </Suspense>
              </UserSyncProvider>
            </body>
          </html>
        </AuthGuard>
      </Providers>
    </ClerkProvider>
  );
}
