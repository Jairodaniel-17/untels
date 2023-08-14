import React from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";

export default function Pregrado() {
    return (
        <div>
            <Dropdown>
                <DropdownTrigger>
                    <Button color="primary" variant="flat">
                        Pregrado
                    </Button>
                </DropdownTrigger>
                <DropdownMenu color="primary" variant="flat">
                    <DropdownItem>Administración de Empresas</DropdownItem>
                    <DropdownItem>Ingeniería Ambiental</DropdownItem>
                    <DropdownItem>Ingeniería de Sistemas</DropdownItem>
                    <DropdownItem>Ingeniería Electrónica y Telecomunicaciones</DropdownItem>
                    <DropdownItem>Ingeniería Mecánica y Eléctrica</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    );
}
