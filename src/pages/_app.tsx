import { Inter, Fira_Code } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-mono",
});

function MyApp({ Component, pageProps }) {
  return (
    <div className={`${inter.variable} ${firaCode.variable} antialiased`}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;

