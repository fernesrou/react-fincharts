/** @type {import('@storybook/react-vite').StorybookConfig} */
export default {
    addons: ["@storybook/addon-essentials"],
    stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)", "../src/**/*.mdx"],
    framework: {
        name: "@storybook/react-vite",
        options: {},
    },
    typescript: {
        reactDocgen: "react-docgen-typescript",
        reactDocgenTypescriptOptions: {
            shouldExtractLiteralValuesFromEnum: true,
            propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
        },
    },
};
