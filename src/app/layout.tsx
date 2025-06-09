import type { Metadata } from "next";
import { Chakra_Petch, Bungee, Istok_Web } from "next/font/google";
import LayoutWrapper from "./layoutWrapper";
import "./globals.css";

const chakraPetch = Chakra_Petch({
  variable: "--font-chakra-petch",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  style: ["normal", "italic"],
  fallback: ["sans-serif"],
  preload: true,
});

const bungee = Bungee({
  variable: "--font-bungee",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  style: ["normal"],
  fallback: ["cursive"],
  preload: true,
});

const istokWeb = Istok_Web({
  variable: "--font-istok-web",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  style: ["normal", "italic"],
  fallback: ["serif"],
  preload: true,
});

export const metadata: Metadata = {
  title: {
    template: "%s | Paul St.Germain | Software Engineer",
    default: "Paul St.Germain | Software Engineer",
  },
  description: "Portfolio of Paul St.Germain - a software engineer working on web apps with a focus on React, Next.js, TypeScript, and bringing fun back to the 'net.",
  creator: "Paul St.Germain",
  keywords: [
  "Software Engineer", "Portfolio", "React", "Next.js", "TypeScript", "Web Development", "JavaScript", "Node.js", "Express.js", "Frontend", "Backend", "Full Stack", "Web Apps", "UI/UX", "Developer", "Programming", "Coding", "Tech", "Technology", "Front End Engineer"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bungee.variable} ${istokWeb.variable} antialiased`}
      >
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}
