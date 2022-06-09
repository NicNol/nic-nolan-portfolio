import type { NextPage } from "next";
import Head from "next/head";
import HeroBlockMini from "../../components/Hero/HeroBlockMini";
import PageWrapper from "../../components/PageWrapper";
import { Alert, AlertIcon, Box, Flex, Tag, Text } from "@chakra-ui/react";
import Image from "next/image";
import homeImage from "../../public/images/portfolio/Fource.png";
import BodyLink from "../../components/Body/BodyLink";
import BodyHeading from "../../components/Body/BodyHeading";
import BodyButton from "../../components/Body/BodyButton";

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
                            <BodyButton to={"http://fource.herokuapp.com/"}>
                                View Demo
                            </BodyButton>
                            <BodyButton to={"https://github.com/NicNol/fource"}>
                                View Source
                            </BodyButton>
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
                        <Flex direction={"column"} rowGap={8}>
                            <Flex direction={"column"} rowGap={4}>
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
                            <Flex direction={"column"} rowGap={4}>
                                <BodyHeading size={"lg"}>
                                    The Problem
                                </BodyHeading>
                                <Text
                                    fontWeight={"300"}
                                    fontSize={"xl"}
                                    color={"#666"}
                                    textAlign={"justify"}
                                >
                                    Fource was originally thought up by a friend
                                    of mine as a tabletop game. The board was a
                                    chess or checker board and the pieces were
                                    small colored stones. I had the idea to
                                    create a web version of the game that would
                                    make it easier to set up and allow my
                                    friends to play remotely over the internet.
                                    You can review the rules of the game by{" "}
                                    <BodyLink
                                        to={
                                            "http://fource.herokuapp.com/how-to-play"
                                        }
                                    >
                                        clicking here
                                    </BodyLink>
                                    .
                                </Text>
                            </Flex>
                            <Flex direction={"column"} rowGap={4}>
                                <BodyHeading size={"lg"}>
                                    Challenges
                                </BodyHeading>
                                <Text
                                    fontWeight={"300"}
                                    fontSize={"xl"}
                                    color={"#666"}
                                    textAlign={"justify"}
                                >
                                    The first challenge was building a user
                                    interface for the game board. I had the idea
                                    to create a drag-and-drop game similar to
                                    the chess game on{" "}
                                    <BodyLink to={"https://lichess.org/"}>
                                        Lichess.org
                                    </BodyLink>
                                    . I would have to generate game pieces and
                                    allow users to drop them on the board.
                                </Text>
                                <Text
                                    fontWeight={"300"}
                                    fontSize={"xl"}
                                    color={"#666"}
                                    textAlign={"justify"}
                                >
                                    The second challenge was going to be
                                    building in the game logic. When a piece is
                                    dropped, it exerts a &quot;force&quot; on
                                    the other game pieces in the same row and
                                    column as the dropped piece. If the nearest
                                    piece orthogonally (up, down, left, and
                                    right) is the same color as the dropped
                                    piece, those pieces are pulled in to the
                                    dropped piece. And contrarily, if the
                                    nearest piece orthogonally are of the
                                    opposite color, they are pushed as far away
                                    as possible. There is also a prohibition
                                    from creating a three-in-a-row position from
                                    your drop. And, if a four-in-a-row condition
                                    is created (or a stalemate) we have to have
                                    mechanisms for determining a winner.
                                </Text>
                                <Text
                                    fontWeight={"300"}
                                    fontSize={"xl"}
                                    color={"#666"}
                                    textAlign={"justify"}
                                >
                                    Lastly, and perhaps the biggest challenge,
                                    was to make the game interactive between
                                    multiple players. I had to create a way for
                                    players to connect over the internet and
                                    play the game together.
                                </Text>
                            </Flex>
                            <Flex direction={"column"} rowGap={4}>
                                <BodyHeading size={"lg"}>
                                    The Solution
                                </BodyHeading>
                                <Text
                                    fontWeight={"300"}
                                    fontSize={"xl"}
                                    color={"#666"}
                                    textAlign={"justify"}
                                >
                                    To create the game board, I used 64 HTML div
                                    elements. Next, I created pieces from a
                                    single div element that was drag and
                                    droppable. When a piece was dropped over a
                                    certain square, that piece became a child
                                    element of the board div element.
                                </Text>
                                <Text
                                    fontWeight={"300"}
                                    fontSize={"xl"}
                                    color={"#666"}
                                    textAlign={"justify"}
                                >
                                    In building the game logic, I found that
                                    exerting the fource on pieces wasn&apos;t
                                    too difficult. However, checking for the
                                    three-in-a-row conditions was challenging.
                                    In order to determine if a potential move
                                    would create a three-in-a-row condition, I
                                    had to simulate dropping a piece in each
                                    available position and check if it would
                                    create exactly three pieces of the same
                                    color in a row. This simulation
                                    couldn&apos;t be visible to the player, so I
                                    had to create a pseudo board using DOM
                                    elements based on the current board state. I
                                    would iteratively check each available
                                    position in the board and use the result
                                    from each available position to display a
                                    visual cue to players whether the square was
                                    playable or not.
                                </Text>
                                <Text
                                    fontWeight={"300"}
                                    fontSize={"xl"}
                                    color={"#666"}
                                    textAlign={"justify"}
                                >
                                    To build in the interactivity, I used the{" "}
                                    <BodyLink to={"https://socket.io/"}>
                                        Socket.io
                                    </BodyLink>{" "}
                                    library. I would be able to share
                                    information between people so long as they
                                    were connected to a shared &quot;room.&quot;
                                    To ensure players were connected to a room
                                    with a unique ID, I created random strings
                                    of characters to represent the game ID. This
                                    game ID was shared and used as a key for
                                    Socket.io. When a user played a move, the
                                    move was transmitted to the other player and
                                    played on their screen. I also allowed for
                                    spectators to join later and catch up to the
                                    action by preserving the move order and
                                    transmitting it upon joining a game ID. It
                                    also allowed me to create a small, localized
                                    chat room for players.
                                </Text>
                            </Flex>
                            <Flex direction={"column"} rowGap={4}>
                                <BodyHeading size={"lg"}>
                                    Final Thoughts
                                </BodyHeading>
                                <Text
                                    fontWeight={"300"}
                                    fontSize={"xl"}
                                    color={"#666"}
                                    textAlign={"justify"}
                                >
                                    The outcome of this project was a playable
                                    game that could be shared amongst my
                                    friends. One of the challenges of creating a
                                    game is that there is no logical place to
                                    stop development. There will always be
                                    additional features to be implemented. I
                                    would like to clean up the user interface
                                    and build it with React components using a
                                    library like{" "}
                                    <BodyLink
                                        to={
                                            "https://react-dnd.github.io/react-dnd/about"
                                        }
                                    >
                                        React DnD
                                    </BodyLink>{" "}
                                    (drag and drop). There are some additional
                                    UI elements that are not functioning yet
                                    like the built-in clocks. Additionally, I
                                    wanted to add in user settings for different
                                    color boards and pieces.
                                </Text>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </PageWrapper>
        </>
    );
};

export default Fource;
