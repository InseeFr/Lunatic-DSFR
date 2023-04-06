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
    switch (name) {
        case "naf-rev2":
            return fetch("/json/naf-rev2.json").then(r => r.json());
        case "communes-2019":
            return fetch("/json/communes-2019.json").then(r => r.json());
        default:
            throw new Error(`Référentiel inconnu : ${name}`);
    }
}

const Template: ComponentStory<typeof Orchestrator> = args => (
    <>
        <Orchestrator
            {...args}
            getReferentiel={getReferentiel}
            autoSuggesterLoading={true}
            custom={custom}
        />
        <div>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It
            was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum.
        </div>
    </>
);

export const Default = Template.bind({});

Default.args = { source, data: {} };
