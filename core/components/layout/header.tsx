import Navbar from "./navbar";
import TvNavbar from "./tvNavbar";

const Header = () => {
  return (
    <div className="bg-main shadow sticky 2xl:fixed top-0 z-20">
      <div
        className="container mx-auto py-4 px-6 
      2xl:w-20 2xl:flex 2xl:flex-col 2xl:h-screen 2xl:px-2">
        <div className="hidden 2xl:block">
          <TvNavbar />
        </div>
        <div className="lg:px-8 lg:grid gap-10 grid-cols-7 justify-between items-center 2xl:hidden">
          <Navbar />
        </div>
      </div>
    </div>
  );
};

export default Header;
