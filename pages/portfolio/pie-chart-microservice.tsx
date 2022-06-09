import type { NextPage } from "next";
import Head from "next/head";
import HeroBlockMini from "../../components/Hero/HeroBlockMini";
import PageWrapper from "../../components/PageWrapper";
import { Box, Flex, Tag, Text } from "@chakra-ui/react";
import Image from "next/image";
import pieChartImage from "../../public/images/portfolio/Pie-Chart.png";
import BodyLink from "../../components/Body/BodyLink";
import BodyHeading from "../../components/Body/BodyHeading";
import BodyButton from "../../components/Body/BodyButton";

const PieChartMicroservice: NextPage = () => {
    const tags = ["JavaScript", "Next.js", "Node.js", "Node-canvas", "AWS S3"];

    return (
        <>
            <Head>
                <title>Nic Nolan | Pie Chart Microservice</title>
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
                        <BodyHeading>Pie Chart Microservice</BodyHeading>
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
                            A microservice API that creates an image of a pie
                            chart from user-submitted data. Users submit data
                            via an HTTP POST request and the API returns a JSON
                            response with an image URL of the pie chart that was
                            created from their request.
                        </Text>
                    </Flex>
                    <Flex direction={"column"} gap={4}>
                        <Flex gap={4}>
                            <BodyButton
                                to={
                                    "https://mockdata-u.vercel.app/api/pie-chart"
                                }
                            >
                                View Demo
                            </BodyButton>
                            <BodyButton
                                to={
                                    "https://github.com/NicNol/mockdata-u/tree/main/pages/api/pie-chart"
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
                            <Box
                                border={"solid 1px #eee"}
                                borderRadius={8}
                                overflow={"hidden"}
                                boxShadow={"lg"}
                            >
                                <Image
                                    src={pieChartImage}
                                    alt={
                                        "Preview of a Pie Chart created by my project"
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
                                Above is the default pie chart that is created
                                if a user passes no information. Each pie chart
                                has percentage labels for each slice and a
                                legend that explains what each color corresponds
                                to.
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
                                    This project stemmed from an open-ended
                                    school assignment. Each member in my group
                                    was to create a project with any technology
                                    stack that they desired. There were no
                                    limitations on what the project had to do,
                                    on its scope, or how it was implemented. The
                                    only requirement was that we ultimately
                                    would have to utilize a microservice created
                                    by a fellow classmate.
                                </Text>
                                <Text
                                    fontWeight={"300"}
                                    fontSize={"xl"}
                                    color={"#666"}
                                    textAlign={"justify"}
                                >
                                    One of my teammate&apos;s was creating a
                                    loan calculator and wanted to be able to
                                    display the loan principal and interest as a
                                    pie chart. I found the idea of providing a
                                    pie chart microservice to be overwhelming at
                                    first, but I was able to discuss what my
                                    teammate needed and found a useful starting
                                    place in{" "}
                                    <BodyLink
                                        to={
                                            "https://code.tutsplus.com/tutorials/how-to-draw-a-pie-chart-and-doughnut-chart-using-javascript-and-html5-canvas--cms-27197"
                                        }
                                    >
                                        this JavaScript and HTML5 canvas
                                        tutorial
                                    </BodyLink>{" "}
                                    by John Negoita.
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
                                    The first challenge would be creating a pie
                                    chart using the tutorial linked above. This
                                    required first building the pie chart using
                                    HTML5 canvas and JavaScript.
                                </Text>
                                <Text
                                    fontWeight={"300"}
                                    fontSize={"xl"}
                                    color={"#666"}
                                    textAlign={"justify"}
                                >
                                    The second challenge would be converting the
                                    pie chart into an image so that it could be
                                    saved and uploaded to a server.
                                </Text>
                                <Text
                                    fontWeight={"300"}
                                    fontSize={"xl"}
                                    color={"#666"}
                                    textAlign={"justify"}
                                >
                                    The last challenge would be to find a way to
                                    upload files to an external service using
                                    Next.js and return the URL of the uploaded
                                    image to the user. I was familiar with using
                                    Next.js but because it&apos;s serverless, I
                                    would have to use function calls to perform
                                    all operations.
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
                                    Negoita&apos;s tutorial was very
                                    straightforward. I was able to create my own
                                    pie chart in an HTML document and display it
                                    in the browser. However, it seemed
                                    unnecessary to do this because the HTML
                                    document would never be shown to the user.
                                </Text>
                                <Text
                                    fontWeight={"300"}
                                    fontSize={"xl"}
                                    color={"#666"}
                                    textAlign={"justify"}
                                >
                                    To solve the second challenge (and to
                                    optimize my HTML5 canvas), I found an npm
                                    module called{" "}
                                    <BodyLink
                                        to={
                                            "https://github.com/Automattic/node-canvas"
                                        }
                                    >
                                        node-canvas
                                    </BodyLink>{" "}
                                    that could create HTML5 canvas objects using
                                    node.js with almost identical syntax. This
                                    module allowed me to turn my canvas into a
                                    data stream to be saved locally or to be
                                    used as the input of another function.
                                </Text>
                                <Text
                                    fontWeight={"300"}
                                    fontSize={"xl"}
                                    color={"#666"}
                                    textAlign={"justify"}
                                >
                                    And lastly, I reviewed the Next.js
                                    documentation for suggestions about
                                    uploading assets. The suggestion was to use
                                    Amazon Web Services S3 and{" "}
                                    <BodyLink
                                        to={"https://aws.amazon.com/tools/"}
                                    >
                                        the AWS SDK
                                    </BodyLink>{" "}
                                    to accomplish this. I had never used AWS or
                                    the AWS SDK before, so I was worried about
                                    the complexity of integrating S3 into my
                                    project. However, I was pleasantly surprised
                                    by the simplicity of it all and managed to
                                    get my pie chart images uploaded into the
                                    correct bucket after only an hour or two of
                                    work.
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
                                    Although this microservice project was a
                                    relatively small part of my overall project,
                                    I feel like this is one of the coolest
                                    projects that I&apos;ve ever built. I
                                    remember that before I started, I was really
                                    skeptical that I could build a microservice
                                    that supported my teammate&apos;s needs.
                                    I&apos;m really proud that I was able to
                                    overcome the challenges involved in this
                                    project and produce something that I
                                    didn&apos;t think I would be able to do. You
                                    can view an example API response{" "}
                                    <BodyLink
                                        to={
                                            "https://mockdata-u.vercel.app/api/pie-chart"
                                        }
                                    >
                                        here
                                    </BodyLink>{" "}
                                    and the GitHub repo (including the API
                                    documentation){" "}
                                    <BodyLink
                                        to={
                                            "https://github.com/NicNol/mockdata-u/tree/main/pages/api/pie-chart"
                                        }
                                    >
                                        here
                                    </BodyLink>
                                    .
                                </Text>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </PageWrapper>
        </>
    );
};

export default PieChartMicroservice;
