import Orchestrator from "../utils/Orchestrator";
import source from "./source.json";
import data from "./data.json";
import { StoryObj, Meta } from "@storybook/react";
import * as custom from "../..";
import defaultArgTypes from "../utils/default-arg-types";

const meta: Meta<typeof Orchestrator> = {
    title: "OrchestratedComponents/CheckboxGroup",
    component: Orchestrator,
    argTypes: defaultArgTypes,
    args: { source, data, custom },
};

export default meta;
type Story = StoryObj<typeof Orchestrator>;

export const Default: Story = {
    parameters: {
        docs: {
            description: {
                story: "This component should be used when you want the user to be able to select one or multiple answers.",
            },
        },
    },
};
