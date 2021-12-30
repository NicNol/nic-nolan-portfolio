import React, { FC } from "react";
import Image from "next/image";
import profilePic from "../public/images/nic.jpg";
import { Box, Flex, Heading } from "@chakra-ui/react";
import SocialLinks from "./SocialLinks";

interface HeroBlockMiniProps {}

const HeroBlockMini: FC<HeroBlockMiniProps> = ({}) => {
    return (
        <Flex wrap={"wrap"} justifyContent={"center"} my={[8, 16, 24]} gap={8}>
            <Box
                borderRadius={"50px"}
                overflow={"hidden"}
                width={"200px"}
                height={"200px"}
                boxShadow={"xl"}
            >
                <Image
                    src={profilePic}
                    alt="Picture of Nic Nolan"
                    priority
                    width={"200px"}
                    height={"200px"}
                />
            </Box>
            <Flex
                direction={"column"}
                justifyContent={"flex-end"}
                cursor={"default"}
                userSelect={"none"}
            >
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
                <Box>
                    <Heading
                        transition={"1s"}
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
                <SocialLinks />
            </Flex>
        </Flex>
    );
};

export default HeroBlockMini;
