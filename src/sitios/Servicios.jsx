import React from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";

export default function DropdownExample() {
    return (
        <Dropdown>
            <DropdownTrigger>
                <Button color="primary" variant="flat">Servicios</Button>
            </DropdownTrigger>
            <DropdownMenu color="primary" variant="flat">
                <DropdownItem>Biblioteca</DropdownItem>
                <DropdownItem>Bolsa de Trabajo</DropdownItem>
                <DropdownItem>Centro Pre</DropdownItem>
                <DropdownItem>Certificados electrónicos</DropdownItem>
                <DropdownItem>Defensoría universitaria</DropdownItem>
                <DropdownItem>Directorio Institucional</DropdownItem>
                <DropdownItem>Directorio telefónico</DropdownItem>
                <DropdownItem>FUT</DropdownItem>
                <DropdownItem>Grado académico</DropdownItem>
                <DropdownItem>Mesas de partes</DropdownItem>
                <DropdownItem>OBU</DropdownItem>
                <DropdownItem>Promociones untelsinas</DropdownItem>
                <DropdownItem>Repositorio Insitucional</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )
}