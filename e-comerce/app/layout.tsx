import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "PRACTICE - NEXTJS - APP",
  description: "THIS APP IS SOLELY MADE FOR THE PRACTICE OF CODE",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`antialiased min-h-full min-w-full bg-gray-700`}
    >
      <body className="flex flex-col">{children}</body>
    </html>
  );
}
