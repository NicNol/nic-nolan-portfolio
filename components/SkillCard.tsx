import React, { FC } from "react";
import { Box, Center, Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import Image from "next/image";

interface SkillCardProps {
    name: string;
    src: StaticImageData;
}

const SkillCard: FC<SkillCardProps> = ({ name, src }) => {
    const imageDimension = useBreakpointValue({ base: "90px", sm: "120px" });

    return (
        <Center
            w={["160px", "200px"]}
            h={["160px", "200px"]}
            borderRadius={["40px", "50px"]}
            boxShadow={"lg"}
            border={"1px solid #eee"}
            backgroundColor={"white"}
        >
            <Box
                w={"100%"}
                h={"100%"}
                borderRadius={["38px", "48px"]}
                overflow={"hidden"}
            >
                <Flex
                    direction={"column"}
                    justifyContent={"flex-end"}
                    alignItems={"center"}
                    w={"100%"}
                    h={"100%"}
                >
                    <Center width={"100%"} flexGrow={"1"}>
                        <Image
                            src={src}
                            alt={`${name} logo`}
                            width={imageDimension}
                            height={imageDimension}
                        />
                    </Center>
                    <Box w={"60%"} h={"1px"} backgroundColor={"#eee"}></Box>
                    <Center w={"100%"} h={"25%"} p={6}>
                        <Text
                            textAlign={"center"}
                            lineHeight={1}
                            fontSize={["0.9em", "1em"]}
                        >
                            {name}
                        </Text>
                    </Center>
                </Flex>
            </Box>
        </Center>
    );
};

export default SkillCard;
