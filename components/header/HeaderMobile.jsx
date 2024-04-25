import Link from "next/link";
import Image from "next/image";
import logo from "../../public/img/logo/logo_medialogis.png";
import logo2 from "../../public/img/logo/logo_medialogis_white.png";
const HeaderMobile = () => {
  return (
    <>
      <div className="logo">
        <Link href="/">
          <Image className="logo_light" src={logo} alt="brand" height={42} />
          <Image className="logo_dark" src={logo2} alt="brand" height={42} />
        </Link>
      </div>
      {/* End .logo */}
    </>
  );
};

export default HeaderMobile;
