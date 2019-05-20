module.exports = {
  title: "Panamah SDK",
  description: " ",
  base: process.env.NODE_ENV == "development" ? "/" : "/panamah-sdk/",
  dest: "docs",
  themeConfig: {
    lastUpdated: true,
    repo: "casamagalhaes/panamah-sdk",
    logo: "/assets/img/logo.png",
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
