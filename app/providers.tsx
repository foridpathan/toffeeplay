"use client";
import Footer from "@/core/components/layout/footer";
import Header from "@/core/components/layout/header";
import { store } from "@/core/redux";
import React from "react";
import { Provider } from "react-redux";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <main>
        <Header />
        {children}
        <Footer />
      </main>
    </Provider>
  );
};

export default Providers;
