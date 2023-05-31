import { SiAmazongames as AppLogo } from "react-icons/si";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to='/'>
      <AppLogo size={"3em"} />
    </Link>
  );
};

export default Logo;
