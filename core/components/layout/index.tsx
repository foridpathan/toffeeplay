import React from "react";
import Footer from "./footer";
import Header from "./header";
import MobileNav from "./mobileNav";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <div className="2xl:pl-20">
        {children}
        <Footer />
      </div>
      <MobileNav />
    </>
  );
};

export default Layout;
