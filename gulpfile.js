const { src, dest } = require("gulp");
const zip = require("gulp-zip");
const { name } = require("./package.json");
const del = require("del");

function bundle() {
    // delete packaged folder
    del(["packaged"]);
    // zip
    return src([
        "**/*",
        "!.husky/**",
        "!node_modules/**",
        "!src/**",
        "!temp/**",
        "!packaged/**",
        "!.eslintrc.js",
        "!.gitignore",
        "!.prettierignore",
        "!.prettierrc",
        "!gulpfile.js",
        "!package-lock.json",
        "!package.json",
        "!readme.txt",
        "!webpack.config.js"
    ])
        .pipe(zip(`${name}.zip`))
        .pipe(dest("packaged"));
}

exports.bundle = bundle;
