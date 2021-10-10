import type { NextPage } from "next";
import { useState, useEffect } from "react";
import Head from "next/head";
import styled from "styled-components";

export const getStaticProps = async function () {
    let twitter = await fetch("http://localhost:3005/api/twitter").then(res => res.json());

    return {
        props: {
            twitter,
        },
    };
};

const Home: NextPage = ({ twitter }: any) => {
    return (
        <Page>
            <SectionBox>Twitter Follower Count: {twitter.followers}</SectionBox>
        </Page>
    );
};

const Page = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const SectionBox = styled.div`
    width: 20rem;
    height: 15rem;
    background: #181c2f;
    color: #fff;
    border-radius: 0.35rem;
    filter: drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.1));
`;

export default Home;
