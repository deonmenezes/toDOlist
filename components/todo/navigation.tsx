import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";
import { signOut } from "next-auth/react";
const Navigation = () => {
  const handleLogout = () => {
    signOut();
    window.location.href = 'http://localhost:3000/page'; // This will navigate to localhost:3000/page
  };

  return (
    <>
      <Navbar className="david">
        <NavbarBrand>
          <p className="font-bold text-inherit">FrytX</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" href="#">
              Features
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link aria-current="page" href="#">
              Customers
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Integrations
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Button color="primary" onClick={handleLogout}>
              LogOut
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </>
  );
};

export default Navigation;
