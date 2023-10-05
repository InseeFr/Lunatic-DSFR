import { ComponentStory, ComponentMeta } from "@storybook/react";
import defaultArgTypes from "../utils/default-arg-types";
import Accordion from "../../Accordion";

const stories = {
    title: "Atoms/Accordion",
    component: Accordion,
    argTypes: defaultArgTypes,
} as ComponentMeta<typeof Accordion>;

export default stories;

const Template: ComponentStory<typeof Accordion> = args => <Accordion {...args} />;

export const Default = Template.bind({});

Default.args = { label: "test", description: "test", bgColor: "purpleGlycine.default" };
