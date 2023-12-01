// noinspection JSUnusedGlobalSymbols

import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import {ElementPlusResolver} from "unplugin-vue-components/resolvers";
import {resolve} from "path";
// https://vitejs.dev/config/
const timestamp = new Date().getTime();
// noinspection JSUnresolvedReference
export default defineConfig({
    plugins: [vue(), AutoImport({
        resolvers: [ElementPlusResolver()],
    }), Components({
        extensions: ["vue"],
        resolvers: [ElementPlusResolver(({
            importStyle: "sass",
        }))],
    })],
    resolve: {
        alias: {
            "@": resolve(__dirname, "src"),
        },
    },
    build: {
        rollupOptions: {
            output: {
                // 入口文件名
                entryFileNames: `assets/[name].${timestamp}.js`,
                // 块文件名
                chunkFileNames: `assets/[name]-[hash].${timestamp}.js`,
                // 资源文件名 css 图片等等
                assetFileNames: `assets/[name]-[hash].${timestamp}.[ext]`,
            },
        },
    },
});
