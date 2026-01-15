import FeatureNavbar from "./FeatureNavbar";
import MainNavbar from "./MainNavbar";

export default function Navbar({ variant = "main", ...props }) {
  const NAV = {
    main: MainNavbar,
    feature: FeatureNavbar,
  };

  const Component = NAV[variant] || MainNavbar;
  return <Component {...props} />;
}
