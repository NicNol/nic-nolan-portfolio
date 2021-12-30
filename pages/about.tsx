import type { NextPage } from "next";
import Head from "next/head";
import PageWrapper from "../components/PageWrapper";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Nic Nolan</title>
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
            <PageWrapper>Hello!</PageWrapper>
        </>
    );
};

export default Home;
