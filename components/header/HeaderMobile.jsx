import Link from "next/link";
import Image from "next/image";
import logo from "../../public/img/svg/logo.svg";

const HeaderMobile = () => {
  return (
    <>
      <div className="logo">
        <Link href="/">
          <Image className="logo_light" src={logo} alt="brand" height={42} />
        </Link>
      </div>
      {/* End .logo */}
    </>
  );
};

export default HeaderMobile;
