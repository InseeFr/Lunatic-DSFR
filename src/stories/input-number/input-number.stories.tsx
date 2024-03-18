import { Orchestrator } from "../utils/Orchestrator";
import { source } from "./default";

import { source as sourceWithUnit } from "./withUnit";
import type { StoryObj, Meta } from "@storybook/react";

const meta = {
    title: "Components/InputNumber",
    component: Orchestrator,
    parameters: {
        docs: {
            description: {
                story: "This component should be used when you want the user to enter a number. You can add a min and max property if you want to restrict the number the user can enter. You can also specify the number of decimals allowed.",
            },
        },
    },
} satisfies Meta<typeof Orchestrator>;

export default meta;

type Story = StoryObj<typeof Orchestrator>;

export const Default = {
    args: { source: source },
} satisfies Story;

export const WithUnit = {
    parameters: {
        docs: {
            description: {
                story: "You can specify a unit.",
            },
        },
    },
    args: { source: sourceWithUnit },
} satisfies Story;
