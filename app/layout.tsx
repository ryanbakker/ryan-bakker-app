import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Web Developer",
  description: "Ryan Bakker a Web Developer in New Zealand",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#1D1D1D] text-white py-5 px-6">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
