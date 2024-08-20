import { Inter } from "next/font/google";
import { config } from "@/helpers/config";
import "@/styles/index.scss";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
