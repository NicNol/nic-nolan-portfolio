import type { NextPage } from "next";
import Head from "next/head";
import HeroBlockMini from "../../components/Hero/HeroBlockMini";
import PageWrapper from "../../components/PageWrapper";
import { Box, Flex, Tag, Text } from "@chakra-ui/react";
import Image from "next/image";
import terminalImage from "../../public/images/portfolio/String-Primitives.png";
import BodyLink from "../../components/Body/BodyLink";
import BodyHeading from "../../components/Body/BodyHeading";
import BodyButton from "../../components/Body/BodyButton";

const StringPrimitives: NextPage = () => {
    const tags = ["x86 Assembly", "MASM"];

    return (
        <>
            <Head>
                <title>Nic Nolan | String Primitives</title>
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
                        <BodyHeading>String Primitives</BodyHeading>
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
                            This is the final project for a course on computer
                            architecture and assembly language. It was
                            programmed using x86 Microsoft Macro Assembler
                            (MASM). The project allows the user to input 10
                            strings comprised only of digits and optionally a
                            sign (+ or -). The user input is validated and then
                            converted to integer type. All 10 numbers are summed
                            together, converted to a string, and then printed to
                            the user.
                        </Text>
                    </Flex>
                    <Flex direction={"column"} gap={4}>
                        <Flex gap={4}>
                            <BodyButton
                                to={
                                    "https://github.com/NicNol/String-Primitives"
                                }
                            >
                                View Source
                            </BodyButton>
                        </Flex>
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
                            {console.log(terminalImage)}
                            <Box
                                border={"solid 1px #eee"}
                                borderRadius={8}
                                overflow={"hidden"}
                                boxShadow={"lg"}
                            >
                                <Image
                                    src={terminalImage}
                                    alt={
                                        "Preview of running the String Primitives assembly code once compiled"
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
                                The above image shows how the program works.
                                Under the hood, user input is received in the
                                form of an array of ASCII characters. Each
                                string has to be converted to a decimal number
                                and stored in memory. After all 10 numbers have
                                been given, they are summed and then converted
                                into an ASCII string to be printed.
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
                                    String Primitives originated out of an
                                    assignment for a course on computer
                                    architecture and assembly language.
                                    Natively, Microsoft Assembly Language does
                                    not have a string Primitive. Instead it
                                    stores ASCII characters as integers in
                                    consecutive memory that can later be
                                    interpreted as string input or output. When
                                    a user inputs a number, it is stored as a
                                    string of ASCII characters. This means that
                                    the user input is not ready for manipulation
                                    (addition, subtraction, multiplication,
                                    etc.) until it has been converted to an
                                    integer. This project attempts to solve that
                                    problem by demonstrating how user input can
                                    programmatically be converted from ASCII
                                    characters in consecutive memory into an
                                    integer in memory.
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
                                    The first challenge was getting user input.
                                    User input could be begin with a plus (+) or
                                    minus (-) sign and then had to be a valid
                                    signed integer in Assembly. This meant that
                                    the user input could be from -2,147,483,648
                                    to +2,147,483,647. Any number outside of
                                    this range would be considered invalid
                                    because it cannot be stored as a signed
                                    integer on a 32-bit system. The second
                                    challenge was converting the user input from
                                    a string to an integer, and eventually from
                                    an integer back into a string.
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
                                    To validate user input, I knew that the
                                    maximum length that a valid input could be
                                    was 12 including the terminating character.
                                    For example: -2147483648 (plus the
                                    terminating character). Any input that was
                                    longer than 12 characters would be invalid.
                                    The first character could be a plus (+),
                                    minus (-), or a digit. If the user provides
                                    a sign, then at least one additional number
                                    must be provided. With these rules, I was
                                    able to create a way to roughly validate the
                                    user input. In the next step, I would
                                    convert the string to a number. MASM
                                    provides an overflow flag and would be able
                                    to tell us if converting the string to an
                                    integer set the overflow flag. By checking
                                    the flag while we converted the number, we
                                    would be able to tell if the user input was
                                    too large to be a signed 32-bit integer.
                                </Text>
                                <Text
                                    fontWeight={"300"}
                                    fontSize={"xl"}
                                    color={"#666"}
                                    textAlign={"justify"}
                                >
                                    After roughly validating the user input, I
                                    was ready to convert the string to a signed
                                    integer. I started in the one&apos;s place
                                    of the user input, converting the ASCII
                                    value into its decimal digit equivalent. I
                                    then multiplied this number by 10^0 (1). I
                                    continued to the ten&apos;s place, again
                                    converting the ASCII value into its decimal
                                    digit equivalent. And then multiplied this
                                    number by 10^1 (10). I would continue until
                                    I reached the last character in the user
                                    input string. The last character could
                                    either be a digit or a sign. It also had the
                                    potential to create a buffer overflow if the
                                    number was too large. If the last character
                                    was a plus sign, I would take no actions. If
                                    the last character was a minus sign, I would
                                    multiply the total by -1. Otherwise, the
                                    last character was a digit. We would convert
                                    it to an integer, multiply it by 10^X (where
                                    X is the number of characters in the user
                                    input), add it to the total. Finally we
                                    would check the overflow flag to ensure that
                                    the number was not too large.
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
                                    This project was the culmination of 10 weeks
                                    of learning Microsoft Assembly language.
                                    Although the problem itself sounds
                                    relatively simple, I wrote about 1000 lines
                                    of code (and comments) to accomplish this
                                    small task. This project gives me a large
                                    appreciation for the implementation of C or
                                    larger projects like{" "}
                                    <BodyLink
                                        to={
                                            "https://en.wikipedia.org/wiki/RollerCoaster_Tycoon_(video_game)"
                                        }
                                    >
                                        Roller Coaster Tycoon
                                    </BodyLink>{" "}
                                    which was written almost entirely in{" "}
                                    <BodyLink
                                        to={
                                            "https://en.wikipedia.org/wiki/RollerCoaster_Tycoon_(video_game)#Development"
                                        }
                                    >
                                        assembly language
                                    </BodyLink>
                                    . I am thankful that C is relatively
                                    optimized and is what we use today for most
                                    low level programming.
                                </Text>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </PageWrapper>
        </>
    );
};

export default StringPrimitives;
