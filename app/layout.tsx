

import "./globals.css";

export const metadata = {
  title: "Metadrip Landing Page",
  description: "Landing page for Metadrip Agent",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
