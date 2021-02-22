module.exports = {
  siteMetadata: {
    title: "nate-waite",
    description:
      "Nate Waite - Full Stack Web Developer living in Provo, Ut. React | Node | PostgreSQL. Offering creative and reliable solutions to all of your web development requirements.",
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
