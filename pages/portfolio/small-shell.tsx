import type { NextPage } from "next";
import Head from "next/head";
import HeroBlockMini from "../../components/Hero/HeroBlockMini";
import PageWrapper from "../../components/PageWrapper";
import { Box, Flex, Tag, Text } from "@chakra-ui/react";
import Image from "next/image";
import terminalImage from "../../public/images/portfolio/Small-Shell.png";
import BodyLink from "../../components/Body/BodyLink";
import BodyHeading from "../../components/Body/BodyHeading";
import BodyButton from "../../components/Body/BodyButton";

const SmallShell: NextPage = () => {
    const tags = ["C", "Shell Scripting"];

    return (
        <>
            <Head>
                <title>Nic Nolan | small shell</title>
                <meta charSet="UTF-8" />
                <meta
                    name="keywords"
                    content="Nic Nolan, Portfolio, Computer Science, Software Developer, Software Engineer"
                />
                <meta
                    name="description"
                    content="Portfolio website for Nic Nolan, a Software Developer from the United States"
                />
                <meta name="author" content="Nic Nolan" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
            </Head>
            <PageWrapper>
                <HeroBlockMini />
                <Flex
                    direction={"column"}
                    gap={8}
                    p={8}
                    textAlign={"justify"}
                    color={"#222"}
                    w={"100%"}
                >
                    <Flex direction={"column"} gap={4}>
                        <BodyHeading>small shell</BodyHeading>
                        <Flex wrap={"wrap"} gap={2}>
                            {tags.map((tag) => (
                                <Tag key={tag} size={"md"}>
                                    {tag}
                                </Tag>
                            ))}
                        </Flex>
                        <Text
                            fontWeight={"300"}
                            fontSize={"xl"}
                            color={"#666"}
                            textAlign={"justify"}
                        >
                            A miniature version of a Unix shell written in C,
                            small shell provides users with an interface to the
                            Unix system. It gathers input and executes programs
                            based on that input. When a program finishes
                            executing, it displays that program&apos;s output.
                            This program was developed as part of an assignment
                            for Oregon State University&apos; CS 344 Operating
                            Systems course.
                        </Text>
                    </Flex>
                    <Flex direction={"column"} gap={4}>
                        <Flex gap={4}>
                            <BodyButton
                                to={"https://github.com/NicNol/small-shell"}
                            >
                                View Source
                            </BodyButton>
                        </Flex>
                    </Flex>

                    <Flex
                        position={"relative"}
                        w={"100%"}
                        height={"100%"}
                        direction={"column"}
                        gap={8}
                    >
                        <BodyHeading size={"lg"}>Preview</BodyHeading>
                        <Flex direction={"column"} position={"relative"}>
                            <Box
                                border={"solid 1px #eee"}
                                borderRadius={8}
                                overflow={"hidden"}
                                boxShadow={"lg"}
                            >
                                <Image
                                    src={terminalImage}
                                    alt={
                                        "Preview of small shell running in a terminal"
                                    }
                                    layout={"responsive"}
                                    quality={100}
                                />
                            </Box>
                            <Text
                                fontWeight={"300"}
                                fontSize={"md"}
                                color={"#999"}
                                textAlign={"justify"}
                                p={[2, 4, 8, 16]}
                            >
                                Small shell creates a terminal or shell for the
                                user to process typical Unix commands with. The
                                shell ignores blank lines, excess whitespace,
                                and lines beginning with the # symbol
                                (comments). Small shell expands $$ strings
                                within arguments passed to the shell and expands
                                them into the shell&apos;s process ID (PID). It
                                has custom-built exit, cd, and status commands.
                                The program can execute other programs (and Unix
                                commands) by running small shell in the same
                                path as the program to be run. Small shell can
                                redirect input and output using the
                                &quot;&lt;&quot; and &quot;&gt;&quot; arguments
                                respectively. Example: The command{" "}
                                <code>wc &lt; file1 &gt; file 2</code> will call
                                the wc command using file1 in place of standard
                                input (stdin) and print the results to file2 in
                                place of standard output (stdout). The program
                                can run children processes in the foreground
                                (default) or in the background by using
                                &quot;&amp;&quot; as the last argument. This
                                command does not work with the exit, cd, or
                                status commands. The program has built-in
                                handling for SIGINT (CTRL+C) and SIGTSTP
                                (CTRL+Z) signals. SIGINT signals are ignored by
                                small shell, but terminate children processes
                                running in the foreground only. SIGTSTP prevents
                                children processes from running in the
                                background and can be toggled on and off.
                            </Text>
                        </Flex>
                        <Flex direction={"column"} rowGap={8}>
                            <Flex direction={"column"} rowGap={4}>
                                <BodyHeading>Technical Details</BodyHeading>
                                <Text
                                    fontWeight={"300"}
                                    fontSize={"xl"}
                                    color={"#666"}
                                    textAlign={"justify"}
                                >
                                    The following sections detail the problem
                                    that this project sought to solve, the
                                    associated challenges, the ultimate
                                    solution, and my final thoughts.
                                </Text>
                            </Flex>
                            <Flex direction={"column"} rowGap={4}>
                                <BodyHeading size={"lg"}>
                                    The Problem
                                </BodyHeading>
                                <Text
                                    fontWeight={"300"}
                                    fontSize={"xl"}
                                    color={"#666"}
                                    textAlign={"justify"}
                                >
                                    Small shell was originally assigned as part
                                    of a school assignment. The project
                                    requirements are quite extensive and can be
                                    read{" "}
                                    <BodyLink
                                        to={
                                            "https://github.com/NicNol/small-shell/blob/main/requirements.md"
                                        }
                                    >
                                        here
                                    </BodyLink>
                                    . In short, I had to develop a program in C
                                    that was able to replicate the functionality
                                    of a shell. This includes parsing user
                                    input, executing commands, creating children
                                    processes, and handling system signals.
                                </Text>
                            </Flex>
                            <Flex direction={"column"} rowGap={4}>
                                <BodyHeading size={"lg"}>
                                    Challenges
                                </BodyHeading>
                                <Text
                                    fontWeight={"300"}
                                    fontSize={"xl"}
                                    color={"#666"}
                                    textAlign={"justify"}
                                >
                                    The first challenge was to build a program
                                    that could continuously take user input in
                                    the manner that a shell normally does. The
                                    second challenge would be parsing the input
                                    and using flow control to execute the user
                                    commands. Another challenge was creating and
                                    managing children processes. Lastly, I would
                                    have to handle the signals SIGINT (CTRL+C)
                                    and SIGTSTP (CTRL+Z) when inputted from the
                                    user.
                                </Text>
                            </Flex>
                            <Flex direction={"column"} rowGap={4}>
                                <BodyHeading size={"lg"}>
                                    The Solution
                                </BodyHeading>
                                <Text
                                    fontWeight={"300"}
                                    fontSize={"xl"}
                                    color={"#666"}
                                    textAlign={"justify"}
                                >
                                    To get user input, I used the C{" "}
                                    <code>getchar</code> method in a while loop.
                                    This allowed me to copy input from STDIN one
                                    character at a time. When the new line
                                    character (&apos;\n&apos;) was observed, I
                                    would not copy that character but instead
                                    terminate the input string with a
                                    terminating character (&apos;\0&apos;). To
                                    parse input, I utilized the C{" "}
                                    <code>strtok_r</code> method described{" "}
                                    <BodyLink
                                        to={
                                            "https://man7.org/linux/man-pages/man3/strtok.3.html"
                                        }
                                    >
                                        here
                                    </BodyLink>
                                    . This allowed me to put each user argument
                                    into an array which would be useful later on
                                    when processes could be run in the
                                    background by using <code>&amp;</code> as
                                    the final argument.
                                </Text>
                                <Text
                                    fontWeight={"300"}
                                    fontSize={"xl"}
                                    color={"#666"}
                                    textAlign={"justify"}
                                >
                                    With an array of user arguments, I could
                                    then determine how to proceed by checking
                                    the first argument. If the special commands{" "}
                                    <code>cd</code> or <code>status</code> were
                                    called, a function was called to process
                                    these cases. All other commands required us
                                    to create a child process. Children
                                    processes can either be ran in the
                                    foreground or in the background. Foreground
                                    processes are relatively simple because we
                                    can use{" "}
                                    <BodyLink
                                        to={
                                            "https://man7.org/linux/man-pages/man3/waitpid.3p.html"
                                        }
                                    >
                                        waitpid
                                    </BodyLink>{" "}
                                    in the parent process to wait until the
                                    child process is terminated before
                                    proceeding. Background processes are more
                                    complicated because I had to create a way to
                                    store the process ID (PID) for each child
                                    process and periodically check if it was
                                    still alive. I decided to create a linked
                                    list of structs. Each struct held a process
                                    ID and the next node in the linked list. I
                                    felt this was the best approach because I
                                    would always have to check each process ID
                                    to see if it was alive. An array would be
                                    potentially be slower because it would have
                                    empty indices after background processes
                                    terminated. With an array, I would have also
                                    to implement extra overhead to restructure
                                    the array based on the number of background
                                    processes. Finally, I would traverse the
                                    entire linked list of background process IDs
                                    before accepting new user input to check for
                                    terminated processes and print the
                                    terminated PID to STDOUT. If a process had
                                    terminated, I would remove it from the
                                    linked list, linking the previous and next
                                    node in the list as applicable.
                                </Text>
                                <Text
                                    fontWeight={"300"}
                                    fontSize={"xl"}
                                    color={"#666"}
                                    textAlign={"justify"}
                                >
                                    Perhaps the most difficult part of this
                                    project was implementing signal management.
                                    Signals like SIGINT (Ctrl-C) allow the user
                                    to kill processes. This is default behavior
                                    for most programs, but for our shell we
                                    wanted to modify the default behavior of
                                    SIGINT. Instead of killing our shell, we
                                    wanted to kill foreground processes with the
                                    SIGINT signal. We can do that using the{" "}
                                    <BodyLink
                                        to={
                                            "https://man7.org/linux/man-pages/man3/sigfillset.3p.html"
                                        }
                                    >
                                        sigfillset
                                    </BodyLink>{" "}
                                    method. These settings are not passed to
                                    children processes, so the processes
                                    terminate as normal when Ctrl-C is pressed.
                                    The SIGTSTP signal (Ctrl-Z) was used to
                                    toggle between allowing and disallowing
                                    background processes. It also required that
                                    we stash signal-related messages like
                                    &quot;Entering foreground-only mode (&amp;
                                    is now ignored)&quot; until the foreground
                                    process had terminated. I utilized a linked
                                    list for this as well because it was
                                    indeterminate how many messages could be
                                    stashed while the foreground process was
                                    running.
                                </Text>
                            </Flex>
                            <Flex direction={"column"} rowGap={4}>
                                <BodyHeading size={"lg"}>
                                    Final Thoughts
                                </BodyHeading>
                                <Text
                                    fontWeight={"300"}
                                    fontSize={"xl"}
                                    color={"#666"}
                                    textAlign={"justify"}
                                >
                                    This was a challenging project for a variety
                                    of reasons. What helped me solve these
                                    challenges was breaking things down into
                                    smaller problems and working on solving them
                                    one by one. It was also helpful to spend
                                    some time thinking about the overall program
                                    architecture before implementing certain
                                    features. For example, thinking about what
                                    the best data structure was to keep track of
                                    signal messages or background processes that
                                    had not terminated yet. I also gained
                                    confidence in my C programming skills and my
                                    ability to read C manual pages.
                                </Text>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </PageWrapper>
        </>
    );
};

export default SmallShell;
