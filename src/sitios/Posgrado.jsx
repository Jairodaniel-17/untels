import React from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";

export default function Posgrado() {
    return (
        <Dropdown>
            <DropdownTrigger color="warning" variant="light">
                <Button>Posgrado</Button>
            </DropdownTrigger>
            <DropdownMenu color="warning" variant="flat">
                <DropdownItem>Presentación</DropdownItem>
                <DropdownItem>Estructura Orgánica</DropdownItem>
                <DropdownItem>Diplomados y cursos de especialización</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )
}