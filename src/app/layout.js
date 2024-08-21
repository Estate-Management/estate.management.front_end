import { Poppins } from "next/font/google";
import { config } from "@/helpers/config";
import "@/styles/index.scss";
import Header from "@/components/common/header/Header";
import Footer from "@/components/common/footer/Footer";
import Spacer from "@/components/common/spacer";
import ScrollToTopButton from "@/components/scroll-to-top/scroll-to-top-button";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});
export const metadata = {
  title: {
    template: `%s | ${config.project.name}`,
    default: config.project.name,
  },
  description: config.project.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./favicon.png" sizes="any" />
        <link
          rel="icon"
          href="./icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href="./apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body className={poppins.className}>
        <Header />
        <Spacer height={10} />
        {children}
        <Spacer height={10} />
        <ScrollToTopButton />
        <Footer />
      </body>
    </html>
  );
}
