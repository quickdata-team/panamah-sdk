module.exports = {
  title: "Panamah Software Developer Kit",
  description: "Várias implementações do SDK para consumir a API do Panamah",
  base: process.env.NODE_ENV == "development" ? "/" : "/panamah-sdk/",
  dest: "docs",
  themeConfig: {
    lastUpdated: true,
    repo: "casamagalhaes/panamah-sdk",
    logo: "/assets/img/logo.png",
    nav: [
      { text: "Overview", link: "/OVERVIEW.md" },
      { text: "Guide", link: "/GUIDE.md" },
      { text: "FAQ", link: "/FAQ.md" },
      { text: "Roadmap", link: "/ROADMAP.md" },
      { text: "Início", link: "/" },
    ],
  },
  markdown: {
    config: md => {
      md.use(require("markdown-it-task-lists"));
    },
  },
};
