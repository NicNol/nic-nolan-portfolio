import { Stack } from "@chakra-ui/react";

export default function Footer({ children }: any) {
    return (
        <Stack direction={"column"} w={48}>
            {children}
        </Stack>
    );
}
