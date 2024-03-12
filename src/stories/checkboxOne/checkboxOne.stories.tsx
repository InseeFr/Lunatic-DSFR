import { Orchestrator } from "../utils/Orchestrator";
import type { StoryObj, Meta } from "@storybook/react";
import { source } from "./default";

const meta = {
    title: "Components/CheckboxOne",
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
                story: "This component should be used when you want the user to be able to select only one answers.",
            },
        },
    },
} satisfies Story;
