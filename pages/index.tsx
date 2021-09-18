import type { NextPage } from 'next'
import { useState, useEffect} from 'react';
import Head from 'next/head'
import styled from 'styled-components';

const Home: NextPage = () => {

    return (
        <>
            <SectionBox>
                Twitter Stuff here
            </SectionBox>
        </>
    )
}

const SectionBox = styled.div`
    width: 20rem;
    height: 15rem;
    background: #181C2F;
    color: #fff;
    border-radius: 0.35rem;
    filter: drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.1))
`   

export default Home
