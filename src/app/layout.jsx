import { Merriweather, Open_Sans } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import Footer from "@/app/components/traditional/footer";
import { ThemeProvider } from "@/app/contexts/theme-provider";
import Script from "next/script";

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
  title: "The Secret Your SEO Agency Doesn't Want You To Know",
  description:
    "Find out about how SEO really works, and why you should stop paying for SEO work until you learn this.",
};

const PIXEL_ID = process.env.NEXT_PUBLIC_PIXEL_ID;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script id={"facebook-pixel"}>
          {`
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                    n.queue=[];t=b.createElement(e);t.async=!0;
                    t.src=v;s=b.getElementsByTagName(e)[0];
                    s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '${PIXEL_ID}');
                fbq('track', 'PageView');
                `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1132885104625537&ev=PageView&noscript=1"
          />
        </noscript>
      </head>
      <body
        className={`${openSans.className} ${merriweather.variable} ${openSans.variable} bg-grey-800`}
      >
        <main className={"bg-grey-800 h-full w-full mx-auto overflow-hidden"}>
          <ThemeProvider>{children}</ThemeProvider>
        </main>
        <Footer />
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID} />
    </html>
  );
}
