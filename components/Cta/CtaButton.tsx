import React, { FC } from "react";
import { Button, Link } from "@chakra-ui/react";
import { default as NextLink } from "next/link";

interface CtaButtonProps {
    to?: string;
    children: any;
}

const CtaButton: FC<CtaButtonProps> = ({ to = "/", children }) => {
    return (
        <NextLink href={to} passHref>
            <Link
                _hover={{
                    textDecoration: "none",
                }}
            >
                <Button
                    backgroundImage={
                        "linear-gradient(to left, #4481eb 0%, #04befe 100%)"
                    }
                    backgroundColor={"#f5f8fe"}
                    backgroundPosition={"bottom center"}
                    backgroundRepeat={"no-repeat"}
                    backgroundSize={"100% 0%"}
                    transition={".3s"}
                    _focus={{ outline: "none" }}
                    _hover={{
                        backgroundSize: "100% 10%",
                        backgroundColor: "#e3ecfc",
                    }}
                    _active={{
                        backgroundSize: "100% 10%",
                        backgroundColor: "#d2e1fa",
                    }}
                    fontWeight={"300"}
                    fontSize={"xl"}
                    p={8}
                    borderRadius={32}
                    boxShadow={"md"}
                    w={"100%"}
                >
                    {children}
                </Button>
            </Link>
        </NextLink>
    );
};

export default CtaButton;
