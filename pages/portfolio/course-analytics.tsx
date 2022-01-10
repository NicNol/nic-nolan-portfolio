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
                            <BodyButton
                                to={"https://course-analytics.herokuapp.com/"}
                            >
                                View Demo
                            </BodyButton>
                            <BodyButton
                                to={
                                    "https://github.com/NicNol/course-analytics"
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
                                for the course. Users can filter on the types of
                                courses (lower division, upper division, core
                                classes, or electives) using buttons at the top
                                of the page.
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
                                concurrently) are also provided. Users can
                                filter on the desired date range for the data
                                using buttons at the top of the page, which
                                updates the shown data accordingly.
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
                                    the perceived difficulty, and tips for
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
                                    The first challenges I faced were
                                    self-imposed: I wanted to work with Next.js
                                    and TypeScript, new technologies that I was
                                    learning at the time I started the project.
                                    I would have to become proficient enough in
                                    both technologies to create a working
                                    product. Something that I was unaware of
                                    when I started using Next.js is that the
                                    default configuration is serverless, meaning
                                    that server requests would have to be
                                    refactored into function calls. This proved
                                    simple enough for API calls, but more
                                    difficult for refreshing data on a regular
                                    basis since there was ostensibly no server
                                    clock keeping track of the time.
                                </Text>
                                <Text
                                    fontWeight={"300"}
                                    fontSize={"xl"}
                                    color={"#666"}
                                    textAlign={"justify"}
                                >
                                    Another self-imposed challenge was using{" "}
                                    <BodyLink to={"https://chakra-ui.com/"}>
                                        Chakra UI
                                    </BodyLink>
                                    , a new-to-me UI framework that works with
                                    React. I had been impressed with the
                                    documentation and had seen it used with
                                    great success on other websites. My hope was
                                    that using this framework would allow me to
                                    create React components that were stylish,
                                    accessible, and responsive with relative
                                    ease. (Spoiler: it did not disappoint!)
                                </Text>
                                <Text
                                    fontWeight={"300"}
                                    fontSize={"xl"}
                                    color={"#666"}
                                    textAlign={"justify"}
                                >
                                    Lastly, I anticipated that there would be
                                    some difficulty in fetching the data from
                                    the Google Sheets document. I had never
                                    worked with a Google API before and was not
                                    sure what to expect. I was confident that I
                                    could manipulate the data if I was able to
                                    fetch it successfully from the API.
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
                                    I was able to set up my Next.js project with
                                    TypeScript using{" "}
                                    <BodyLink
                                        to={
                                            "https://nextjs.org/docs/basic-features/typescript"
                                        }
                                    >
                                        the Next.js documentation
                                    </BodyLink>
                                    . I knew that TypeScript was a superset of
                                    JavaScript, so I could fallback and use
                                    JavaScript anywhere that I was struggling
                                    with TypeScript. It turned out that I
                                    didn&apos;t need to fall back to JavaScript
                                    very often. Each of the libraries that I
                                    used had pre-built types available that I
                                    could incorporate into my project.
                                    Occasionally these did not work as I
                                    anticipated and I would spend time trying to
                                    work out why. There are a few tricks that
                                    allow you to override the typing system and
                                    I utilized them with some reluctance about
                                    if it was the right thing to do.
                                </Text>
                                <Text
                                    fontWeight={"300"}
                                    fontSize={"xl"}
                                    color={"#666"}
                                    textAlign={"justify"}
                                >
                                    In building the front-end with Charka UI, I
                                    was really impressed with how quickly I was
                                    able to build up a working and stylish UI.
                                    It even let me implement a dark mode without
                                    much additional effort. I probably tinkered
                                    with the colors more than necessary to make
                                    sure dark mode looked good too. It feels a
                                    little unorthodox to style components
                                    inline, but I think the justification is
                                    that rather than make changes to a global
                                    CSS style sheet, you can customize
                                    Chakra&apos;s default theme and apply the
                                    theme(s) globally or locally as you see fit.
                                    For this project, I stuck with the default
                                    theme and didn&apos;t feel too restricted by
                                    the decision.
                                </Text>
                                <Text
                                    fontWeight={"300"}
                                    fontSize={"xl"}
                                    color={"#666"}
                                    textAlign={"justify"}
                                >
                                    In building the back-end, I didn&apos;t know
                                    going in that Next.js offers its own{" "}
                                    <BodyLink
                                        to={
                                            "https://nextjs.org/docs/api-routes/introduction"
                                        }
                                    >
                                        API functionality
                                    </BodyLink>{" "}
                                    built in. This was turned out to be quite
                                    useful. I just build the API end points
                                    dynamically and created a function call to
                                    query the MongoDB database for the data that
                                    I needed. The routes were dynamic in that I
                                    could use the specific query in the URL in
                                    my function call.
                                </Text>
                                <Text
                                    fontWeight={"300"}
                                    fontSize={"xl"}
                                    color={"#666"}
                                    textAlign={"justify"}
                                >
                                    In using the Google API for Google Sheets, I
                                    had a lot of difficulty getting things to
                                    work. I found a wrapper called{" "}
                                    <BodyLink
                                        to={
                                            "https://www.npmjs.com/package/google-spreadsheet"
                                        }
                                    >
                                        google-spreadsheet
                                    </BodyLink>{" "}
                                    that made interacting with the Google
                                    Spreadsheet much simpler. There were other
                                    solutions that allowed you to provide a
                                    spreadsheet URL and get the data back as
                                    JSON, but the spreadsheet with the data I
                                    needed had duplicate column headers. This
                                    meant that I could only receive some of the
                                    data using either google-spreadsheet or the
                                    other solutions. To solve this, I had to
                                    make a copy of the data and change the
                                    column headers before parsing and pushing to
                                    my database.
                                </Text>
                                <Text
                                    fontWeight={"300"}
                                    fontSize={"xl"}
                                    color={"#666"}
                                    textAlign={"justify"}
                                >
                                    Lastly, I would have loved to deploy this
                                    site on AWS or Vercel, but I had to overcome
                                    the problem that I needed to scrape the
                                    spreadsheet data periodically to get the
                                    latest reviews. It turns out that Heroku
                                    allows users to run scripts from their
                                    project on a schedule (similar to a cron
                                    job). This meant that I could run a script
                                    to scrape the spreadsheet and push the data
                                    to the database on a regular basis. There
                                    was a small challenge in that I had to
                                    transpile the TypeScript to JavaScript
                                    first, but in the end I was able to get
                                    everything working as I intended.
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
                                    Overall, I really enjoyed the technology
                                    stack that I used to build this project. So
                                    much, in fact, that I created this portfolio
                                    web site with the same stack (minus
                                    MongoDB). I feel the outcome of the Course
                                    Analytics site is better than I expected and
                                    provides something that is useful for
                                    students. Some outstanding work that is to
                                    be done is to add testing with Jest. I could
                                    also make the API private and only
                                    accessible via a private key but for now
                                    that seems unnecessary. Feel free to check
                                    out the site{" "}
                                    <BodyLink
                                        to={
                                            "https://course-analytics.herokuapp.com/"
                                        }
                                    >
                                        here
                                    </BodyLink>{" "}
                                    and the GitHub repo{" "}
                                    <BodyLink
                                        to={
                                            "https://github.com/NicNol/course-analytics"
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

export default CourseAnalytics;
