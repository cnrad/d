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
            <SectionBox>
                <SectionTitle>TWITTER</SectionTitle>
                <SectionInfo>
                    Followers:
                    <SectionStat color={"#2462AF"}>{twitter.followers}</SectionStat>
                </SectionInfo>
            </SectionBox>

            <SectionBox>
                <SectionTitle>GITHUB</SectionTitle>
                <SectionInfo>
                    Followers:
                    <SectionStat color={"#2462AF"}>{twitter.followers}</SectionStat>
                </SectionInfo>

                <SectionInfo>
                    Views:
                    <SectionStat color={"#2462AF"}>{twitter.followers}</SectionStat>
                </SectionInfo>

                <SectionInfo>
                    Stars:
                    <SectionStat color={"#2462AF"}>{twitter.followers}</SectionStat>
                </SectionInfo>
            </SectionBox>
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
    font-family: Open Sans;
    width: 20rem;
    height: 15rem;
    background: #181c2f;
    color: #fff;
    border-radius: 0.35rem;
    filter: drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.1));
    padding: 1.5rem;
    margin: 1rem;
`;

const SectionTitle = styled.h1`
    letter-spacing: 0.05rem;
    color: #8a8d96;
    height: auto;
    width: 100%;
    font-size: 0.85rem;
    margin: 0 0 1rem 0;
`;

const SectionInfo = styled.div`
    color: #fff;
    height: auto;
    width: 100%;
    font-size: 1.25rem;
    margin: 0;
    display: flex;
    flex-direction: row;
`;

const SectionStat = styled.div<{ color: string }>`
    color: ${({ color }) => color};
    font-size: 1.25rem;
    margin-left: 0.5rem;
    font-weight: 500;
`;

export default Home;
