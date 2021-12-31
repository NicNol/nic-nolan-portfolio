import type { NextPage } from "next";
import Head from "next/head";
import HeroBlockMini from "../../components/HeroBlockMini";
import PageWrapper from "../../components/PageWrapper";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import BodyLink from "../../components/BodyLink";
import BodyHeading from "../../components/BodyHeading";

const CourseAnalytics: NextPage = () => {
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
                    fontSize={"xl"}
                    textAlign={"justify"}
                    color={"#222"}
                >
                    <BodyHeading>Course Analytics</BodyHeading>
                </Flex>
            </PageWrapper>
        </>
    );
};

export default CourseAnalytics;
