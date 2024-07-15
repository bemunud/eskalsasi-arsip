import LogoNavbar from "./logo";
import ActionButtons from "./action-button";
import NavigationMenuDemo from "./navigation-bar";

export default function Navbar() {
  return (
    <nav className="container mx-auto flex items-center justify-between bg-inherit py-3">
      <LogoNavbar />
      <NavigationMenuDemo />
      <ActionButtons />
    </nav>
  );
}
