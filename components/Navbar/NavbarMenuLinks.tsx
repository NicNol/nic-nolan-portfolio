import React from "react";
import { Box, Stack, Collapse, useBreakpointValue } from "@chakra-ui/react";
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
        <Box
            flexBasis={{ base: "100%", md: "auto" }}
            bg={["#333", null, "none"]}
        >
            <Collapse in={isOpen} startingHeight={menuHeight}>
                <Stack
                    spacing={8}
                    align="center"
                    justify={["center", "center", "flex-end", "flex-end"]}
                    direction={["column", "column", "row", "row"]}
                    py={[4, 4, 0, 0]}
                    px={4}
                >
                    <MenuItem to="/">Home</MenuItem>
                    <MenuItem to="/how">How It Works</MenuItem>
                </Stack>
            </Collapse>
        </Box>
    );
}
