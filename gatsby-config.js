module.exports = {
  siteMetadata: {
    title: `GraphQL Workshop`,
    titleTemplate: "%s · Training",
    description: `Learn the new standard for app development in this hands-on workshop training.`,
    author: `@sesteva`,
    url: "https://www.graphqlfoundations.com",
    image: "/images/snape.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@sesteva",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-netlify`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
