import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "react-fincharts": "../charts/src",
            "@react-fincharts/annotations": "../annotations/src",
            "@react-fincharts/axes": "../axes/src",
            "@react-fincharts/coordinates": "../coordinates/src",
            "@react-fincharts/core": "../core/src",
            "@react-fincharts/indicators": "../indicators/src",
            "@react-fincharts/interactive": "../interactive/src",
            "@react-fincharts/scales": "../scales/src",
            "@react-fincharts/series": "../series/src",
            "@react-fincharts/tooltip": "../tooltip/src",
            "@react-fincharts/utils": "../utils/src",
        },
    },
    optimizeDeps: {
        include: ["react", "react-dom"],
    },
});
