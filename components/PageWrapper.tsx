import { Center, Flex } from "@chakra-ui/react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

export default function PageWrapper({ children }: any) {
    return (
        <Center bg={"white"}>
            <Flex
                justifyContent={"space-between"}
                flexDirection={"column"}
                minH={"100vh"}
                w={"100%"}
            >
                <Navbar />
                <Flex
                    flexGrow={1}
                    flexDirection={"column"}
                    justifyContent={"flex-start"}
                    alignSelf={"center"}
                    maxW={"1200px"}
                    w={"100%"}
                    bg={"white"}
                >
                    {children}
                </Flex>
                <Footer />
            </Flex>
        </Center>
    );
}
