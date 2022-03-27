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
                        <FooterNavLink to={"/"}>Home</FooterNavLink>
                        <FooterNavLink to={"/about"}>About</FooterNavLink>
                        <FooterNavLink to={"/portfolio"}>
                            Portfolio
                        </FooterNavLink>
                        <FooterNavLink to={"../Resume - Nic Nolan.pdf"}>
                            Resume
                        </FooterNavLink>
                    </FooterNavStack>
                    <FooterNavStack>
                        <FooterNavHeader>Projects</FooterNavHeader>
                        <FooterNavLink to={"/portfolio/course-analytics"}>
                            Course Analytics
                        </FooterNavLink>
                        <FooterNavLink to={"/portfolio/boeing-speckle"}>
                            Boeing Speckle
                        </FooterNavLink>
                        <FooterNavLink
                            to={"/portfolio/commercial-space-flight-tracker"}
                        >
                            Commercial Space Flight Tracker
                        </FooterNavLink>
                        <FooterNavLink to={"/portfolio/small-shell"}>
                            small shell
                        </FooterNavLink>
                        <FooterNavLink to={"/portfolio/string-primitives"}>
                            String Primitives
                        </FooterNavLink>
                        <FooterNavLink to={"/portfolio/fource"}>
                            Fource
                        </FooterNavLink>
                    </FooterNavStack>
                    <FooterNavStack>
                        <FooterNavHeader>Social</FooterNavHeader>
                        <FooterNavLink to={"https://github.com/NicNol"}>
                            GitHub
                        </FooterNavLink>
                        <FooterNavLink
                            to={"https://www.linkedin.com/in/nicnolan/"}
                        >
                            LinkedIn
                        </FooterNavLink>
                        <FooterNavLink to={"mailto:nicnolan@live.com"}>
                            Email
                        </FooterNavLink>
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
