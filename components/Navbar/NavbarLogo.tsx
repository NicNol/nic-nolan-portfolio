import React from "react";
import { Box, Heading } from "@chakra-ui/react";

export default function NavbarLogo() {
    return (
        <Box>
            <Heading
                fontSize="2xl"
                fontWeight="bold"
                sx={{ textShadow: "2px 2px 0px rgba(0,0,0,0.2)" }}
                color={"#333"}
                py={2}
                px={4}
            >
                nn
            </Heading>
        </Box>
    );
}
