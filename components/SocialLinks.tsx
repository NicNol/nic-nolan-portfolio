import { Flex, Icon, Link } from "@chakra-ui/react";
import Image from "next/image";
import LinkedIn from "../public/images/icons/LinkedIn.svg";
import GitHub from "../public/images/icons/GitHub.svg";
import { default as NextLink } from "next/link";
import { IoMail } from "react-icons/io5";

export default function SocialLinks() {
    return (
        <Flex wrap={"nowrap"} gap={4} pl={2} pt={4} h={"52px"}>
            <NextLink href="https://github.com/NicNol" passHref>
                <Link
                    opacity={"40%"}
                    _hover={{ opacity: "60%" }}
                    isExternal
                    _focus={{ outline: "none" }}
                >
                    <Image
                        alt="GitHub Brand Logo"
                        src={GitHub}
                        width={36}
                        height={36}
                    />
                </Link>
            </NextLink>
            <NextLink href="https://www.linkedin.com/in/nicnolan/" passHref>
                <Link
                    opacity={"40%"}
                    _hover={{ opacity: "60%" }}
                    isExternal
                    _focus={{ outline: "none" }}
                >
                    <Image
                        alt="LinkedIn Brand Logo"
                        src={LinkedIn}
                        width={36}
                        height={36}
                    />
                </Link>
            </NextLink>
            <NextLink href="mailto:nicnolan@live.com" passHref>
                <Link
                    opacity={"40%"}
                    _hover={{ opacity: "60%" }}
                    isExternal
                    _focus={{ outline: "none" }}
                >
                    <Icon
                        as={IoMail}
                        width={12}
                        height={12}
                        position={"relative"}
                        bottom={"6px"}
                    />
                </Link>
            </NextLink>
        </Flex>
    );
}
