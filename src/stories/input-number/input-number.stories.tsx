import { Orchestrator } from "../utils/Orchestrator";
import { source } from "./default";

import { source as sourceWithUnit } from "./withUnit";
import type { StoryObj, Meta } from "@storybook/react";

import defaultArgTypes from "../utils/default-arg-types";

const meta: Meta<typeof Orchestrator> = {
    title: "Components/InputNumber",
    component: Orchestrator,
    argTypes: defaultArgTypes,
    parameters: {
        docs: {
            description: {
                story: "This component should be used when you want the user to enter a number. You can add a min and max property if you want to restrict the number the user can enter. You can also specify the number of decimals allowed.",
            },
        },
    },
};

export default meta;

type Story = StoryObj<typeof Orchestrator>;

export const Default: Story = {
    args: { source: source },
};

export const WithUnit: Story = {
    parameters: {
        docs: {
            description: {
                story: "You can specify a unit.",
            },
        },
    },
    args: { source: sourceWithUnit },
};
