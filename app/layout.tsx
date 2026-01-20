import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import ConvexClientProvider from "@/providers/ConvexProviderWithClerk";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Imma Royal Open University | Accredited Online Degrees in Florida & USA",
  description: "Advance your career with Imma Royal Open University of Florida. Offering world-class, flexible online degrees, expert faculty, and global accreditation. Join the future of royal education today.",
  keywords: ["Online University", "Higher Education USA", "Florida Open University", "Imma Royal", "Distance Learning"],
  openGraph: {
    title: "Empowering Your Royal Future | Imma Royal Open University",
    description: "World-class education, accessible anywhere. Start your journey with our accredited online programs.",
    url: "https://irouf.com", // Replace with your actual domain
    siteName: "Imma Royal Open University",
    images: [
      {
        url: "/og-image.jpg", // Create a professional banner with your logo
        width: 1200,
        height: 630,
        alt: "Imma Royal Open University Campus",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Imma Royal Open University of Florida USA",
    description: "Prestigious online degrees for global leaders.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <ConvexClientProvider>
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
    </ConvexClientProvider>
    </ClerkProvider>
  );
}
