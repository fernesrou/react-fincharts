import * as React from "react";
import { MouseCoordinateY } from "@react-fincharts/charts";
import Coordinates from "./Coordinates";

export default {
    component: MouseCoordinateY,
    title: "Features/Coordinates",
};

export const edge = () => <Coordinates />;

export const arrows = () => <Coordinates arrowWidth={10} />;
