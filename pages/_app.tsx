import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Fonts } from "../components/Fonts";

const theme = extendTheme({
    fonts: {
        body: "Lexend Deca",
    },
});

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider theme={theme}>
            <Fonts />
            <Component {...pageProps} />
        </ChakraProvider>
    );
}

export default MyApp;
