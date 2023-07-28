import Image from "next/image";
import Link from "next/link";
import { CgUser } from "react-icons/cg";
import { HiSearch } from "react-icons/hi";
import { twMerge } from "tailwind-merge";
import logo from "../../../public/assets/images/toffee-icon.png";
import { useRoute } from "../hooks/routeHook";
import { TextInput } from "../ui/TextInput";

const Navbar = () => {
  const routes = useRoute();

  return (
    <>
      <div className="col-span-1 lg:block hidden">
        <Link href="/">
          <Image src={logo} alt="Toffee" />
        </Link>
      </div>
      <div className="col-span-2">
        <form className="w-full text-sm bg-dryGray rounded flex-btn gap-4">
          <TextInput rightIcon={HiSearch} />
        </form>
      </div>
      <div className="col-span-4 font-medium text-sm hidden xl:gap-8 2xl:gap-16 justify-between lg:flex xl:justify-end items-center">
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
        <Link className="text-subMain" href="/login">
          <CgUser className="w-8 h-8" />
        </Link>
      </div>
    </>
  );
};

export default Navbar;
