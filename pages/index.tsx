import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../public/images/nic.jpg";
import PageWrapper from "../components/PageWrapper";
import { Box, Center, Flex, Heading } from "@chakra-ui/react";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Nic Nolan</title>
                <meta charSet="UTF-8" />
                <meta
                    name="keywords"
                    content="Nic Nolan, Portfolio, Computer Science, Software Developer, Software Engineer"
                />
                <meta
                    name="description"
                    content="Portfolio website for Nic Nolan, a Software Developer from the United States"
                />
                <meta name="author" content="Nic Nolan" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
            </Head>
            <PageWrapper>
                <Flex
                    wrap={"wrap"}
                    justifyContent={"center"}
                    mt={[16, 32, 48]}
                    gap={8}
                >
                    <Box
                        borderRadius={"75px"}
                        overflow={"hidden"}
                        width={"300px"}
                        height={"300px"}
                        boxShadow={"2xl"}
                    >
                        <Image
                            src={profilePic}
                            alt="Picture of Nic Nolan"
                            priority
                            width={"300px"}
                            height={"300px"}
                        />
                    </Box>
                    <Flex
                        direction={"column"}
                        h={"300px"}
                        justifyContent={"center"}
                    >
                        <Heading color={"#222"} size={"xl"}>
                            Hello!
                        </Heading>
                        <Heading fontWeight={"300"} color={"#222"} size={"lg"}>
                            My name is
                        </Heading>
                        <Heading
                            bgGradient={
                                "linear-gradient(to top, #4481eb 0%, #04befe 100%)"
                            }
                            bgClip={"text"}
                            display={"block"}
                            size={"4xl"}
                            fontWeight={"700"}
                        >
                            Nic Nolan
                        </Heading>
                        <Heading fontWeight={"300"} color={"#222"} size={"lg"}>
                            and I am a
                        </Heading>
                        <Heading
                            backgroundImage={
                                "linear-gradient(to left, #4481eb 0%, #04befe 100%)"
                            }
                            backgroundPosition={"left bottom"}
                            backgroundRepeat={"no-repeat"}
                            backgroundSize={"100% 10%"}
                            display={"inline-block"}
                        >
                            Software Developer.
                        </Heading>
                    </Flex>
                </Flex>
            </PageWrapper>
        </>
    );
};

export default Home;
