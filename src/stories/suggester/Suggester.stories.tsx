import Orchestrator from "../utils/Orchestrator";
import source from "./source.json";
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
    console.log(name);
    switch (name) {
        case "naf-rev2":
            return fetch("/json/naf-rev2.json").then(r => r.json());
        default:
            throw new Error(`Référentiel inconnu : ${name}`);
    }
}

const Template: ComponentStory<typeof Orchestrator> = args => (
    <Orchestrator
        {...args}
        getReferentiel={getReferentiel}
        autoSuggesterLoading={true}
        custom={custom}
    />
);

export const Default = Template.bind({});

Default.args = { source, data: {} };
