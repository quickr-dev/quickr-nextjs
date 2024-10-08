import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quickr NextJS image loader example",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        {children}
      </body>
    </html>
  );
}
