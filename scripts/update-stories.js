#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const glob = require("glob");

// Find all story files
const storyFiles = glob.sync("packages/stories/src/**/*.stories.tsx", { cwd: process.cwd() });

console.log(`Found ${storyFiles.length} story files to update`);

storyFiles.forEach((file) => {
    console.log(`Processing: ${file}`);

    try {
        let content = fs.readFileSync(file, "utf8");

        // Skip if already using new format
        if (content.includes("import type { Meta, StoryObj }")) {
            console.log(`  ✓ Already updated: ${file}`);
            return;
        }

        // Skip files that don't use the old Story format
        if (!content.includes('import { Story } from "@storybook/react"')) {
            console.log(`  ✓ No changes needed: ${file}`);
            return;
        }

        // Replace old import with new format
        content = content.replace(
            /import \{ Story \} from "@storybook\/react";/g,
            'import type { Meta, StoryObj } from "@storybook/react";',
        );

        // Convert export default to meta format
        const exportDefaultMatch = content.match(/export default \{[\s\S]*?\};/);
        if (exportDefaultMatch) {
            const oldExport = exportDefaultMatch[0];

            // Extract component name from the export
            const componentMatch = oldExport.match(/component:\s*(\w+)/);
            if (componentMatch) {
                const componentName = componentMatch[1];

                const newMeta = oldExport.replace("export default {", `const meta: Meta<typeof ${componentName}> = {`);

                content = content.replace(
                    oldExport,
                    newMeta + "\n\nexport default meta;\ntype Story = StoryObj<typeof " + componentName + ">;",
                );
            }
        }

        // Convert Template patterns to new format
        content = content.replace(
            /const (\w+)Template: Story<[^>]+> = \(args\) => <(\w+) \{\.\.\.args\} \/>;[\s\S]*?export const (\w+) = \1Template\.bind\({}\);/g,
            "export const $3: Story = {\n    render: (args) => <$2 {...args} />,\n};",
        );

        // Convert simple Template patterns
        content = content.replace(
            /const Template: Story<[^>]+> = \(args\) => <(\w+) \{\.\.\.args\} \/>;[\s\S]*?export const (\w+) = Template\.bind\({}\);/g,
            "export const $2: Story = {\n    render: (args) => <$1 {...args} />,\n};",
        );

        // Remove unused type imports
        content = content.replace(/,\s*\w+Props/g, "");

        fs.writeFileSync(file, content);
        console.log(`  ✓ Updated: ${file}`);
    } catch (error) {
        console.error(`  ✗ Error processing ${file}:`, error.message);
    }
});

console.log("Story update complete!");
