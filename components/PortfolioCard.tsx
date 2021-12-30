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
                        flexGrow={1}
                        backgroundImage={
                            "linear-gradient(to left, #9be15d 0%, #00e3ae 100%)"
                        }
                    >
                        <Flex
                            transition={".5s"}
                            filter={"opacity(75%)"}
                            height={"100%"}
                            w={"100%"}
                            _hover={{ filter: "opacity(100%)" }}
                        >
                            <Image
                                src={imageSrc}
                                alt={`${title} preview image`}
                                layout={"fill"}
                                objectFit={"contain"}
                                objectPosition={"50% 50%"}
                                quality={100}
                            />
                        </Flex>
                    </Center>
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
