module.exports = {
  title: "Panamah SDK",
  description: " ",
  base: "/panamah-sdk/",
  dest: "docs",
  head: [
    ['link', { rel: "shortcut icon", href: "/assets/img/favicon.ico"}],
  ],
  themeConfig: {
    lastUpdated: true,
    logo: "/assets/img/logo-qd.png",
    nav: [
      { text: "Início", link: "/" },
      { text: "Visão geral", link: "/OVERVIEW.md" },
      { text: "Exemplos de uso", link: "/GUIDE.md" }
    ],
  },
  markdown: {
    config: md => {
      md.use(require("markdown-it-task-lists"));
    },
  },
};
