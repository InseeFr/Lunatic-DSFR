import { Orchestrator } from "stories/utils/Orchestrator";
import { source } from "./default";
import type { StoryObj, Meta } from "@storybook/react";

import defaultArgTypes from "../utils/default-arg-types";

const meta: Meta<typeof Orchestrator> = {
    title: "Components/CheckboxBoolean",
    component: Orchestrator,
    argTypes: defaultArgTypes,
    args: { source },
};

export default meta;

type Story = StoryObj<typeof Orchestrator>;

export const Default: Story = {
    render: args => {
        console.log(args);
        return <Orchestrator {...args} />;
    },
    parameters: {
        docs: {
            description: {
                story: "This component should be used when you want the user to be able to select only one answers.",
            },
        },
    },
};
