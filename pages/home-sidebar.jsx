import dynamic from "next/dynamic";
import Seo from "../components/Seo";
import HomeSidebar from "../components/pages/old/home-sidebar";

const index = () => {
  return <HomeSidebar />;
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
