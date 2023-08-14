import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import UntelsLogo from './LogoUntels.jsx'; // Cambia el nombre de la importación
import Nosotros from "./sitios/Nosotros.jsx";
import Admision from "./sitios/Admision.jsx";
import Pregrado from "./sitios/Pregrado.jsx";
import Posgrado from "./sitios/Posgrado.jsx";
import Servicios from "./sitios/Servicios.jsx";
import Sigu from "./sitios/Sigu.jsx";
export default function App() {
  return (
    <Navbar>
      <NavbarBrand>
        <UntelsLogo />
        <p className="font-bold text-inherit">
          <Link href="#" color="inherit">
            UNTELS
          </Link>
        </p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            <Nosotros />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            <Admision />
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            <Pregrado />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            <Posgrado />
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            <Servicios />
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Link href="#" aria-current="page">
            <Sigu />
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
