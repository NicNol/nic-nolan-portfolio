import type { NextPage } from "next";
import Head from "next/head";
import HeroBlockMini from "../../components/Hero/HeroBlockMini";
import PageWrapper from "../../components/PageWrapper";
import { Alert, AlertIcon, Box, Flex, Tag, Text } from "@chakra-ui/react";
import Image from "next/image";
import homeImage from "../../public/images/portfolio/Course-Analytics-Home.png";
import courseImage from "../../public/images/portfolio/Course-Analytics-Course.png";
import BodyLink from "../../components/Body/BodyLink";
import BodyHeading from "../../components/Body/BodyHeading";
import BodyButton from "../../components/Body/BodyButton";

const CourseAnalytics: NextPage = () => {
    const tags = [
        "TypeScript",
        "Next.js",
        "React",
        "Chakra UI",
        "MongoDB",
        "Google Sheets API",
        "Node.js",
    ];

    return (
        <>
            <Head>
                <title>Nic Nolan | Course Analytics</title>
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
                        <BodyHeading>Course Analytics</BodyHeading>
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
                            Course Analytics was developed for students of
                            Oregon State University&apos;s Computer Science
                            program. It provides aggregated data and tips to
                            help students understand course difficulties, time
                            commitments, and common course pairings. The data is
                            crowdsourced from real student course reviews.
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
                                        "Preview of the Course Analytics Home Page"
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
                                Above is the Course Analytics home page. It
                                shows each course in a card view with
                                at-a-glance information about the data collected
                                for the course. Users are able to filter on the
                                types of courses (lower division, upper
                                division, core classes, or electives) using
                                buttons at the top of the page.
                            </Text>
                        </Flex>
                        <Flex direction={"column"}>
                            <Box
                                border={"solid 1px #eee"}
                                borderRadius={8}
                                overflow={"hidden"}
                                boxShadow={"lg"}
                            >
                                <Image
                                    src={courseImage}
                                    alt={"Preview of a Course Page"}
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
                                Above is a course page. It shows detailed
                                information about the data collected for the
                                course. This includes the number of reviews
                                collected, the average time spent on the course
                                per week, and the average difficulty on a 1 to 5
                                scale. Common course pairings (courses taken
                                concurrently) are also provided. Users are able
                                to filter on the desired date range for the data
                                using buttons at the top of the page, which
                                updates the shown data accordingly.
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
                            <Flex direction={"column"}>
                                <BodyHeading size={"lg"}>
                                    The Problem
                                </BodyHeading>
                                <Text
                                    fontWeight={"300"}
                                    fontSize={"xl"}
                                    color={"#666"}
                                    textAlign={"justify"}
                                >
                                    One of the reasons that I chose to return to
                                    Oregon State University for my computer
                                    science degree was the online community of
                                    students and alumni worldwide. The program
                                    has its own unoffical{" "}
                                    <BodyLink
                                        to={
                                            "https://www.reddit.com/r/OSUOnlineCS/"
                                        }
                                    >
                                        subreddit
                                    </BodyLink>{" "}
                                    and slack channel with thousands of
                                    community members. In 2015, one student
                                    created a Google Survey that would allow
                                    students to crowdsource information about
                                    each course, including the time commitment,
                                    the percieved difficulty, and tips for
                                    future students. The results of the survey
                                    were pushed to a{" "}
                                    <BodyLink
                                        to={
                                            "https://docs.google.com/spreadsheets/d/1MFBGJbOXVjtThgj5b6K0rv9xdsC1M2GQ0pJVB-8YCeU/edit#gid=2042942971"
                                        }
                                    >
                                        Google Sheets document
                                    </BodyLink>
                                    . Students could filter on certain classes
                                    or date ranges using the spreadsheet.
                                    Because each response resulted in one line
                                    of data, if a student had taken more than
                                    one class, the second and third classes
                                    would each be in their own column in the
                                    spreadsheet. This made using the spreadsheet
                                    more difficult than it needed to be.
                                </Text>
                            </Flex>
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

export default CourseAnalytics;
