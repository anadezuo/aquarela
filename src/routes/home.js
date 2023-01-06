import React from "react";
import { useScrollToTop } from "hooks/scroll";
import HomePage from "components/pages/Home";

const Home = () => {
  useScrollToTop();
  return <HomePage />;
};

export default Home;
