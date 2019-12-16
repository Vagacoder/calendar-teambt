import babel from "rollup-plugin-babel";
import includePaths from "rollup-plugin-includepaths";
import postcss from 'rollup-plugin-postcss';

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
            "prop-types",
            "@material-ui/icons/ExpandMore",
            "@fullcalendar/react",
            "@fullcalendar/daygrid",
            "@material-ui/styles",
            "@fullcalendar/moment",
            "@fullcalendar/timegrid",
            "tooltip.js"
        ],
        plugins: [
            postcss(),
            babel({
                exclude: "node_modules/.**"
            }),
            includePaths(includePathOptions)
        ]
    }
];