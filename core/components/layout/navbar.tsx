import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { useRoute } from "../hooks/routeHook";

const Navbar = () => {
  const routes = useRoute();

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
