import React from "react";
import { Link, Text } from "@chakra-ui/react";
import { default as NextLink } from "next/link";

interface NavbarMenuItemProps {
    children: any;
    to: string;
}

export default function MenuItem({ children, to = "/" }: NavbarMenuItemProps) {
    return (
        <NextLink href={to} passHref>
            <Link>
                <Text
                    display="block"
                    bgGradient={[
                        "linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)",
                        null,
                        "none",
                    ]}
                    bgClip={["text", null, "border-box"]}
                    color={["transparent", null, "#333333CC"]}
                >
                    {children}
                </Text>
            </Link>
        </NextLink>
    );
}
