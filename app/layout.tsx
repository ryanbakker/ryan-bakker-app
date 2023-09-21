import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Ryan Bakker - Web Developer",
  description:
    "Discover a curated collection of cutting-edge web project applications meticulously crafted by Ryan Bakker. Explore innovative tools and solutions for your modern web development needs. Elevate your digital projects with our handpicked selection. Dive into the future of web development today",
  keywords: [
    "web",
    "project",
    "applications",
    "web",
    "development",
    "tools",
    "modern",
    "web",
    "apps",
    "Ryan",
    "Bakker",
    "curated",
    "collection",
    "cutting-edge",
    "solutions",
    "innovative",
    "web",
    "tools",
    "elevate",
    "digital",
    "projects",
    "future",
    "of",
    "web",
    "development",
  ],
  colorScheme: "dark",
  creator: "Ryan Bakker",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
