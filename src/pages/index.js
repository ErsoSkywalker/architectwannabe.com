import React, { useState } from "react";
import Layout from "./components/Layout";
import ArticleCard from "./components/ArticleCard";
const Home = () => {
  return (
    <Layout>
      <div className="w-full text-center text-6xl font-mono my-10 font-thin">
        Hello stranger! 👋
      </div>
      <div className="flex md:flex-row flex-col md:h-1/3 justify-between gap-4">
        <ArticleCard />
        <ArticleCard />
      </div>
    </Layout>
  );
};

export default Home;
