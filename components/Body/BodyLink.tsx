import { Box, Link } from "@chakra-ui/react";
import { default as NextLink } from "next/link";
import { ExternalLinkIcon } from "@chakra-ui/icons";

export default function BodyLink({ children, to = "/" }: any) {
    const isExternalLink = to[0] != "/";

    return (
        <Box display={"inline"}>
            <NextLink href={to} passHref>
                <Link
                    fontWeight={"bold"}
                    transition={".2s"}
                    _focus={{ outline: "none" }}
                    _hover={{
                        textDecoration: "none",
                        backgroundSize: "100% 10%",
                        color: "#222",
                    }}
                    backgroundImage={
                        "linear-gradient(to left, #9be15d 0%, #00e3ae 100%)"
                    }
                    backgroundPosition={"left bottom"}
                    backgroundRepeat={"no-repeat"}
                    backgroundSize={"0% 0%"}
                    isExternal={isExternalLink}
                >
                    {children}
                </Link>
            </NextLink>
            {isExternalLink ? <ExternalLinkIcon ml={2} mb={1} /> : null}
        </Box>
    );
}
