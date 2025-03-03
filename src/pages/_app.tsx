import { Inter, Fira_Code } from "next/font/google";
import "../styles/globals.css";
import { NextStudio } from "next-sanity/studio";  // Import NextStudio
import config from "../../sanity.config";  // Import config
import {AppProps} from "next/app";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-mono",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.variable} ${firaCode.variable} antialiased`}>
      {pageProps?.studio ? (
        <NextStudio config={config} />  // Show Sanity Studio when studio prop exists
      ) : (
        <Component {...pageProps} />  // Render the page component for the rest of the app
      )}
    </div>
  );
}

export default MyApp;

