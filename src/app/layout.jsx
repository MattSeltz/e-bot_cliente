import { Roboto } from "next/font/google";

import "./globals.css";

export const metadata = {
  title: "E-Bot",
  description: "Cliente de E-Bot",
};

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "500", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${roboto.className}`}>{children}</body>
    </html>
  );
}
