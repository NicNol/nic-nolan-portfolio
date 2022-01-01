import type { NextPage } from "next";
import Head from "next/head";
import HeroBlockMini from "../../components/HeroBlockMini";
import PageWrapper from "../../components/PageWrapper";
import { Flex } from "@chakra-ui/react";
import BodyHeading from "../../components/BodyHeading";
import PortfolioCard from "../../components/PortfolioCard";
import porfolioProjects from "../../public/static/portfolioProjects.json";

const Portfolio: NextPage = () => {
    return (
        <>
            <Head>
                <title>Nic Nolan | Portfolio</title>
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
                    <BodyHeading>Porfolio Projects</BodyHeading>
                    <Flex
                        wrap={"wrap"}
                        columnGap={8}
                        rowGap={16}
                        justifyContent={"center"}
                        alignItems={"flex-start"}
                    >
                        {porfolioProjects.map((project) => (
                            <PortfolioCard
                                cardData={project}
                                key={project.title}
                            />
                        ))}
                    </Flex>
                </Flex>
            </PageWrapper>
        </>
    );
};

export default Portfolio;
