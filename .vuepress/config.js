module.exports = {
  title: "Casas Magalhães - Panamah Standard Developer Kit",
  description: "Various SDK implementations to consume the Panamah API",
  base: process.env.NODE_ENV == "development" ? "/" : "/panamah-sdk/",
  dest: "docs",
  themeConfig: {
    lastUpdated: true,
    logo: "/assets/img/panamah-sdk.png",
    nav: [
      { text: "Github", link: "https://github.com/casamagalhaes/panamah-sdk" },
    ],
  },
};
