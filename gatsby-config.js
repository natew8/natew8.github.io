module.exports = {
  siteMetadata: {
    title: "nate-waite",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-scroll-reveal",
    "gatsby-plugin-transition-link",
    "gatsby-plugin-smoothscroll",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
  ],
};
