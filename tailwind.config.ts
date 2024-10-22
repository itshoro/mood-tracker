import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        screens: {
            sm: "350px",
        },
    },
    plugins: [],
};
export default config;
