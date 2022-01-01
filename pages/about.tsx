import type { NextPage } from "next";
import Head from "next/head";
import HeroBlockMini from "../components/HeroBlockMini";
import PageWrapper from "../components/PageWrapper";
import { Flex, Text } from "@chakra-ui/react";
import BodyLink from "../components/BodyLink";
import BodyHeading from "../components/BodyHeading";

const About: NextPage = () => {
    return (
        <>
            <Head>
                <title>Nic Nolan | About</title>
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
                    fontSize={"xl"}
                    textAlign={"justify"}
                    fontWeight={"300"}
                >
                    <BodyHeading>About Nic</BodyHeading>
                    <Text color={"#666"}>
                        I am an Oregon-native who grew up in an era of the
                        Internet that encouraged customization and tinkering.
                        Platforms such as Neopets, Myspace, and Tumblr allowed
                        me opportunities to build web pages with HTML and CSS at
                        a young age.
                    </Text>
                    <Text color={"#666"}>
                        As a high schooler, I learned to program on my{" "}
                        <BodyLink
                            to={
                                "https://www.amazon.com/Texas-Instruments-TI-84-Graphing-Calculator/dp/B0001EMM0Q"
                            }
                        >
                            TI-84 Graphing Calculator
                        </BodyLink>{" "}
                        using{" "}
                        <BodyLink to="https://en.wikipedia.org/wiki/TI-BASIC">
                            TI-BASIC
                        </BodyLink>
                        . The first programs I ever wrote were typed directly on
                        the calculator including a quadratic equation solver,
                        three-dimensional vector addition calculator, and a
                        full-fledged number guessing game.
                    </Text>
                    <Text color={"#666"}>
                        While I had always been a great math and science
                        student, I studied Philosophy as an undergraduate
                        because I found it both challenging and engaging. In
                        2014, I graduated with highest honors from{" "}
                        <BodyLink to={"http://www.oregonstate.edu"}>
                            Oregon State University
                        </BodyLink>{" "}
                        with Bachelor of Science in Philosophy.
                    </Text>
                    <Text color={"#666"}>
                        In 2015, I began a career in Quality Assurance working
                        to ensure that manufactured products were produced
                        consistently and to ultimately reduce product defects.
                        Working as a Quality Assurance Engineer for nearly seven
                        years, I was able to travel domestically and
                        internationally to solve problems and build
                        relationships with suppliers. I was also able to use my
                        programming skills to automate reports and develop
                        electronic systems for defect-reporting for my
                        companies.
                    </Text>
                    <Text color={"#666"}>
                        In 2021, I decided to return to Oregon State University
                        to pursue a Bachelor of Science in Computer Science with
                        an anticipated graduation date of December 2022. I am
                        currently interested in full-stack development, mobile
                        development, and embedded systems.
                    </Text>
                    <Text color={"#666"}>
                        Outside of school and work, I love to learn and always
                        seem to find myself reading one thing or another. I also
                        enjoy weight lifting, acoustic guitar, writing, chess,
                        solving{" "}
                        <BodyLink
                            to={
                                "https://www.worldcubeassociation.org/persons/2016NOLA01"
                            }
                        >
                            Rubik&apos;s cubes
                        </BodyLink>
                        , going on walks, and spending time with my partner.
                    </Text>
                </Flex>
            </PageWrapper>
        </>
    );
};

export default About;
