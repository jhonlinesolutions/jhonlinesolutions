import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "consultoria de TI",
    "desenvolvimento de software",
    "cloud computing",
    "transformação digital",
    "segurança da informação",
    "JH Online Solutions",
  ],
  authors: [{ name: siteConfig.legalName }],
  creator: siteConfig.legalName,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${sora.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white text-ink-900">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: siteConfig.legalName,
              alternateName: siteConfig.name,
              url: siteConfig.url,
              email: siteConfig.email,
              telephone: siteConfig.phone,
              description: siteConfig.description,
              address: {
                "@type": "PostalAddress",
                streetAddress: `${siteConfig.address.street}, ${siteConfig.address.complement}`,
                addressLocality: siteConfig.address.city,
                addressRegion: siteConfig.address.state,
                postalCode: siteConfig.address.zip || undefined,
                addressCountry: "BR",
              },
              sameAs: Object.values(siteConfig.social),
            }),
          }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
