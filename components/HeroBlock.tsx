import React, { FC } from "react";
import Image from "next/image";
import profilePic from "../public/images/nic.jpg";
import { Box, Flex, Heading } from "@chakra-ui/react";
import SocialLinks from "./SocialLinks";

interface HeroBlockProps {}

const HeroBlock: FC<HeroBlockProps> = ({}) => {
    return (
        <Flex wrap={"wrap"} justifyContent={"center"} my={[16, 32, 48]} gap={8}>
            <Box
                borderRadius={"75px"}
                overflow={"hidden"}
                width={"300px"}
                height={"300px"}
                boxShadow={"2xl"}
            >
                <Image
                    src={profilePic}
                    alt="Picture of Nic Nolan"
                    priority
                    width={"300px"}
                    height={"300px"}
                    quality={100}
                />
            </Box>
            <Flex
                direction={"column"}
                h={"300px"}
                justifyContent={"flex-start"}
                cursor={"default"}
                userSelect={"none"}
            >
                <Heading color={"#222"} size={"xl"}>
                    Hello!
                </Heading>
                <Heading fontWeight={"300"} color={"#222"} size={"lg"}>
                    My name is
                </Heading>
                <Heading
                    bgGradient={
                        "linear-gradient(to top, #4481eb 0%, #04befe 100%)"
                    }
                    bgClip={"text"}
                    display={"block"}
                    size={"4xl"}
                    fontWeight={"700"}
                >
                    Nic Nolan
                </Heading>
                <Heading fontWeight={"300"} color={"#222"} size={"lg"}>
                    and I am a
                </Heading>
                <Box>
                    <Heading
                        px={1}
                        position={"relative"}
                        right={1}
                        transition={"1s"}
                        textShadow={"1px 1px #fff"}
                        backgroundImage={
                            "linear-gradient(to left, #4481eb 0%, #04befe 100%)"
                        }
                        backgroundPosition={"center bottom"}
                        backgroundRepeat={"no-repeat"}
                        backgroundSize={"100% 10%"}
                        display={"inline-block"}
                        _hover={{
                            backgroundSize: "100% 100%",
                            color: "white",
                            textShadow: "1px 1px #333",
                        }}
                    >
                        Software Engineer
                    </Heading>
                </Box>
                <Heading fontWeight={"300"} color={"#222"} size={"lg"}>
                    from Portland, Oregon.
                </Heading>
                <SocialLinks />
            </Flex>
        </Flex>
    );
};

export default HeroBlock;
