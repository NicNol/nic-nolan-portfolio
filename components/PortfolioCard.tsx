import React, { FC } from "react";
import {
    Box,
    Button,
    Center,
    Flex,
    Heading,
    Tag,
    Text,
} from "@chakra-ui/react";
import Image from "next/image";
import BodyLink from "./BodyLink";

interface PortfolioCardProps {
    cardData: CardData;
}

interface CardData {
    title: string;
    tags: string[];
    description: string;
    link: string;
    imageSrc: string;
}

const PortfolioCard: FC<PortfolioCardProps> = ({ cardData }) => {
    const { title, tags, description, link, imageSrc } = cardData;
    return (
        <Center
            w={"100%"}
            h={"650px"}
            maxW={"550px"}
            borderRadius={6}
            boxShadow={"xl"}
            border={"1px solid #eee"}
            backgroundColor={"white"}
        >
            <Box
                w={"100%"}
                borderRadius={6}
                overflow={"hidden"}
                height={"100%"}
            >
                <Flex
                    direction={"column"}
                    alignItems={"center"}
                    w={"100%"}
                    height={"100%"}
                >
                    <Flex
                        overflow={"hidden"}
                        width={"100%"}
                        flexGrow={1}
                        backgroundImage={
                            "linear-gradient(320deg, #9be15d 0%, #00e3ae 100%)"
                        }
                    >
                        <Flex height={"100%"} w={"100%"} position={"relative"}>
                            <Image
                                src={imageSrc}
                                alt={`${title} preview image`}
                                layout={"fill"}
                                objectFit={"contain"}
                                objectPosition={"center center"}
                                quality={100}
                            />
                        </Flex>
                    </Flex>
                    <Flex width={"100%"} px={6} py={4}>
                        <Heading fontSize={"2xl"}>
                            <BodyLink to={link}>{title}</BodyLink>
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
                        {tags.map((tag) => (
                            <Tag fontWeight={"300"} key={title + tag}>
                                {tag}
                            </Tag>
                        ))}
                    </Flex>

                    <Flex w={"100%"} px={6} pb={4}>
                        <Text color={"#666"} fontSize={"md"} fontWeight={"300"}>
                            {description}
                        </Text>
                    </Flex>

                    <Flex pb={4} px={6} gap={2}>
                        <Button>Read More</Button>
                    </Flex>
                </Flex>
            </Box>
        </Center>
    );
};

export default PortfolioCard;
