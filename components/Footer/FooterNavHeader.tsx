import { Heading } from "@chakra-ui/react";

export default function Footer({ children }: any) {
    return (
        <Heading fontSize={"xl"} fontWeight={"700"}>
            {children}
        </Heading>
    );
}
