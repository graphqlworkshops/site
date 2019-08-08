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
    {
      resolve: `gatsby-plugin-amplitude-analytics`,
      options: {
        // Specify the API key for your Amplitude Project (required)
        apiKey: "e9aeb508b12f79e934bf8ff69001c2ff",
        // Puts tracking script in the head instead of the body (optional)
        head: false,
        // Prevents loading Amplitude and logging events if visitors have "Do Not Track" enabled (optional)
        respectDNT: true,
        // Avoids sending pageview hits from custom paths (optional)
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Override the default event types (optional)
        eventTypes: {
          outboundLinkClick: "OUTBOUND_LINK_CLICK",
          pageView: "PAGE_VIEW",
        },
        // Amplitude JS SDK configuration options (optional)
        amplitudeConfig: {
          saveEvents: true,
          includeUtm: true,
          includeReferrer: true,
        },
      },
    },
  ],
}
