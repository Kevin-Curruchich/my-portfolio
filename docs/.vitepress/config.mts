import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "KCode",
  description: "Portfolio of Kevin Curruchich",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/logo.png",
    siteTitle: false,
    nav: [
      { text: "Home", link: "/" },
      { text: "Proyects", link: "/markdown-examples" },
    ],
    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [
      {
        icon: "linkedin",
        link: "https://www.linkedin.com/in/kevin-curruchich/",
      },
      { icon: "github", link: "https://github.com/Kevin-Curruchich" },
    ],

    footer: {
      message: "Made with ❤️ by Kevin Curruchich",
      copyright: `© ${new Date().getFullYear()} Kevin Curruchich`,
    },
  },
  srcDir: '../docs',
  base: 'my-portfolio'
});
