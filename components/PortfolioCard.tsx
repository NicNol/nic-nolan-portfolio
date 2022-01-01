import React, { FC } from "react";
import {
    background,
    Box,
    Button,
    Center,
    Flex,
    Heading,
    Link,
    Tag,
    Text,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import Image from "next/image";
import BodyLink from "./BodyLink";
import { default as NextLink } from "next/link";

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
                            "linear-gradient(320deg, #9be15d99 0%, #00e3ae99 100%)"
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
                    <Flex width={"100%"} px={6} pt={4} pb={1}>
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
                        <NextLink href={link} passHref>
                            <Link
                                _hover={{
                                    textDecoration: "none",
                                }}
                            >
                                <Button
                                    backgroundImage={
                                        "linear-gradient(to left, #9be15d 0%, #00e3ae 100%)"
                                    }
                                    backgroundPosition={"bottom center"}
                                    backgroundRepeat={"no-repeat"}
                                    backgroundSize={"100% 0%"}
                                    transition={".3s"}
                                    _focus={{ outline: "none" }}
                                    _hover={{
                                        backgroundSize: "100% 10%",
                                        backgroundColor: "gray.200",
                                    }}
                                    _active={{
                                        backgroundSize: "100% 10%",
                                        backgroundColor: "gray.300",
                                    }}
                                    fontWeight={"300"}
                                    rightIcon={<ArrowForwardIcon />}
                                    borderRadius={32}
                                    boxShadow={"md"}
                                >
                                    View Details
                                </Button>
                            </Link>
                        </NextLink>
                    </Flex>
                </Flex>
            </Box>
        </Center>
    );
};

export default PortfolioCard;
