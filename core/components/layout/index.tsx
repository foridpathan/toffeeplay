import React from "react";
import Header from "./header";
import Footer from "./footer";
import MobileNav from "./mobileNav";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <MobileNav />
    </>
  );
};

export default Layout;
