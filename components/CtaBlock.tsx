import React, { FC } from "react";
import { Box, Flex } from "@chakra-ui/react";
import CtaButton from "../components/CtaButton";

interface CtaBlockProps {}

const CtaBlock: FC<CtaBlockProps> = ({}) => {
    return (
        <Flex
            gap={[8, null, 12]}
            justifyContent={"center"}
            w={"100%"}
            direction={["column", null, "row"]}
            px={8}
            pb={32}
        >
            <CtaButton to="/about">Learn about me</CtaButton>
            <CtaButton to="/portfolio">Explore my work</CtaButton>
            <CtaButton to="#skills">View my skills</CtaButton>
        </Flex>
    );
};

export default CtaBlock;
