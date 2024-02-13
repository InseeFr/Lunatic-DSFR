import Orchestrator from "../utils/Orchestrator";
import source from "./source.json";
import sourceNaf from "./source_naf.json";
import sourcePCS from "./source_pcs.json";
import sourceError from "./source_error.json";
import sourceNotLoading from "./source_not_loading.json";
import sourceSkeleton from "./sourceSkeleton.json";
import sourceDisabled from "./sourceDisabled.json";
import { StoryFn, Meta } from "@storybook/react";
import defaultArgTypes from "../utils/default-arg-types";

const stories = {
    title: "Orchestrated Components/Suggester",
    component: Orchestrator,
    argTypes: defaultArgTypes,
    args: {
        getReferentiel: getReferentiel,
        autoSuggesterLoading: true,
    },
} as Meta<typeof Orchestrator>;

export default stories;

async function getReferentiel(name: string) {
    switch (name) {
        case "libelles-pcs-2020":
            return fetch("/json/libelles-pcs-2020.json").then(r => r.json());
        case "naf-rev2":
            return fetch("/json/naf-rev2.json").then(r => r.json());
        case "pays":
            return fetch("/json/pays.json").then(r => r.json());
    }
}

const Template: StoryFn<typeof Orchestrator> = args => <Orchestrator {...args} />;

export const Default = Template.bind({});

Default.args = { source: source };

export const NotLoading = Template.bind({});

NotLoading.args = { source: sourceNotLoading };

export const Error = Template.bind({});

Error.args = { source: sourceError };

export const InComponentSet = Template.bind({});

InComponentSet.args = { source: sourceNaf };

export const Disabled = Template.bind({});

Disabled.args = { source: sourceDisabled };

export const PCS2020 = Template.bind({});

PCS2020.args = { source: sourcePCS };

export const Skeleton = Template.bind({});

Skeleton.args = { source: sourceSkeleton };
