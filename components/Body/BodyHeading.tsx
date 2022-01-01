import React, { FC } from "react";
import { Box, Heading } from "@chakra-ui/react";

interface BodyHeadingProps {
    children: any;
    size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
}

const BodyHeading: FC<BodyHeadingProps> = ({ children, size = "xl" }) => {
    return (
        <Box>
            <Heading
                size={size}
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
