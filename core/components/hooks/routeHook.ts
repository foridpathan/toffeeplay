"use client";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { BsCollectionPlay } from "react-icons/bs";
import { CgUser } from "react-icons/cg";
import { IoHomeOutline } from "react-icons/io5";
import { PiTelevisionSimpleBold } from "react-icons/pi";

export const useRoute = () => {
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
  return routes;
};

export const useMobileRoute = () => {
  const pathname = usePathname();
  const routes = useMemo(
    () => [
      {
        label: "Movies",
        href: "/movies",
        active: pathname === "/movies",
        icon: BsCollectionPlay,
      },
      {
        label: "Live TV",
        href: "/live-tv",
        icon: PiTelevisionSimpleBold,
        active: pathname === "/live-tv",
      },
      {
        label: "Home",
        href: "/",
        icon: IoHomeOutline,
        active: pathname === "/",
      },
      {
        label: "Login",
        href: "/login",
        icon: CgUser,
        active: pathname === "/login",
      },
    ],
    [pathname]
  );
  return routes;
};
