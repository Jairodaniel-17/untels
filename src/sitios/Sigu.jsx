import React from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";

export default function Admision() {
    return (
        <div>
            <Dropdown>
                <DropdownTrigger>
                    <Button color="warning" variant="shadow" className="capitalize">
                        Sigu
                    </Button>
                </DropdownTrigger>
                <DropdownMenu color="warning" variant="shadow">
                    <DropdownItem>Sigu Docente</DropdownItem>
                    <DropdownItem>Sigu Alumno</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    );
}
