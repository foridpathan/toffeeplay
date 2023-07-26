import Image from "next/image";
import Link from "next/link";
import { CgUser } from "react-icons/cg";
import { HiSearch } from "react-icons/hi";
import logo from "../../../public/assets/images/toffee-icon.png";
import { TextInput } from "../ui/TextInput";
import Navbar from "./navbar";

const Header = () => {
  return (
    <div className="bg-main shadow sticky top-0 z-20">
      <div className="mx-auto py-4 px-6 lg:px-8 max-w-screen-2xl lg:grid gap-10 grid-cols-7 justify-between items-center">
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
          <Navbar />
          <Link className="text-subMain" href="/login">
            <CgUser className="w-8 h-8" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
