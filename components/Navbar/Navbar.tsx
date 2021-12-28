import { Box, Flex, useBoolean } from "@chakra-ui/react";
import NavbarMenuToggle from "./NavbarMenuToggle";
import NavbarMenuLinks from "./NavbarMenuLinks";

export default function Navbar() {
    const [isOpen, setIsOpen] = useBoolean(false);

    return (
        <Flex
            justifyContent={"flex-start"}
            flexDirection={"column"}
            w={"100%"}
            mb={4}
        >
            <Box
                bg={"linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)"}
                h={4}
            />
            <Flex justifyContent={"center"}>
                <Flex
                    as="nav"
                    align="center"
                    justify={["flex-start", null, "center"]}
                    wrap="wrap"
                    maxW={"1200px"}
                    w={"100%"}
                    minH={14}
                >
                    <NavbarMenuToggle
                        toggle={setIsOpen.toggle}
                        isOpen={isOpen}
                    />
                    <NavbarMenuLinks isOpen={isOpen} />
                </Flex>
            </Flex>
        </Flex>
    );
}
