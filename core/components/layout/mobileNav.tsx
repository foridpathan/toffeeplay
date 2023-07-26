import Link from "next/link";
import { BsCollectionPlay } from "react-icons/bs";
import { CgUser } from "react-icons/cg";
import { HiBars3 } from "react-icons/hi2";
import { IoHomeOutline } from "react-icons/io5";
import { PiTelevisionSimpleBold } from "react-icons/pi";

export default function MobileNav() {
  return (
    <footer className="lg:hidden fixed z-50 bottom-0 w-full px-1">
      <div className="bg-dry rounded-md flex justify-between w-full p-1">
        <Link
          className="transitions text-2xl flex-colo hover:bg-white hover:text-main text-white rounded-md px-4 py-3"
          href="/movies">
          <BsCollectionPlay />
        </Link>
        <Link
          className="transitions text-2xl flex-colo hover:bg-white hover:text-main text-white rounded-md px-4 py-3"
          href="/live-tv">
          <div className="relative">
            <PiTelevisionSimpleBold />
          </div>
        </Link>
        <Link
          className="transitions text-2xl flex-colo hover:bg-white hover:text-main text-white rounded-md px-4 py-3"
          href="/">
          <div className="relative">
            <IoHomeOutline />
          </div>
        </Link>
        <Link
          className="transitions text-2xl flex-colo hover:bg-white hover:text-main text-white rounded-md px-4 py-3"
          href="/login">
          <CgUser />
        </Link>
        <button className="transitions text-2xl flex-colo hover:bg-white hover:text-main text-white rounded-md px-4 py-3">
          <HiBars3 />
        </button>
      </div>
    </footer>
  );
}
