import React, { FC } from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import SkillCard from "./SkillCard";
import PythonLogo from "../public/images/icons/Python.svg";
import JavaScriptLogo from "../public/images/icons/JavaScript.svg";
import TypeScriptLogo from "../public/images/icons/TypeScript.svg";
import VBALogo from "../public/images/icons/VBA.svg";
import ReactLogo from "../public/images/icons/React.svg";
import NextLogo from "../public/images/icons/Next.svg";
import MongoDBLogo from "../public/images/icons/MongoDB.svg";
import ExpressLogo from "../public/images/icons/Express.svg";
import GitLogo from "../public/images/icons/Git.svg";
import CLogo from "../public/images/icons/C.svg";
import CppLogo from "../public/images/icons/Cpp.svg";
import JavaLogo from "../public/images/icons/Java.svg";
import MariaDBLogo from "../public/images/icons/MariaDB.svg";
import JiraLogo from "../public/images/icons/Jira.svg";
import JestLogo from "../public/images/icons/Jest.svg";
import DockerLogo from "../public/images/icons/Docker.svg";
import AWSLogo from "../public/images/icons/AWS.svg";
import KotlinLogo from "../public/images/icons/Kotlin.svg";
import AndroidLogo from "../public/images/icons/Android.svg";

interface SkillsBlockProps {}

const SkillsBlock: FC<SkillsBlockProps> = ({}) => {
    return (
        <Flex
            direction={"column"}
            alignItems={"center"}
            py={16}
            px={6}
            rowGap={16}
        >
            <Flex w={"100%"} justifyContent={"flex-start"} direction={"column"}>
                <Box>
                    <Heading
                        backgroundImage={
                            "linear-gradient(to left, #9be15d 0%, #00e3ae 100%)"
                        }
                        backgroundPosition={"center bottom"}
                        backgroundRepeat={"no-repeat"}
                        backgroundSize={"100% 10%"}
                        display={"inline-block"}
                    >
                        Experienced
                    </Heading>
                </Box>
                <Text
                    fontWeight={"300"}
                    fontSize={"xl"}
                    color={"#999"}
                    textAlign={"justify"}
                >
                    Languages and technologies that I have used to build full
                    applications
                </Text>
            </Flex>
            <Flex wrap={"wrap"} gap={8} justifyContent={"center"}>
                <SkillCard name={"Python"} src={PythonLogo} />
                <SkillCard name={"JavaScript"} src={JavaScriptLogo} />
                <SkillCard name={"TypeScript"} src={TypeScriptLogo} />
                <SkillCard
                    name={"Visual Basic for Applications"}
                    src={VBALogo}
                />
                <SkillCard name={"React"} src={ReactLogo} />
                <SkillCard name={"Next.js"} src={NextLogo} />
                <SkillCard name={"MongoDB (NoSQL)"} src={MongoDBLogo} />
                <SkillCard name={"Express"} src={ExpressLogo} />
                <SkillCard name={"Git"} src={GitLogo} />
            </Flex>

            <Flex w={"100%"} justifyContent={"flex-start"} direction={"column"}>
                <Box>
                    <Heading
                        backgroundImage={
                            "linear-gradient(to left, #9be15d 0%, #00e3ae 100%)"
                        }
                        backgroundPosition={"center bottom"}
                        backgroundRepeat={"no-repeat"}
                        backgroundSize={"100% 10%"}
                        display={"inline-block"}
                    >
                        Familiar
                    </Heading>
                </Box>
                <Text
                    fontWeight={"300"}
                    fontSize={"xl"}
                    color={"#999"}
                    textAlign={"justify"}
                >
                    Languages and technologies that I have worked with to create
                    small-scale solutions
                </Text>
            </Flex>
            <Flex wrap={"wrap"} gap={8} justifyContent={"center"}>
                <SkillCard name={"C"} src={CLogo} />
                <SkillCard name={"C++"} src={CppLogo} />
                <SkillCard name={"Java"} src={JavaLogo} />
                <SkillCard name={"MariaDB (SQL)"} src={MariaDBLogo} />
                <SkillCard name={"Jira"} src={JiraLogo} />
            </Flex>

            <Flex w={"100%"} justifyContent={"flex-start"} direction={"column"}>
                <Box>
                    <Heading
                        backgroundImage={
                            "linear-gradient(to left, #9be15d 0%, #00e3ae 100%)"
                        }
                        backgroundPosition={"center bottom"}
                        backgroundRepeat={"no-repeat"}
                        backgroundSize={"100% 9%"}
                        display={"inline-block"}
                    >
                        Interested
                    </Heading>
                </Box>
                <Text
                    fontWeight={"300"}
                    fontSize={"xl"}
                    color={"#999"}
                    textAlign={"justify"}
                >
                    Languages and technologies that I am learning and
                    incorporating into my work
                </Text>
            </Flex>
            <Flex wrap={"wrap"} gap={8} justifyContent={"center"}>
                <SkillCard name={"Jest"} src={JestLogo} />
                <SkillCard name={"Docker"} src={DockerLogo} />
                <SkillCard name={"Amazon Web Services"} src={AWSLogo} />
                <SkillCard name={"Kotlin"} src={KotlinLogo} />
                <SkillCard name={"Android Development"} src={AndroidLogo} />
            </Flex>
        </Flex>
    );
};

export default SkillsBlock;
