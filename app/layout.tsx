import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;
library.add(fas);

export const metadata = {
  title: "Ryan Bakker - Web Developer",
  description: "Ryan Bakker a Web Developer in New Zealand",
};

// bg-gradient-to-tr from-[#0c0c0c] to-[#222222]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="text-white inter bg-[#1d1d1d]">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
