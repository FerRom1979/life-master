import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full bg-lightGray">
      <body className={inter.className}>
        <main className="">{children}</main>
      </body>
    </html>
  );
}
