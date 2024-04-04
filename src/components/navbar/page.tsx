import LogoNavbar from "./logo";
import ActionButtons from "./action-button";
import NavigationMenuDemo from "./navigation-bar";

export default function Navbar() {
  return (
    <nav className="container bg-inherit items-center justify-between mx-auto py-3 flex">
      <LogoNavbar />
      <NavigationMenuDemo />
      <ActionButtons />
    </nav>
  );
}
