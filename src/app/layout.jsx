import { Merriweather, Open_Sans } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import Navbar from "@/app/components/traditional/navbar";
import Footer from "@/app/components/traditional/footer";
import { ThemeProvider } from "@/app/contexts/theme-provider";

const merriweather = Merriweather({
  style: ["normal", "italic"],
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-merriweather",
});
const openSans = Open_Sans({
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-open-sans",
});

export const metadata = {
  title: "The Secrets Your SEO Agency Doesn't Want You To Know",
  description:
    "Find out about how SEO really works, and why you should stop paying for SEO work until you understand what you're paying for.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${openSans.className} ${merriweather.variable} ${openSans.variable}`}
      >
        <main className={"bg-white w-full mx-auto overflow-hidden"}>
          <ThemeProvider>{children}</ThemeProvider>
        </main>
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID} />
    </html>
  );
}
