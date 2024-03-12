import { Orchestrator } from "../utils/Orchestrator";
import { source } from "./default";
import type { StoryObj, Meta } from "@storybook/react";

const meta = {
    title: "Components/CheckboxGroup",
    component: Orchestrator,
    args: { source },
} satisfies Meta<typeof Orchestrator>;

export default meta;

type Story = StoryObj<typeof Orchestrator>;

export const Default = {
    render: args => {
        console.log(args);
        return <Orchestrator {...args} />;
    },
    parameters: {
        docs: {
            description: {
                story: "This component should be used when you want the user to be able to select one or multiple answers.",
            },
        },
    },
} satisfies Story;
