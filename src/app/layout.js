import { Jost } from "next/font/google";
import { Toaster } from 'react-hot-toast';
import "../globals.css";

const inter = Jost({ subsets: ["latin"] });

export const metadata = {
  title: "PoyS Dev Studio",
  description: "Welcome to my blog",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster
         toastOptions={{className: "truncate"}} />
      </body>
    </html>
  );
}
