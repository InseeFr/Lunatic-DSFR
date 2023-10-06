import { StoryFn, Meta } from "@storybook/react";
import defaultArgTypes from "../utils/default-arg-types";
import Accordion from "../../Accordion";

const stories = {
    title: "Components/Accordion",
    component: Accordion,
    argTypes: defaultArgTypes,
} as Meta<typeof Accordion>;

export default stories;

const Template: StoryFn<typeof Accordion> = args => <Accordion {...args} />;

export const Default = Template.bind({});

Default.args = { label: "test", description: "test", bgColor: "purpleGlycine.default" };
