import { Box, Flex } from "@chakra-ui/react";
import FooterNavStack from "./FooterNavStack";
import FooterNavHeader from "./FooterNavHeader";
import FooterNavLink from "./FooterNavLink";

export default function Footer() {
    return (
        <Flex direction={"column"} w={"100%"}>
            <Flex color={"#333333cc"} justifyContent={"center"} my={16} px={8}>
                <Flex justifyContent={"flex-start"} wrap={"wrap"}>
                    <FooterNavStack>
                        <FooterNavHeader>Navigation</FooterNavHeader>
                        <FooterNavLink>Home</FooterNavLink>
                        <FooterNavLink>About</FooterNavLink>
                        <FooterNavLink>Portfolio</FooterNavLink>
                        <FooterNavLink>Resume</FooterNavLink>
                    </FooterNavStack>
                    <FooterNavStack>
                        <FooterNavHeader>Projects</FooterNavHeader>
                        <FooterNavLink>Course Analytics</FooterNavLink>
                        <FooterNavLink>Boeing Speckle</FooterNavLink>
                        <FooterNavLink>Fource</FooterNavLink>
                        <FooterNavLink>String Primatives</FooterNavLink>
                    </FooterNavStack>
                    <FooterNavStack>
                        <FooterNavHeader>Social</FooterNavHeader>
                        <FooterNavLink>GitHub</FooterNavLink>
                        <FooterNavLink>LinkedIn</FooterNavLink>
                    </FooterNavStack>
                </Flex>
            </Flex>

            <Box
                bg={"linear-gradient(62deg, #f093fb 0%, #f5576c 100%)"}
                h={4}
            ></Box>
        </Flex>
    );
}
