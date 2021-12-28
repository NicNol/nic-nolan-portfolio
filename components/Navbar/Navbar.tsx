import { Box, Flex, useBoolean } from "@chakra-ui/react";
import NavbarLogo from "./NavbarLogo";
import NavbarMenuToggle from "./NavbarMenuToggle";
import NavbarMenuLinks from "./NavbarMenuLinks";

export default function Navbar() {
    const [isOpen, setIsOpen] = useBoolean(false);

    return (
        <Flex
            justifyContent={"center"}
            bg={"linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)"}
            boxShadow={"md"}
            w={"100%"}
            zIndex={"100"}
        >
            <Flex
                as="nav"
                align="center"
                justify={["flex-start", null, "center"]}
                wrap="wrap"
                maxW={"1200px"}
                w={"100%"}
                minH={14}
            >
                <NavbarMenuToggle toggle={setIsOpen.toggle} isOpen={isOpen} />
                <NavbarMenuLinks isOpen={isOpen} />
            </Flex>
        </Flex>
    );
}
