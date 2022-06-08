import type { NextPage } from "next";
import Head from "next/head";
import HeroBlockMini from "../../components/Hero/HeroBlockMini";
import PageWrapper from "../../components/PageWrapper";
import { Box, Flex, Tag, Text } from "@chakra-ui/react";
import Image from "next/image";
import homeImage from "../../public/images/portfolio/Mockdata-U-Homepage.png";
import mockStudentImage from "../../public/images/portfolio/Mockdata-U-Student.png";
import BodyLink from "../../components/Body/BodyLink";
import BodyHeading from "../../components/Body/BodyHeading";
import BodyButton from "../../components/Body/BodyButton";

const MockDataU: NextPage = () => {
    const tags = [
        "JavaScript",
        "React",
        "Next.js",
        "Chakra UI",
        "Node.js",
        "Faker.js",
    ];

    return (
        <>
            <Head>
                <title>Nic Nolan | MockData U.</title>
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
                        <BodyHeading>Mock Data U.</BodyHeading>
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
                            MockData U. is a website that allows users to mock
                            fake but realistic data related to a college or
                            university. The project is intended for software
                            developers and UI designers of educational software.
                            It allows users to generate data for one or more
                            students, classes, or universities using an API or a
                            GUI.
                        </Text>
                    </Flex>
                    <Flex direction={"column"} gap={4}>
                        <Flex gap={4}>
                            <BodyButton to={"https://mockdata-u.vercel.app/"}>
                                View Demo
                            </BodyButton>
                            <BodyButton
                                to={"https://github.com/NicNol/mockdata-u"}
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
                                    src={homeImage}
                                    alt={"Preview of the MockData U. Home Page"}
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
                                Above is the MockData U. home page. It allows
                                users to select the type of data that they would
                                like to mock and specifies the type of data that
                                can be mocked with each choice.
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
                                    src={mockStudentImage}
                                    alt={"Preview of the Mock Student page"}
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
                                Above is an example of how data can be mocked.
                                Three students are shown mocked by default.
                                Users can use the settings menu to select what
                                information they want to display or how many
                                students to create when the &quot;Mock More
                                Data&quot; button is clicked. Data can be copied
                                as plaintext using the &quot;Copy All Data&quot;
                                button or by clicking the &quot;Copy&quot;
                                button on an individual card. Data can be copied
                                as JSON by using the card context menu.
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
                                    school assignment. I was to create a project
                                    with any technology stack that I desired.
                                    There were no limitations on what the
                                    project had to do, on its scope, or how it
                                    was implemented. The only requirement was
                                    that we ultimately would have to utilize a
                                    microservice created by a fellow classmate.
                                </Text>
                                <Text
                                    fontWeight={"300"}
                                    fontSize={"xl"}
                                    color={"#666"}
                                    textAlign={"justify"}
                                >
                                    I had recently learned about the{" "}
                                    <BodyLink to={"https://fakerjs.dev/"}>
                                        Faker library
                                    </BodyLink>{" "}
                                    and was interested in creating my own fake
                                    but realistic data for a specialized
                                    purpose. I ultimately chose to create fake
                                    data related to an educational setting like
                                    a college or university. This provided a lot
                                    of leeway to create basic features and leave
                                    room to expand as I had more time.
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
                                    The first challenge in creating my project
                                    was to design a user interface (UI). This
                                    was important because I wanted to create a
                                    service that allowed users to be highly
                                    effective. This meant that mocking data had
                                    to be an efficient yet flexible process.
                                </Text>
                                <Text
                                    fontWeight={"300"}
                                    fontSize={"xl"}
                                    color={"#666"}
                                    textAlign={"justify"}
                                >
                                    The next challenge was how to create the
                                    fake but realistic data. I knew that I could
                                    implement Faker.js for some of the data, but
                                    for university names and class names I would
                                    be on my own.
                                </Text>
                                <Text
                                    fontWeight={"300"}
                                    fontSize={"xl"}
                                    color={"#666"}
                                    textAlign={"justify"}
                                >
                                    Lastly, I needed to implement a
                                    teammate&apos;s microservice into my
                                    project. Because microservice implementation
                                    was a later assignment in the project, I had
                                    to remain flexible because I didn&apos;t
                                    know what microservice(s) my teammates would
                                    feel comfortable creating on a short
                                    timeline.
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
                                    As part of our class assignment, we were
                                    required to design a low fidelity UI that
                                    followed{" "}
                                    <BodyLink
                                        to={
                                            "https://gendermag.org/Docs/Cognitive-Style-Heuristics-from-the-GenderMag-Project-2021-03-07-1537.pdf"
                                        }
                                    >
                                        cognitive style heuristics
                                    </BodyLink>
                                    . This was a useful exercise because my
                                    typical design process is to build a UI
                                    first and tweak it as I go along. I created
                                    my UI design in black and white using a
                                    graphics program to imagine what the layout
                                    should look like and what visual elements
                                    should be present to support the user
                                    experience. When it came time to code the
                                    user interface, I felt like I knew exactly
                                    what I wanted to do. It was much more
                                    efficient than my normal method of adjusting
                                    the UI as I go along!
                                </Text>
                                <Text
                                    fontWeight={"300"}
                                    fontSize={"xl"}
                                    color={"#666"}
                                    textAlign={"justify"}
                                >
                                    To create fake university names, I utilized
                                    Faker to get fake city names. I was able to
                                    concatenate these city names with the names
                                    of institutions such as &quot;College&quot;,
                                    &quot;University&quot;,
                                    &quot;Institute&quot;, etc. to create a
                                    realistic sounding higher education body.
                                    For example, I just created some mock data
                                    and created Waterloo University, North
                                    Adolphborough College, and Pollytown
                                    Institute.
                                </Text>
                                <Text
                                    fontWeight={"300"}
                                    fontSize={"xl"}
                                    color={"#666"}
                                    textAlign={"justify"}
                                >
                                    To create fake class names, I found a list
                                    of different subjects offered by my
                                    university (Oregon State University). Each
                                    subject had its own two-, three-, or
                                    four-letter abbreviation that I could use to
                                    prefix the class number. For example,
                                    Biology&apos;s abbreviation was
                                    &quot;BIO&quot; and Forestry&apos;s
                                    abbreviation was &quot;FOR&quot;. I then
                                    added a number from 100 to 499 after the
                                    subject abbreviation to create a realistic
                                    sounding course.
                                </Text>
                                <Text
                                    fontWeight={"300"}
                                    fontSize={"xl"}
                                    color={"#666"}
                                    textAlign={"justify"}
                                >
                                    Perhaps the greatest challenge of this
                                    project was implementing my teammate&apos;s
                                    microservice. From my internship experience
                                    and independent learning, I expected to
                                    implement my microservice using a web API.
                                    My instructor clarified late in the term
                                    that the microservice could be as simple as
                                    running a program locally to generate data
                                    in a text file. My teammate&apos;s opted for
                                    this simpler approach. This required me to
                                    flex my creative muscles to utilize one of
                                    my teammate&apos;s microservices written in
                                    Python and intended for local development
                                    only.
                                </Text>
                                <Text
                                    fontWeight={"300"}
                                    fontSize={"xl"}
                                    color={"#666"}
                                    textAlign={"justify"}
                                >
                                    One teammate created microservice that takes
                                    a keyword from a text file and saves an
                                    image URL from Wikipedia on a page related
                                    to that keyword. This allowed me to obtain
                                    images related to my project by searching
                                    for student, class, and university keywords.
                                    The images on the homepage were obtained by
                                    using my teammate&apos;s microservice. I
                                    then had to create a script to save the
                                    images locally so that they could be
                                    optimized by Next.js upon project
                                    deployment.
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
                                    Overall, I&apos;m happy with the final
                                    product that I created. I created a project
                                    that serves a real-world purpose and there
                                    is still a lot of room for additional
                                    features. At this time, I don&apos;t intend
                                    to continue work on this project, but I
                                    would like to add test coverage for the
                                    existing features as time permits. You can
                                    view the website{" "}
                                    <BodyLink
                                        to={"https://mockdata-u.vercel.app/"}
                                    >
                                        here
                                    </BodyLink>{" "}
                                    and the GitHub repo{" "}
                                    <BodyLink
                                        to={
                                            "https://github.com/NicNol/mockdata-u"
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

export default MockDataU;
