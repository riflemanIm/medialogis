import dynamic from "next/dynamic";
import Seo from "../../components/Seo";
import HomeHorizontalRtl from "../../components/pages/old/home-horizontal_rtl";

const index = () => {
  return (
    <>
      <Seo pageTitle="Medialogis Horizontal Rtl" />
      <HomeHorizontalRtl />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
