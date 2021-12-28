import React from "react";
import {
    Stack,
    StackDivider,
    Collapse,
    useBreakpointValue,
    Flex,
} from "@chakra-ui/react";
import MenuItem from "./NavbarMenuItem";

interface NavbarMenuLinksProps {
    isOpen: boolean;
}

export default function NavbarMenuLinks({ isOpen }: NavbarMenuLinksProps) {
    const menuHeight = useBreakpointValue({
        base: 0,
        sm: 0,
        md: "100%",
    });

    return (
        <Flex
            flexBasis={{ base: "100%", md: "auto" }}
            bg={["#333", null, "none"]}
            h={["inherit", null, 10]}
            justifyContent={"center"}
        >
            <Collapse in={isOpen} startingHeight={menuHeight}>
                <Stack
                    justify={"center"}
                    direction={["column", "column", "row", "row"]}
                    px={4}
                    align={"center"}
                >
                    <MenuItem to="/">Home</MenuItem>
                    <MenuItem to="/">About</MenuItem>
                    <MenuItem to="/">Portfolio</MenuItem>
                    <MenuItem to="/">Resume</MenuItem>
                </Stack>
            </Collapse>
        </Flex>
    );
}
