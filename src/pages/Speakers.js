// pages/About.js

import React from "react";
import styled from "styled-components";
import MainColumn from "../components/MainColumn"
import speakers from "../data/speakers_data";
import Card from "../components/Card";

const Text = styled.p`
    font-size: x-large;
`;
const Header = styled.div`
    width: 100%;
    margin: 0 auto;
    position: absolute;
`;
const Speakers = () => (

    <MainColumn>

            <Text>Speakers</Text>

        {
            speakers.map((item, index) =>(
                <Card key={index}
                      title={item.title}
                      subtitle={item.subtitle}
                      date={item.date}
                      description={item.description}
                      imageUrl={item.image}
                />
            ))
        }

    </MainColumn>
);

export default Speakers;

