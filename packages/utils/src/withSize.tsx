import * as React from "react";
import AutoSizer, { Props as AutoSizerProps } from "react-virtualized-auto-sizer";

export interface WithSizeProps {
    readonly width: number;
    readonly height: number;
}

export const withSize = (props?: Omit<AutoSizerProps, "children">) => {
    return <TProps extends WithSizeProps>(OriginalComponent: React.ComponentClass<TProps>) => {
        return class WithSize extends React.Component<Omit<TProps, "width" | "height">> {
            public render() {
                // Filter out disableHeight and disableWidth to avoid type conflicts
                const { disableHeight, disableWidth, ...autoSizerProps } = props || {};

                return (
                    <AutoSizer {...autoSizerProps}>
                        {({ height, width }) => {
                            return <OriginalComponent {...(this.props as TProps)} height={height} width={width} />;
                        }}
                    </AutoSizer>
                );
            }
        };
    };
};
