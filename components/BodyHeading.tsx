import React, { FC } from "react";
import { Box, Heading } from "@chakra-ui/react";

interface BodyHeadingProps {
    children: any;
}

const BodyHeading: FC<BodyHeadingProps> = ({ children }) => {
    return (
        <Box>
            <Heading
                size={"xl"}
                backgroundImage={
                    "linear-gradient(to left, #9be15d 0%, #00e3ae 100%)"
                }
                backgroundPosition={"center bottom"}
                backgroundRepeat={"no-repeat"}
                backgroundSize={"100% 10%"}
                display={"inline-block"}
            >
                {children}
            </Heading>
        </Box>
    );
};

export default BodyHeading;
