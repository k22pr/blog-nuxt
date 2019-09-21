export default {
   env: {},
   head: {
      title: "blog-nuxt",
      meta: [{ charset: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" }, { hid: "description", name: "description", content: "Nuxt.js TypeScript project" }],
      link: [
         { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
         { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Noto+Sans+KR|Quicksand&display=swap" },
         { rel: "stylesheet", href: "https://pro.fontawesome.com/releases/v5.9.0/css/light.css", integrity: "sha384-/ggAGHSQWxssDRflcj0aeAlGN2rNgsnWOLv1ZU5FEvjQWxP53glq5pNPjtfldVVN", crossorigin: "anonymous" },
         { rel: "stylesheet", href: "https://pro.fontawesome.com/releases/v5.9.0/css/brands.css", integrity: "sha384-wRa49NRotGDh34aLO1Hjbu65qHSTF/ZNSBm7uTpMUa2EQ1Csq7Zlswm+FR9hcWtn", crossorigin: "anonymous" },
         { rel: "stylesheet", href: "https://pro.fontawesome.com/releases/v5.9.0/css/fontawesome.css", integrity: "sha384-QSCxeayZXa6bvOhHReoQRGN7utvnOnY3JoBHGxM61JQQ1EXA7AT3m7dnlHXLhnCj", crossorigin: "anonymous" },
         { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/@typopro/web-fira-code@3.7.5/TypoPRO-FiraCode.css" },
         { rel: "stylesheet", href: "//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.10/styles/default.min.css" },
      ],
      script: [{ src: "//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.10/highlight.min.js" }],
   },
   loading: { color: "#3B8070" },
   css: ["ant-design-vue/dist/antd.css", "~/assets/css/main.css", "~/styles/index.css", "vue-code-highlight/themes/window.css"],
   build: {},
   plugins: ["~/plugins/axios.ts", "~/plugins/antd.ts", "~/plugins/codeHighlight.ts"],
};
