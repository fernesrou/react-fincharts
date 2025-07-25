import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";
import { BollingerSeries } from "../../../../series/src/BollingerSeries";
import BollingerIndicator from "./BollingerIndicator";

const meta: Meta<typeof BollingerSeries> = {
    title: "Visualization/Indicator/Bollinger Band",
    component: BollingerSeries,
    argTypes: {
        fillStyle: { control: "color" },
        strokeStyle: { control: false },
    },
};

export default meta;
type Story = StoryObj<typeof BollingerSeries>;

export const basic: Story = {
    render: ({ fillStyle }) => <BollingerIndicator fillStyle={fillStyle} />,
};
