import * as React from "react";
import { atr } from "@react-fincharts/charts";
import ATRIndicator from "./AtrIndicator";

export default {
    title: "Visualization/Indicator/ATR",
    component: atr,
    parameters: {
        componentSubtitle: "Average True Range (ATR) is an indicator that measures volatility.",
    },
};

export const basic = () => <ATRIndicator />;

