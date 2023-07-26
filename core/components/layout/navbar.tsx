"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { twMerge } from "tailwind-merge";

const Navbar = () => {
  const pathname = usePathname();
  const routes = useMemo(
    () => [
      {
        label: "Movies",
        href: "/movies",
        active: pathname === "/movies",
      },
      {
        label: "Live TV",
        href: "/live-tv",
        active: pathname === "/live-tv",
      },
      {
        label: "Contact Us",
        href: "#",
        active: false,
      },
    ],
    [pathname]
  );

  return (
    <>
      {routes.map((menu, i) => (
        <Link
          className={twMerge(
            `hover:text-subMain transitions `,
            menu.active ? "text-subMain" : "text-white"
          )}
          href={menu.href}
          key={i}>
          {menu.label}
        </Link>
      ))}
    </>
  );
};

export default Navbar;
