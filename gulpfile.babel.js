"use strict";

import gulp from "gulp";

const requireDir = require("require-dir"),
    paths = {
        views: {
            src: [
                "./src/views/index.html",
                "./src/views/pages/*.html"
            ],
            docs: "./docs/",
            watch: [
                "./src/blocks/**/*.html",
                "./src/views/**/*.html"
            ]
        },
        styles: {
            src: "./src/styles/main.scss",
            docs: "./docs/styles/",
            watch: [
                "./src/blocks/**/*.scss",
                "./src/styles/**/*.scss"
            ]
        },
        scripts: {
            src: "./src/js/index.js",
            docs: "./docs/js/",
            watch: [
                "./src/blocks/**/*.js",
                "./src/js/**/*.js"
            ]
        },
        images: {
            src: [
                "./src/img/**/*.{jpg,jpeg,png,gif,tiff,svg}",
                "!./src/img/svg/*.svg",
                "!./src/img/favicon.{jpg,jpeg,png,gif}"
            ],
            docs: "./docs/img/",
            watch: "./src/img/**/*.{jpg,jpeg,png,gif,svg}"
        },
        webp: {
            src: [
                "./src/img/**/*.{jpg,jpeg,png,tiff}",
                "!./src/img/favicon.{jpg,jpeg,png,gif}"
            ],
            docs: "./docs/img/",
            watch: [
                "./src/img/**/*.{jpg,jpeg,png,tiff}",
                "!./src/img/favicon.{jpg,jpeg,png,gif}"
            ]
        },
        sprites: {
            src: "./src/img/svg/*.svg",
            docs: "./docs/img/sprites/",
            watch: "./src/img/svg/*.svg"
        },
        fonts: {
            src: "./src/fonts/**/*.{woff,woff2}",
            docs: "./docs/fonts/",
            watch: "./src/fonts/**/*.{woff,woff2}"
        },
        favicons: {
            src: "./src/img/favicon.{jpg,jpeg,png,gif}",
            docs: "./docs/img/favicons/",
        },
        gzip: {
            src: "./src/.htaccess",
            docs: "./docs/"
        }
    };

requireDir("./gulp-tasks/");

export { paths };

export const development = gulp.series("clean", "smart-grid",
    gulp.parallel(["views", "styles", "scripts", "images", "webp", "sprites", "fonts", "favicons"]),
    gulp.parallel("serve"));

export const prod = gulp.series("clean",
    gulp.series(["views", "styles", "scripts", "images", "webp", "sprites", "fonts", "favicons", "gzip"]));

export default development;