import { source } from "./default";
import type { StoryObj, Meta } from "@storybook/react";
import { Orchestrator } from "../utils/Orchestrator";

const meta = {
    title: "Components/CheckboxBoolean",
    component: Orchestrator,
    args: { source },
} satisfies Meta<typeof Orchestrator>;

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
