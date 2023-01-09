import dynamic from "next/dynamic";
import Seo from "../components/Seo";
import HomeHorizontal from "../components/pages/home-horizontal";

const index = () => {
  return (
    <>
      <Seo pageTitle="MEDIALOGIS S.A" />
      <HomeHorizontal />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
