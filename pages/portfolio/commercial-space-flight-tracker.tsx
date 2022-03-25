import type { NextPage } from "next";
import Head from "next/head";
import HeroBlockMini from "../../components/Hero/HeroBlockMini";
import PageWrapper from "../../components/PageWrapper";
import { Alert, AlertIcon, Box, Flex, Tag, Text } from "@chakra-ui/react";
import Image from "next/image";
import homeImage from "../../public/images/portfolio/Commercial-Space-Flight-Tracker.png";
import BodyLink from "../../components/Body/BodyLink";
import BodyHeading from "../../components/Body/BodyHeading";
import BodyButton from "../../components/Body/BodyButton";

const CommercialSpaceFlightTracker: NextPage = () => {
    const tags = [
        "JavaScript",
        "Express",
        "Node.js",
        "mySQL",
        "React",
        "Chakra UI",
    ];

    return (
        <>
            <Head>
                <title>Nic Nolan | Commercial Space Flight Tracker</title>
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
                        <BodyHeading>
                            Commercial Space Flight Tracker
                        </BodyHeading>
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
                            Commercial Space Flight Tracker is a database
                            management system (DBMS) admin portal. The project
                            is intended for administrators of a fictional
                            website and allows access to change entries in a
                            real mySQL database using a custom-built GUI. The
                            project also features an API for performing CRUD
                            operations using HTTP requests.
                        </Text>
                    </Flex>
                    <Flex direction={"column"} gap={4}>
                        <Flex gap={4}>
                            <BodyButton to={"https://csft.herokuapp.com/"}>
                                View Demo
                            </BodyButton>
                            <BodyButton
                                to={
                                    "https://github.com/NicNol/Commercial-Space-Flight-Tracker"
                                }
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
                                        "Preview of a Commercial Space Flight Tracker database table"
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
                                Above is an example of a Commercial Space Flight
                                Tracker database table. By default, users are
                                presented with the existing data within the
                                database. It allows users to create new entries
                                in the database using the &quot;New Entry&quot;
                                button which brings up a modal with a data entry
                                form. Entries in the database can also be edited
                                using a similar modal and data form. Lastly,
                                users can delete entries in the database using
                                the delete button which confirms the user&apos;s
                                intent to delete the entry.
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
                                    This project originated out of my
                                    schoolwork. The requirements seem fairly
                                    simple: to create a fullstack web project
                                    that allows a user to manage their database.
                                    The database had to be managed using mySQL
                                    and utilize four entity relationships,
                                    including one many-to-many relationship.
                                    This was also a group project, so I spent
                                    the 10-week term collaborating with a
                                    student that I did not know prior to this
                                    project. He presented the idea of creating a
                                    database that tracked commercial space
                                    flight given that the number of participants
                                    is projected to grow exponentially over the
                                    next few decades. This seemed like a great
                                    idea and we ran with it!
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
                                    The first challenge was designing a database
                                    schema for our project. We knew from the
                                    beginning that we had to design our database
                                    in such a way that we would meet all of our
                                    project requirements. We also wanted to be
                                    sure to know what the end goal was before we
                                    started implementing our database.
                                </Text>
                                <Text
                                    fontWeight={"300"}
                                    fontSize={"xl"}
                                    color={"#666"}
                                    textAlign={"justify"}
                                >
                                    The next challenge was implementing our
                                    project in such a way that we could
                                    collaborate with one another. We also wanted
                                    to be able to get our project running
                                    locally so we could quickly create a
                                    frontend and test our backend.
                                </Text>
                                <Text
                                    fontWeight={"300"}
                                    fontSize={"xl"}
                                    color={"#666"}
                                    textAlign={"justify"}
                                >
                                    The last challenge was related to hosting
                                    and project deployment. We needed to provide
                                    a working URL with our project, but we also
                                    needed a way to deploy our changes and
                                    ensure they were working. We also were
                                    concerned that if we broke our site while it
                                    was being periodically graded throughout the
                                    term, we may lose points.
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
                                    We determined the entities that we wanted in
                                    our database and then we utilized an entity
                                    relationship diagram (ERD) to outline the
                                    relationships. We wrote out our database
                                    entities and agreed on each entity&apos;s
                                    attributes. We also determined the data type
                                    and any constrains associated with each
                                    attribute. This was our &quot;source of
                                    truth&quot; as we worked to complete the
                                    project.
                                </Text>
                                <Text
                                    fontWeight={"300"}
                                    fontSize={"xl"}
                                    color={"#666"}
                                    textAlign={"justify"}
                                >
                                    In order to collaborate with one another, we
                                    chose to host our project on GitHub. We used
                                    Node.js and Express to host the backend. It
                                    is relatively easy to get an Express server
                                    running. However, because we were using
                                    React and React Router, we did have to set
                                    up a route in our Express backend to ensure
                                    all (non-API) routes fell back to using
                                    React Router. This created a true Single
                                    Page Application (SPA) for our program. We
                                    built out the frontend using a React
                                    component library called Chakra UI. This
                                    made it easy to quickly create accessible
                                    components, including forms and modals.
                                </Text>
                                <Text
                                    fontWeight={"300"}
                                    fontSize={"xl"}
                                    color={"#666"}
                                    textAlign={"justify"}
                                >
                                    When it came time to host our site, I
                                    originally chose Netlify because I had heard
                                    good things about it. However, it seemed to
                                    work best for static or serverless projects.
                                    We instead went with Heroku, as both my
                                    group partner and I had experience with it.
                                    In order to ensure that our changes did not
                                    break the site, we developed a CI/CD
                                    strategy. We created a &quot;staging&quot;
                                    branch and a &quot;production&quot; branch
                                    (main). This allowed us to stage our changes
                                    and test them incrementally on a different
                                    deployment site with a different URL. When
                                    we were satisfied that our project was
                                    working, we would merge our staging branch
                                    into our production branch. Heroku would
                                    then re-build our project on each merge into
                                    our production branch. This ensured
                                    continuous deployment with no unexpected
                                    downtime. Our project was always ready for
                                    peer reviews and periodic grading.
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
                                    Overall, I felt like I had the opportunity
                                    to work with SQL and learn a lot about write
                                    SQL queries. In some ways, I think I prefer
                                    using a noSQL solution like MongoDB a little
                                    better for a smaller project. I can see the
                                    benefit to using SQL queries to wrangle a
                                    lot of data from a lot of tables with
                                    minimal code. So for small personal
                                    projects, mySQL might not be my first
                                    choice, but it definitely has its place in
                                    larger projects. Feel free to check out the
                                    site{" "}
                                    <BodyLink
                                        to={"https://csft.herokuapp.com/"}
                                    >
                                        here
                                    </BodyLink>{" "}
                                    and the GitHub repo{" "}
                                    <BodyLink
                                        to={
                                            "https://github.com/NicNol/Commercial-Space-Flight-Tracker"
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

export default CommercialSpaceFlightTracker;
