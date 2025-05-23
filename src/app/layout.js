import { ImageKitProvider } from '@imagekit/next';
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets : ["latin"]
});

export const metadata = {
  title: "Practical AI Examples",
  description: "Use of AI that can be done on production using Imagekit's AI and GenAI transformations",
};

export default function RootLayout({ children }) {
  return (
    <ImageKitProvider urlEndpoint='https://ik.imagekit.io/ikmedia/'>
      <html lang="en">
        <body
          className={`${roboto.variable} antialiased bg-white`}
        >
          {children}
        </body>
      </html>
    </ImageKitProvider>
  );
}
