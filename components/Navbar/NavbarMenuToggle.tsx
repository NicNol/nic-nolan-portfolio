import React from "react";
import { Box, Icon } from "@chakra-ui/react";
import { IoClose, IoMenu } from "react-icons/io5";

interface MenuToggleProps {
    toggle: any;
    isOpen: boolean;
}

export default function MenuToggle({ toggle, isOpen }: MenuToggleProps) {
    return (
        <Box
            display={{ base: "block", md: "none" }}
            onClick={toggle}
            py={2}
            px={4}
        >
            <Icon as={isOpen ? IoClose : IoMenu} color={"#333"} h={8} w={8} />
        </Box>
    );
}
