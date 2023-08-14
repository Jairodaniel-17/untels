import React from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";

export default function Admision() {
    return (
        <div>
            <Dropdown>
                <DropdownTrigger>
                    <Button color="warning" variant="light">
                        Admisión
                    </Button>
                </DropdownTrigger>
                <DropdownMenu color="warning" variant="flat">
                    <DropdownItem>Cronograma</DropdownItem>
                    <DropdownItem>Modalidades</DropdownItem>
                    <DropdownItem>Vacantes</DropdownItem>
                    <DropdownItem>Temario</DropdownItem>
                    <DropdownItem>Prospecto</DropdownItem>
                    <DropdownItem>Modelo de examen</DropdownItem>
                    <DropdownItem>Infórmate</DropdownItem>
                    <DropdownItem>Preguntas frecuentes</DropdownItem>
                    <DropdownItem>Contáctanos</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    );
}
