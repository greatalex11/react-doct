import Section from "../components/Section";
import Features from "../components/Features";
import Formulaire from "../components/Formulaire";
import React from "react";

function Home() {
    return (
        <>
            <Section>
                    <Features></Features>
                    <Formulaire></Formulaire>
            </Section>
        </>
    );
}

export default Home