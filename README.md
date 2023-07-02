# todo
-ss start
-t duration
ffmpeg -ss 00:00:00 -t 00:50:00 -i largefile.mp4 -acodec copy \-vcodec copy smallfile.mp4
ffmpeg -i originalvideo.mp4 -ss 0:0:4 -t 0:1:10 -vcodec copy -acodec copy outputvideo.mp4

# 

ffmpeg -ss 0.5 -i inputfile.mp4 -frames:v 1 -s 480x300 imagefile.jpg

The various options:

-frames:v 1: limit to 1 frame extracted
-ss 0.5: point of movie to extract from (ie seek to 0.5 seconds; you can also use HH:MM:SS.ZZZZ sexagesimal format)
-s 480x300: frame size of image to output (image resized to fit dimensions)

# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.
