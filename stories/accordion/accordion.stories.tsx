import type { Meta, StoryObj } from "@storybook/react";
import { Accordion } from "Accordion";

const meta = {
    title: "Components/Accordion",
    tags: ["autodocs"],
    component: Accordion,
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof Accordion>;

export const Default = {
    args: { label: "test", description: "test", bgColor: "purpleGlycine.default" },
} satisfies Story;
