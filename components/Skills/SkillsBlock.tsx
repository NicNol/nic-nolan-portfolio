import React, { FC } from "react";
import { Flex, Text } from "@chakra-ui/react";
import BodyHeading from "../Body/BodyHeading";
import SkillCard from "./SkillCard";
import PythonLogo from "../../public/images/icons/Python.svg";
import JavaScriptLogo from "../../public/images/icons/JavaScript.svg";
import TypeScriptLogo from "../../public/images/icons/TypeScript.svg";
import VBALogo from "../../public/images/icons/VBA.svg";
import ReactLogo from "../../public/images/icons/React.svg";
import NextLogo from "../../public/images/icons/Next.svg";
import MongoDBLogo from "../../public/images/icons/MongoDB.svg";
import ExpressLogo from "../../public/images/icons/Express.svg";
import HerokuLogo from "../../public/images/icons/Heroku.svg";
import GitLogo from "../../public/images/icons/Git.svg";
import CLogo from "../../public/images/icons/C.svg";
import CppLogo from "../../public/images/icons/Cpp.svg";
import JavaLogo from "../../public/images/icons/Java.svg";
import PHPLogo from "../../public/images/icons/PHP.svg";
import VercelLogo from "../../public/images/icons/Vercel.svg";
import MariaDBLogo from "../../public/images/icons/MariaDB.svg";
import DockerLogo from "../../public/images/icons/Docker.svg";
import AWSLogo from "../../public/images/icons/AWS.svg";
import KotlinLogo from "../../public/images/icons/Kotlin.svg";
import AndroidLogo from "../../public/images/icons/Android.svg";
import CypressLogo from "../../public/images/icons/Cypress.svg";

interface SkillsBlockProps {}

const SkillsBlock: FC<SkillsBlockProps> = () => {
    return (
        <Flex
            direction={"column"}
            alignItems={"center"}
            py={16}
            px={6}
            rowGap={32}
            id={"skills"}
        >
            <Flex direction={"column"} rowGap={12}>
                <Flex
                    w={"100%"}
                    justifyContent={"flex-start"}
                    direction={"column"}
                >
                    <BodyHeading>Experienced With</BodyHeading>
                    <Text
                        fontWeight={"300"}
                        fontSize={"xl"}
                        color={"#999"}
                        textAlign={"justify"}
                    >
                        Languages and technologies that I have used to build
                        full applications
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
                    <SkillCard name={"Cypress.io"} src={CypressLogo} />
                    <SkillCard name={"MariaDB (SQL)"} src={MariaDBLogo} />
                    <SkillCard name={"Heroku"} src={HerokuLogo} />
                    <SkillCard name={"Git"} src={GitLogo} />
                </Flex>
            </Flex>
            <Flex direction={"column"} rowGap={12}>
                <Flex
                    w={"100%"}
                    justifyContent={"flex-start"}
                    direction={"column"}
                >
                    <BodyHeading>Familiar With</BodyHeading>
                    <Text
                        fontWeight={"300"}
                        fontSize={"xl"}
                        color={"#999"}
                        textAlign={"justify"}
                    >
                        Languages and technologies that I have worked with to
                        create small-scale solutions
                    </Text>
                </Flex>
                <Flex wrap={"wrap"} gap={8} justifyContent={"center"}>
                    <SkillCard name={"C"} src={CLogo} />
                    <SkillCard name={"C++"} src={CppLogo} />
                    <SkillCard name={"Java"} src={JavaLogo} />
                    <SkillCard name={"PHP"} src={PHPLogo} />
                    <SkillCard name={"Vercel"} src={VercelLogo} />
                </Flex>
            </Flex>
            <Flex direction={"column"} rowGap={12}>
                <Flex
                    w={"100%"}
                    justifyContent={"flex-start"}
                    direction={"column"}
                >
                    <BodyHeading>Interested In</BodyHeading>
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
                    <SkillCard name={"Docker"} src={DockerLogo} />
                    <SkillCard name={"Amazon Web Services"} src={AWSLogo} />
                    <SkillCard name={"Kotlin"} src={KotlinLogo} />
                    <SkillCard name={"Android Development"} src={AndroidLogo} />
                </Flex>
            </Flex>
        </Flex>
    );
};

export default SkillsBlock;
