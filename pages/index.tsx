import type { NextPage } from "next";
import Head from "next/head";
import PageWrapper from "../components/PageWrapper";
import { Box, Heading } from "@chakra-ui/react";

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
                <Box px={8}>
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
                        backgroundSize={"75% 10%"}
                    >
                        Software Developer.
                    </Heading>
                </Box>
            </PageWrapper>
        </>
    );
};

export default Home;
