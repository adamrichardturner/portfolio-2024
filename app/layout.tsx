import type { Metadata } from "next"
import { Inter, League_Spartan } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

const league = League_Spartan({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-league",
})

export const metadata: Metadata = {
  title: "Adam Richard Turner | Software Engineer",
  description:
    "Adam Richard Turner is a Software Engineer based in London skilled at crafting Front End UI for web applications",
  openGraph: {
    title: "Adam Richard Turner | Software Engineer",
    description:
      "Software Engineer based in London skilled at crafting Front End UI for web applications",
    images: "https://adamrichardturner.dev/adamturner-social.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className={`${inter.variable} ${league.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
