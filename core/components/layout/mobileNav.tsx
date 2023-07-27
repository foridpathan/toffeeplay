import Link from "next/link";
import { HiBars3 } from "react-icons/hi2";
import { twMerge } from "tailwind-merge";
import { useMobileRoute } from "../hooks/routeHook";

export default function MobileNav() {
  const routes = useMobileRoute();

  return (
    <footer className="lg:hidden fixed z-50 bottom-0 w-full px-1">
      <div className="bg-dry rounded-md flex justify-between w-full p-1">
        {routes.map((menu, i) => (
          <Link
            key={i}
            className={twMerge(
              `transitions text-2xl flex-colo hover:bg-white hover:text-main rounded-md px-4 py-3`,
              menu.active ? "bg-white text-main" : "text-white"
            )}
            href={menu.href}>
            <menu.icon />
          </Link>
        ))}
        <button className="transitions text-2xl flex-colo hover:bg-white hover:text-main text-white rounded-md px-4 py-3">
          <HiBars3 />
        </button>
      </div>
    </footer>
  );
}
