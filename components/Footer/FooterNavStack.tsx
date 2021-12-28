import { Stack } from "@chakra-ui/react";

export default function Footer({ children }: any) {
    return (
        <Stack direction={"column"} my={4} mx={[6, 6, 8, 16]}>
            {children}
        </Stack>
    );
}
