import React from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";

export default function Nosotros() {
    return (
        <div>
            <Dropdown>
                <DropdownTrigger>
                    <Button color="primary" variant="flat">
                        Nosotros
                    </Button>
                </DropdownTrigger>
                <DropdownMenu color="primary" variant="flat">
                    <DropdownItem>Nuestra Universidad</DropdownItem>
                    <DropdownItem>Autoridades</DropdownItem>
                    <DropdownItem>Oficinas v2</DropdownItem>
                    <DropdownItem>Documentos de Gestión</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    );
}
