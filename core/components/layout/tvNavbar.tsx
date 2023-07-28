import Image from "next/image";
import Link from "next/link";

import { CgUser } from "react-icons/cg";
import { twMerge } from "tailwind-merge";
import logo from "../../../app/favicon.ico";
import { useTvRoute } from "../hooks/routeHook";

const TvNavbar = () => {
  const routes = useTvRoute();
  return (
    <>
      <div className="flex justify-between items-center flex-col h-[calc(100vh-30px)]">
        <div className="mb-5 flex items-center flex-col gap-5">
          <div className="pb-2 mb-2 border-b border-gray-600">
            <Link href="/">
              <Image src={logo} alt="Toffee" />
            </Link>
          </div>
          <ul className="flex flex-col gap-6">
            {routes.map((menu, i) => (
              <li key={i}>
                <Link
                  className={twMerge(
                    `transitions hover:bg-white hover:text-main rounded-md w-10 h-10 flex items-center justify-center`,
                    menu.active ? "bg-white text-main" : "text-white"
                  )}
                  href={menu.href}>
                  <menu.icon />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Link
          className={twMerge(
            `transitions hover:bg-white hover:text-main rounded-full w-10 h-10 flex items-center justify-center text-main bg-white`
          )}
          href={"/login"}>
          <CgUser />
        </Link>
      </div>
    </>
  );
};

export default TvNavbar;
