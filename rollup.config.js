import babel from "rollup-plugin-babel";
import includePaths from "rollup-plugin-includepaths";

let includePathOptions = {
    include: {},
    paths: ["src/"],
    external: [],
    extensions: [".js", ".json", ".html"]
};

export default [
    {
        input: "src/Calendar.js",
        output: {
            name: "calendar-teambt",
            file: "dist/index.js",
            format: "cjs"
        },
        external: [
            "react",
            "@material-ui/core",
            "@material-ui/icons",
            "prop-types"
        ],
        plugins: [
            babel({
                exclude: "node_modules/.**"
            }),
            includePaths(includePathOptions)
        ]
    }
];