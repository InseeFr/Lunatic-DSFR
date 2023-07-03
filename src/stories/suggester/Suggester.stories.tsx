import Orchestrator from "../utils/Orchestrator";
import source from "./source.json";
import sourceCommune from "./source_commune.json";
import sourceError from "./source_error.json";
import data from "./data.json";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import defaultArgTypes from "../utils/default-arg-types";
import * as custom from "../..";

const stories = {
    title: "Components/Suggester/orchestrated",
    component: Orchestrator,
    argTypes: defaultArgTypes,
} as ComponentMeta<typeof Orchestrator>;

export default stories;

async function getReferentiel(name: string) {
    switch (name) {
        case "naf-rev2":
            return fetch("/json/naf-rev2.json").then(r => r.json());
        case "communes-2019":
            return fetch("/json/communes-2019.json").then(r => r.json());
        default:
            throw new Error(`Référentiel inconnu : ${name}`);
    }
}

function LoremIpsum() {
    return (
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    );
}

const OrchestratedTemplate: ComponentStory<typeof Orchestrator> = args => (
    <>
        <Orchestrator
            {...args}
            getReferentiel={getReferentiel}
            autoSuggesterLoading={true}
            custom={custom}
        />
        <LoremIpsum />
    </>
);

const Template: ComponentStory<typeof Orchestrator> = args => (
    <>
        <Orchestrator
            {...args}
            getReferentiel={getReferentiel}
            autoSuggesterLoading={true}
            custom={custom}
        />
    </>
);

export const Default = OrchestratedTemplate.bind({});

Default.args = { source, data: {} };

export const Communes = Template.bind({});

Communes.args = { source: sourceCommune, data };

export const Failedload = Template.bind({});

Failedload.args = { source: sourceError, data: {} };
