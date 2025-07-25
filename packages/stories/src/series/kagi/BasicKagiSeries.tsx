﻿import * as React from "react";
import {
    Chart,
    ChartCanvas,
    XAxis,
    YAxis,
    kagi,
    discontinuousTimeScaleProviderBuilder,
    KagiSeries,
    withDeviceRatio,
    withSize,
} from "@react-fincharts/charts";
import { IOHLCData, withOHLCData } from "../../data";

interface ChartProps {
    readonly data: IOHLCData[];
    readonly height: number;
    readonly width: number;
    readonly ratio: number;
}

class BasicKagiSeries extends React.Component<ChartProps> {
    private readonly margin = { left: 0, right: 40, top: 0, bottom: 24 };
    private readonly xScaleProvider = discontinuousTimeScaleProviderBuilder().inputDateAccessor(
        (d: IOHLCData) => d.date,
    );

    public render() {
        const { data: initialData, height, ratio, width } = this.props;

        const calculator = kagi();

        const calculatedData = calculator(initialData);

        const { data, xScale, xAccessor, displayXAccessor } = this.xScaleProvider(calculatedData);

        const max = xAccessor(data[data.length - 1]);
        const min = xAccessor(data[Math.max(0, data.length - 100)]);
        const xExtents = [min, max];
        return (
            <ChartCanvas
                height={height}
                ratio={ratio}
                width={width}
                margin={this.margin}
                data={data}
                displayXAccessor={displayXAccessor}
                seriesName="Data"
                xScale={xScale}
                xAccessor={xAccessor}
                xExtents={xExtents}
            >
                <Chart id={1} yExtents={this.yExtents}>
                    <KagiSeries />
                    <XAxis />
                    <YAxis />
                </Chart>
            </ChartCanvas>
        );
    }

    private readonly yExtents = (data: IOHLCData) => {
        return [data.high, data.low];
    };
}

export const Daily = withOHLCData()(withSize({ style: { minHeight: 600 } })(withDeviceRatio()(BasicKagiSeries)));

export const Intraday = withOHLCData("MINUTES")(
    withSize({ style: { minHeight: 600 } })(withDeviceRatio()(BasicKagiSeries)),
);
