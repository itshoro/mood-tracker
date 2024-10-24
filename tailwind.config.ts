import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            screens: {
                xs: "350px",
            },
        },
    },
    plugins: [],
};
export default config;
