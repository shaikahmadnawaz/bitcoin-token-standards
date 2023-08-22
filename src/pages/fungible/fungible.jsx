import Intro from "../fungible/intro";
import Body from "../fungible/body";
import Methods from "./methods";
import Events from "./events";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Fungible = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Intro />
      <Body />
      <Methods />
      <Events />
    </>
  );
};

export default Fungible;
