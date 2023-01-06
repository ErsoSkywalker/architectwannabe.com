import Head from "next/head";
import React from "react";
import Navbar from "../navbar/Navbar";
const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{`Christian's Blog | ${title}`}</title>
      </Head>
      <div className="h-screen w-screen bg-bone flex select-none overflow-x-hidden">
        <Navbar />
        <div className="h-full w-full">{children}</div>
      </div>
    </>
  );
};

export default Layout;
