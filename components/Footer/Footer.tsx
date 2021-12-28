import { Box, Flex, Link, Heading, Stack } from "@chakra-ui/react";
import FooterNavStack from "./FooterNavStack";
import FooterNavHeader from "./FooterNavHeader";
import FooterNavLink from "./FooterNavLink";

export default function Footer() {
    return (
        <Flex direction={"column"} w={"100%"}>
            <Flex
                wrap={"wrap"}
                color={"#333333cc"}
                justifyContent={"center"}
                my={16}
            >
                <FooterNavStack>
                    <FooterNavHeader>Social</FooterNavHeader>
                    <FooterNavLink>GitHub</FooterNavLink>
                    <FooterNavLink>LinkedIn</FooterNavLink>
                    <FooterNavLink>Twitter</FooterNavLink>
                </FooterNavStack>
                <FooterNavStack>
                    <FooterNavHeader>Projects</FooterNavHeader>
                    <FooterNavLink>Course Analytics</FooterNavLink>
                    <FooterNavLink>Boeing Speckle</FooterNavLink>
                    <FooterNavLink>Fource</FooterNavLink>
                </FooterNavStack>
            </Flex>

            <Box
                bg={"linear-gradient(62deg, #f093fb 0%, #f5576c 100%)"}
                h={4}
            ></Box>
        </Flex>
    );
}
