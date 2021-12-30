import type { NextPage } from "next";
import Head from "next/head";
import HeroBlockMini from "../components/HeroBlockMini";
import PageWrapper from "../components/PageWrapper";

import { Box, Flex, Heading, Text } from "@chakra-ui/react";

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
                <HeroBlockMini />
                <Flex
                    direction={"column"}
                    gap={8}
                    px={8}
                    fontSize={"xl"}
                    textAlign={"justify"}
                    color={"#222"}
                >
                    <Box>
                        <Heading
                            // fontWeight={"300"}
                            size={"lg"}
                            backgroundImage={
                                "linear-gradient(to left, #9be15d 0%, #00e3ae 100%)"
                            }
                            backgroundPosition={"center bottom"}
                            backgroundRepeat={"no-repeat"}
                            backgroundSize={"100% 10%"}
                            display={"inline-block"}
                        >
                            About Nic
                        </Heading>
                    </Box>
                    <Text>
                        I am an Oregon-native who grew up in an era of the
                        Internet that encouraged customization and tinkering.
                        Platforms such as Neopets, Myspace, and Tumblr allowed
                        me opportunities to build webpages with HTML and CSS at
                        a young age.
                    </Text>
                    <Text>
                        As a high schooler, I learned to program on my TI-84
                        Calculator using BASIC. Many of my first programs were
                        typed directly into the calculator including a quadratic
                        equation solver, three-dimensional vector addition
                        calculator, and a full-fledged number guessing game.
                    </Text>
                    <Text>
                        While I had always been a great math and science
                        student, I studied Philosophy as an undergraduate
                        because I found it both challenging and engaging. In
                        2014, I graduated with highest honors from Oregon State
                        University with Bachelor of Science in Philosophy.
                    </Text>
                    <Text>
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
                    <Text>
                        In 2021, I decided to return to Oregon State University
                        to pursue a Bachelor of Science in Computer Science with
                        an anticipated graduation date in December 2022. I am
                        currently interested in full-stack development, mobile
                        development, and embedded systems.
                    </Text>
                    <Text>
                        Outside of school and work, I love to learn and always
                        seem to find myself reading one thing or another. I also
                        enjoy weight lifting, acoustic guitar, writing, solving
                        Rubik&apos;s cubes, going on walks, and spending time
                        with my partner.
                    </Text>
                </Flex>
            </PageWrapper>
        </>
    );
};

export default Home;
