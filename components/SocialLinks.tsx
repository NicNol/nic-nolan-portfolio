import { Flex, Link } from "@chakra-ui/react";
import Image from "next/image";
import LinkedIn from "../public/images/LI.png";
import GitHub from "../public/images/GH.png";
import { default as NextLink } from "next/link";

export default function SocialLinks() {
    return (
        <Flex
            wrap={"nowrap"}
            gap={4}
            px={4}
            py={4}
            alignItems={"flex-start"}
            height={"100%"}
        >
            <NextLink href="https://github.com/NicNol" passHref>
                <Link opacity={"50%"} _hover={{ opacity: "60%" }} isExternal>
                    <Image
                        alt="GitHub Brand Logo"
                        src={GitHub}
                        width={36}
                        height={36}
                    />
                </Link>
            </NextLink>
            <NextLink href="https://www.linkedin.com/in/nicnolan/" passHref>
                <Link opacity={"40%"} _hover={{ opacity: "50%" }} isExternal>
                    <Image
                        alt="LinkedIn Brand Logo"
                        src={LinkedIn}
                        width={36}
                        height={36}
                    />
                </Link>
            </NextLink>
        </Flex>
    );
}
