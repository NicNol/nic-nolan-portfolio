import React from "react";
import { Link, Text } from "@chakra-ui/react";
import { default as NextLink } from "next/link";
import { relative } from "path/posix";

interface NavbarMenuItemProps {
    children: any;
    to: string;
}

export default function MenuItem({ children, to = "/" }: NavbarMenuItemProps) {
    return (
        <NextLink href={to} passHref>
            <Link
                transition={"font-weight .2s"}
                px={4}
                _focus={{ outline: "none" }}
                _hover={{
                    textDecoration: "none",
                    fontWeight: "bold",
                }}
                w={36}
                textAlign={"center"}
            >
                <Text
                    bgGradient={[
                        "linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)",
                        null,
                        "none",
                    ]}
                    bgClip={["text", null, "border-box"]}
                    color={["transparent", null, "#333333CC"]}
                    textShadow={[
                        "1px 1px 5px rgba(1,1,1,0.2)",
                        null,
                        "1px 1px 2px rgba(0,0,0,0.2)",
                    ]}
                    fontSize="2xl"
                >
                    {children}
                </Text>
            </Link>
        </NextLink>
    );
}
