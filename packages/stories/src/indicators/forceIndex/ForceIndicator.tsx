﻿import { format } from "d3-format";
import * as React from "react";
import {
    Chart,
    ChartCanvas,
    XAxis,
    YAxis,
    ema,
    forceIndex,
    discontinuousTimeScaleProviderBuilder,
    LineSeries,
    StraightLine,
    SingleValueTooltip,
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

class ForceIndicator extends React.Component<ChartProps> {
    private readonly margin = { left: 0, right: 48, top: 8, bottom: 24 };
    private readonly xScaleProvider = discontinuousTimeScaleProviderBuilder().inputDateAccessor(
        (d: IOHLCData) => d.date,
    );

    public render() {
        const { data: initialData, height, ratio, width } = this.props;

        const fi = forceIndex()
            .merge((d: any, c: any) => {
                d.fi = c;
            })
            .accessor((d: any) => d.fi);

        const fiEMA13 = ema()
            .id(1)
            .options({ windowSize: 13, sourcePath: "fi" })
            .merge((d: any, c: any) => {
                d.fiEMA13 = c;
            })
            .accessor((d: any) => d.fiEMA13);

        const calculatedData = fiEMA13(fi(initialData));

        const { data, xScale, xAccessor, displayXAccessor } = this.xScaleProvider(calculatedData);

        const yAccessor = fiEMA13.accessor();
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
                <Chart id={1} yExtents={yAccessor}>
                    <XAxis />
                    <YAxis tickFormat={format(".2s")} />

                    <LineSeries yAccessor={yAccessor} />
                    <StraightLine yValue={0} lineDash="ShortDash2" />

                    <SingleValueTooltip
                        yAccessor={yAccessor}
                        yLabel="ForceIndex (13)"
                        yDisplayFormat={format(".4s")}
                        origin={[8, 8]}
                    />
                </Chart>
            </ChartCanvas>
        );
    }
}

export default withOHLCData()(withSize({ style: { minHeight: 600 } })(withDeviceRatio()(ForceIndicator)));
