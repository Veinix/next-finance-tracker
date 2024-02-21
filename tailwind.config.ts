import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "pl-bg": "#070707",
                "pl-primary": "#355e3b",
                "pl-secondary": "#50355e",
                "pl-teriary": "#5e3544",
                "pl-success": "#06C283",
                "pl-danger": "#C20645",
                "pl-warning": "#FAFA0F",
                "pl-info": "#06A3C2",
                "pl-font-main": "#F1E0C5",
            }
        },
    },
    plugins: [],
};
export default config;
