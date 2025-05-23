import Footer from "./_ui/Footer";
import Header from "./_ui/Header";
import "./global.css";
export const metadata = {
  title: {
    default: "Auth",
    template: "Auth | %s",
  },
  description: "Generated by Next.js",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
