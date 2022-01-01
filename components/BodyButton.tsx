import React, { FC } from "react";
import { Button, Link } from "@chakra-ui/react";
import { default as NextLink } from "next/link";

interface BodyButtonProps {
    to?: string;
    children: any;
}

const BodyButton: FC<BodyButtonProps> = ({ to = "/", children }) => {
    return (
        <NextLink href={to} passHref>
            <Link
                _hover={{
                    textDecoration: "none",
                }}
            >
                <Button
                    backgroundImage={
                        "linear-gradient(to left, #9be15d 0%, #00e3ae 100%)"
                    }
                    backgroundPosition={"bottom center"}
                    backgroundRepeat={"no-repeat"}
                    backgroundSize={"100% 0%"}
                    transition={".3s"}
                    _focus={{ outline: "none" }}
                    _hover={{
                        backgroundSize: "100% 10%",
                        backgroundColor: "gray.200",
                    }}
                    _active={{
                        backgroundSize: "100% 10%",
                        backgroundColor: "gray.300",
                    }}
                    fontWeight={"300"}
                    borderRadius={32}
                    boxShadow={"md"}
                >
                    {children}
                </Button>
            </Link>
        </NextLink>
    );
};

export default BodyButton;
