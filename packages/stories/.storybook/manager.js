import { addons } from "@storybook/manager-api";
import { create } from "@storybook/theming";

addons.setConfig({
    theme: create({
        base: "light",
        brandTitle: "React Fincharts",
        brandUrl: "https://github.com/fernesrou/react-fincharts",
    }),
});
