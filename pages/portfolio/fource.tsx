import type { NextPage } from "next";
import Head from "next/head";
import HeroBlockMini from "../../components/HeroBlockMini";
import PageWrapper from "../../components/PageWrapper";
import { Alert, AlertIcon, Box, Flex, Tag, Text } from "@chakra-ui/react";
import Image from "next/image";
import homeImage from "../../public/images/portfolio/Fource.png";
import BodyLink from "../../components/BodyLink";
import BodyHeading from "../../components/BodyHeading";
import BodyButton from "../../components/BodyButton";

const Fource: NextPage = () => {
    const tags = ["JavaScript", "Express", "Node.js", "Socket.io"];

    return (
        <>
            <Head>
                <title>Nic Nolan | Fource</title>
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
                <HeroBlockMini />
                <Flex
                    direction={"column"}
                    gap={8}
                    p={8}
                    textAlign={"justify"}
                    color={"#222"}
                    w={"100%"}
                >
                    <Flex direction={"column"} gap={4}>
                        <BodyHeading>Fource</BodyHeading>
                        <Flex wrap={"wrap"} gap={2}>
                            {tags.map((tag) => (
                                <Tag key={tag} size={"md"}>
                                    {tag}
                                </Tag>
                            ))}
                        </Flex>
                        <Text
                            fontWeight={"300"}
                            fontSize={"xl"}
                            color={"#666"}
                            textAlign={"justify"}
                        >
                            Fource is an abstract strategy game based around
                            realtime gameplay. The objective is to connect four
                            of your pieces vertically or horizontally on the
                            board. When pieces are placed on the board, a force
                            is acted upon them. Pieces of the same color are
                            pulled toward the placed piece and pieces of the
                            opposite color are pushed away. Users play (or
                            spectate!) over the internet and may chat during
                            play.
                        </Text>
                    </Flex>
                    <Flex direction={"column"} gap={4}>
                        <Flex gap={4}>
                            <BodyButton>View Demo</BodyButton>
                            <BodyButton>View Source</BodyButton>
                        </Flex>
                        <Alert status="info" fontSize={"md"}>
                            <AlertIcon />
                            This demo uses a Heroku &quot;Hobby&quot;
                            development server that sleeps after 30 minutes of
                            inactivity. You may have to wait 10 to 15 seconds
                            before the demo initially loads.
                        </Alert>
                    </Flex>

                    <Flex
                        position={"relative"}
                        w={"100%"}
                        height={"100%"}
                        direction={"column"}
                        gap={8}
                    >
                        <BodyHeading size={"lg"}>Preview</BodyHeading>
                        <Flex direction={"column"} position={"relative"}>
                            {console.log(homeImage)}
                            <Box
                                border={"solid 1px #eee"}
                                borderRadius={8}
                                overflow={"hidden"}
                                boxShadow={"lg"}
                            >
                                <Image
                                    src={homeImage}
                                    alt={
                                        "Preview of the Boeing Speckle Home Page"
                                    }
                                    layout={"responsive"}
                                    quality={100}
                                />
                            </Box>
                            <Text
                                fontWeight={"300"}
                                fontSize={"md"}
                                color={"#999"}
                                textAlign={"justify"}
                                p={[2, 4, 8, 16]}
                            >
                                Above is the starting position of a Fource game.
                                On the left is an area where players and
                                spectators can chat. In the middle is the game
                                board. On the right is two cabinets that keep
                                track of information for each player including
                                online status, current turn, score, and time
                                remaining. Players will drag pieces from their
                                respective cabinets onto the game board during
                                their turn.
                            </Text>
                        </Flex>
                        <Flex direction={"column"} gap={8}>
                            <Flex direction={"column"}>
                                <BodyHeading>Technical Details</BodyHeading>
                                <Text
                                    fontWeight={"300"}
                                    fontSize={"xl"}
                                    color={"#666"}
                                    textAlign={"justify"}
                                >
                                    The following sections detail the problem
                                    that this project sought to solve, the
                                    associated challenges, the ultimate
                                    solution, and my final thoughts.
                                </Text>
                            </Flex>
                            <BodyHeading size={"lg"}>The Problem</BodyHeading>
                            <BodyHeading size={"lg"}>Challenges</BodyHeading>
                            <BodyHeading size={"lg"}>The Solution</BodyHeading>
                            <BodyHeading size={"lg"}>
                                Final Thoughts
                            </BodyHeading>
                        </Flex>
                    </Flex>
                </Flex>
            </PageWrapper>
        </>
    );
};

export default Fource;
