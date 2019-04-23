module.exports = {
  title: "Casa Magalhães - Panamah Standard Developer Kit",
  description: "Various SDK implementations to consume the Panamah API",
  base: process.env.NODE_ENV == "development" ? "/" : "/panamah-sdk/",
  dest: "docs",
  themeConfig: {
    lastUpdated: true,
    logo: "/assets/img/logo.png",
    nav: [
      { text: "Github", link: "https://github.com/casamagalhaes/panamah-sdk" },
      { text: "Overview", link: "/OVERVIEW.md" },
      { text: "Guide", link: "/GUIDE.md" },
      { text: "FAQ", link: "/FAQ.md" },
      { text: "Início", link: "/" },
    ],
  },
};
