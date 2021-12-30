import React, { FC } from "react";
import {
    Box,
    Button,
    ButtonGroup,
    Center,
    Flex,
    Heading,
    Tag,
    Text,
} from "@chakra-ui/react";
import Image from "next/image";
import CourseAnalytics from "../public/images/portfolio/Course-Analytics-Course.png";
import BodyLink from "./BodyLink";

interface PortfolioCardProps {
    children: any;
}

const PortfolioCard: FC<PortfolioCardProps> = ({ children }) => {
    return (
        <Center
            w={"100%"}
            maxW={"550px"}
            borderRadius={["40px", "50px"]}
            boxShadow={"xl"}
            border={"1px solid #eee"}
            backgroundColor={"white"}
        >
            <Box
                w={"100%"}
                borderRadius={["38px", "48px"]}
                overflow={"hidden"}
                height={"100%"}
            >
                <Flex
                    direction={"column"}
                    justifyContent={"flex-end"}
                    alignItems={"center"}
                    w={"100%"}
                    height={"100%"}
                >
                    <Center
                        overflow={"hidden"}
                        width={"100%"}
                        backgroundImage={
                            "linear-gradient(to left, #9be15d 0%, #00e3ae 100%)"
                        }
                    >
                        <Flex filter={"opacity(60%)"} height={"100%"}>
                            <Image
                                src={CourseAnalytics}
                                alt={"image"}
                                height={"900px"}
                                objectFit={"cover"}
                                objectPosition={"100% 0%"}
                            />
                        </Flex>
                    </Center>
                    <Flex width={"100%"} px={6} py={1}>
                        <Heading fontSize={"2xl"}>
                            <BodyLink>Course Analytics</BodyLink>
                        </Heading>
                    </Flex>
                    <Flex
                        width={"100%"}
                        wrap={"wrap"}
                        py={1}
                        px={6}
                        gap={1}
                        cursor={"default"}
                    >
                        <Tag fontWeight={"300"}>TypeScript</Tag>
                        <Tag fontWeight={"300"}>Next.js</Tag>
                        <Tag fontWeight={"300"}>React</Tag>
                        <Tag fontWeight={"300"}>Chakra UI</Tag>
                        <Tag fontWeight={"300"}>MongoDB</Tag>
                    </Flex>

                    <Flex w={"100%"} px={6} pb={4}>
                        <Text color={"#666"} fontSize={"md"} fontWeight={"300"}>
                            Course Analytics was developed for students of
                            Oregon State University&apos;s Computer Science
                            program. It provides students with aggregated data
                            and tips to help students understand the difficulty,
                            time commitment, common course pairings. The data
                            has been submitted by real students.
                        </Text>
                    </Flex>

                    <Flex pb={4} px={6} gap={2}>
                        <ButtonGroup>
                            <Button>Read More</Button>
                            <Button>View Demo</Button>
                            <Button>View Source</Button>
                        </ButtonGroup>
                    </Flex>
                </Flex>
            </Box>
        </Center>
    );
};

export default PortfolioCard;
