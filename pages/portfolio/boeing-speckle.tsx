import type { NextPage } from "next";
import Head from "next/head";
import HeroBlockMini from "../../components/Hero/HeroBlockMini";
import PageWrapper from "../../components/PageWrapper";
import { Alert, AlertIcon, Box, Flex, Tag, Text } from "@chakra-ui/react";
import Image from "next/image";
import homeImage from "../../public/images/portfolio/Boeing-Speckle.png";
import BodyLink from "../../components/Body/BodyLink";
import BodyHeading from "../../components/Body/BodyHeading";
import BodyButton from "../../components/Body/BodyButton";

const BoeingSpeckle: NextPage = () => {
    const tags = ["JavaScript", "React", "MongoDB", "Express", "Node.js"];

    return (
        <>
            <Head>
                <title>Nic Nolan | Boeing Speckle</title>
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
                        <BodyHeading>Boeing Speckle</BodyHeading>
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
                            Boeing Speckle is an API that scrapes data from BAC
                            specifications publicly available on the{" "}
                            <BodyLink
                                to={
                                    "https://active.boeing.com/doingbiz/d14426/index.cfm"
                                }
                            >
                                Boeing D1-4426 website
                            </BodyLink>{" "}
                            for companies in the Boeing supply chain. Boeing
                            Speckle allows users to query Boeing specifications
                            by their document number and return related
                            information including the document title, revision
                            level, and revision date. The API is available as a
                            GUI or by making API calls to return a JSON
                            response.
                        </Text>
                    </Flex>
                    <Flex direction={"column"} gap={4}>
                        <Flex gap={4}>
                            <BodyButton
                                to={"https://boeing-speckle.herokuapp.com/"}
                            >
                                View Demo
                            </BodyButton>
                            <BodyButton
                                to={"https://github.com/NicNol/Boeing-Speckle"}
                            >
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
                                Above is the Boeing Speckle home page. It shows
                                an example of a specification search using the
                                graphical user interface (GUI). The results
                                include the full specification number, revision
                                letter, title, and date of last revision.
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
                                    <BodyLink to={"https://www.boeing.com/"}>
                                        The Boeing Company
                                    </BodyLink>{" "}
                                    is an international corporation that
                                    designs, manufactures, and sells airplanes,
                                    satellites, and telecommunication equipment
                                    worldwide. In order to ensure the highest
                                    standards of quality in its products and
                                    components, Boeing has drafted and published
                                    thousands of specifications for use by its
                                    employees and suppliers in its supply chain.
                                    These specifications (&quot;BAC
                                    specifications&quot;) are available via
                                    Boeing&apos;s intranet but no public API
                                    exists to query documents programmatically.
                                    While it is of the utmost importance that
                                    Boeing&apos;s suppliers utilize the latest
                                    revision of each specification, there is no
                                    easy way for users to ensure they have the
                                    latest document. Many users do not have
                                    access to Boeing&apos;s intranet and those
                                    who do find it difficult to keep up with
                                    revision of all of the documents that
                                    support their production operations.
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
                                    The initial challenge was to utilize data
                                    that is publicly released via PDF to create
                                    an API. I would need to parse the PDF and
                                    convert the data into something that could
                                    be put into a database. I would need to
                                    scrape this data periodically using a server
                                    to ensure that users always had the latest
                                    specification data released by Boeing.
                                </Text>
                                <Text
                                    fontWeight={"300"}
                                    fontSize={"xl"}
                                    color={"#666"}
                                    textAlign={"justify"}
                                >
                                    The next challenge would be to create a
                                    functioning front-end and back-end for the
                                    application. I had been learning React.js
                                    and was really impressed by the modularity
                                    of it, so I wanted to incorporate React
                                    components in the UI. I didn&apos;t have
                                    much experience with databases when I was
                                    designing this application. I was familiar
                                    with Express, JavaScript objects, and JSON,
                                    so Express and a NoSQL database seemed like
                                    the most familiar technology to support the
                                    back-end.
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
                                    To obtain the specification data, I was able
                                    to use a simple fetch call to get the PDF.
                                    Fortunately the PDF with all the
                                    specification data remains at a{" "}
                                    <BodyLink
                                        to={
                                            "https://active.boeing.com/doingbiz/d14426/bac_specrev.pdf"
                                        }
                                    >
                                        static URL
                                    </BodyLink>{" "}
                                    (for now). I used a library called{" "}
                                    <BodyLink
                                        to={
                                            "https://www.npmjs.com/package/pdf-parse"
                                        }
                                    >
                                        pdf-parse
                                    </BodyLink>{" "}
                                    that creates a data buffer from the PDF that
                                    could be converted to a (very long) string.
                                    I then parsed the string using regular
                                    expression to pull out the specification
                                    data from the string. Finally, I converted
                                    the specification data into a JSON object
                                    and pushed it to a MongoDB database.
                                </Text>
                                <Text
                                    fontWeight={"300"}
                                    fontSize={"xl"}
                                    color={"#666"}
                                    textAlign={"justify"}
                                >
                                    I had already created the back-end before
                                    starting on the front-end. My set up was
                                    with Node.js and Express, not using
                                    create-react-app or a similar starter app.
                                    This meant that I had to build my own React
                                    set up with Webpack and Babel which provided
                                    its own challenges. Once set up, I was able
                                    to create React components for the user
                                    interface. I capture the number of results
                                    from a search query and pass those results
                                    as props to my components to display the
                                    number of results found and the
                                    specification metadata itself.
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
                                    This was my first application using the MERN
                                    (MongoDB, Express, React, and Node) stack. I
                                    struggled at times getting all of the
                                    different pieces to work together. For
                                    instance, the Webpack server and the express
                                    server had to be run separately during
                                    development but not during production since
                                    the Webpack would build static files in a
                                    production environment. Overall, the result
                                    turned out to be a useful application that
                                    companies could use to query to ensure that
                                    they have the latest revision of a Boeing
                                    specification. It requires minimal effort
                                    and no security permissions to access the
                                    metadata.
                                </Text>
                                <Text
                                    fontWeight={"300"}
                                    fontSize={"xl"}
                                    color={"#666"}
                                    textAlign={"justify"}
                                >
                                    In pursuit of making an application that
                                    would work for all users, I chose a narrow
                                    site that I thought would work well on
                                    mobile. I later added some responsiveness to
                                    the website to ensure it worked on these
                                    environments. I would like to re-design the
                                    UI at some point if the application ever
                                    begins receiving serious traffic. I also do
                                    not know how long the public PDF will remain
                                    available, so it would be good to implement
                                    a logging and notification system to let me
                                    know if the current system ever breaks.
                                </Text>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </PageWrapper>
        </>
    );
};

export default BoeingSpeckle;
