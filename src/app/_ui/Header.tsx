"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navlinks = [
  {
    href: "/",
    text: "Home",
  },
  {
    href: "/marketing",
    text: "Marketing",
  },
  {
    href: "/products",
    text: "Products",
  },
  {
    href: "/login",
    text: "Login",
  },
  {
    href: "/register",
    text: "Register",
  },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <div
      className="bg-purple-600 min-h-20 flex items-center justify-center 
    text-white text-center"
    >
      <div className="flex gap-4 ml-4">
        {navlinks.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Link
              style={{
                padding: "10px 20px",
              }}
              className={isActive ? "font-bold" : "text-gray-100"}
              href={link.href}
              key={link.href}
            >
              {link.text}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
