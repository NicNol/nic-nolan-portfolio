import { Box, Link } from "@chakra-ui/react";
import { default as NextLink } from "next/link";

export default function Footer({ children, to = "/" }: any) {
    return (
        <Box>
            <NextLink href={to} passHref>
                <Link
                    fontSize={"lg"}
                    fontWeight={"300"}
                    transition={".2s"}
                    _focus={{ outline: "none" }}
                    _hover={{
                        textDecoration: "none",
                        backgroundSize: "100% 10%",
                    }}
                    backgroundImage={
                        "linear-gradient(62deg, #f093fb 0%, #f5576c 100%)"
                    }
                    backgroundPosition={"left bottom"}
                    backgroundRepeat={"no-repeat"}
                    backgroundSize={"0% 0%"}
                    isExternal={to[0] != "/"}
                >
                    {children}
                </Link>
            </NextLink>
        </Box>
    );
}
