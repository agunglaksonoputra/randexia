import "@app/globals.css";

export const metadata = {
  title: "Randexia",
  description: "Random tools, simplified.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">{children}</body> */}
      <body>{children}</body>
    </html>
  );
}
