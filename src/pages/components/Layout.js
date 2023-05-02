import Head from "next/head";
import React from "react";
import Sidebar from "./Sidebar";
const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Christian Ontiveros</title>
      </Head>
      <div className="bg-white text-black flex flex-row relative">
        <Sidebar />
        <div className="p-5 w-full h-screen">{children}</div>
      </div>
    </>
  );
};

export default Layout;
