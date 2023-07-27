"use client";
import Layout from "@/core/components/layout";
import { store } from "@/core/redux";
import React from "react";
import { Provider } from "react-redux";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <main>
        <Layout>{children}</Layout>
      </main>
    </Provider>
  );
};

export default Providers;
