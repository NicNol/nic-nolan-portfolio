import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../public/images/nic.jpg";
import PageWrapper from "../components/PageWrapper";
import { Box, Flex, Heading } from "@chakra-ui/react";
import SocialLinks from "../components/SocialLinks";

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
                        justifyContent={"flex-start"}
                        cursor={"default"}
                        userSelect={"none"}
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
                            transition={"1s"}
                            backgroundImage={
                                "linear-gradient(to left, #4481eb 0%, #04befe 100%)"
                            }
                            backgroundPosition={"center bottom"}
                            backgroundRepeat={"no-repeat"}
                            backgroundSize={"100% 10%"}
                            display={"inline-block"}
                            _hover={{
                                backgroundSize: "100% 100%",
                                color: "white",
                                textShadow: "1px 1px #333",
                            }}
                        >
                            Software Developer
                        </Heading>
                        <Heading fontWeight={"300"} color={"#222"} size={"lg"}>
                            from Portland, Oregon.
                        </Heading>
                        <SocialLinks />
                    </Flex>
                </Flex>
            </PageWrapper>
        </>
    );
};

export default Home;
