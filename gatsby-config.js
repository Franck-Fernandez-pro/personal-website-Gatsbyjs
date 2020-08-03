module.exports = {
  siteMetadata: {
    title: `Franck Fernandez - Développeur Web - JavaScript`,
    description: `Franck Fernandez - Développeur Web JavaScript (React/Gatsby) depuis plus de 2 ans, spécialisé dans le développement d’applications web.`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-transformer-remark`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `static`,
        path: `${__dirname}/src/static`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `md`,
        path: `${__dirname}/src/md`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        // develop: true, // Enable while using `gatsby develop`
        whitelist: [
          "text-primary",
          "col-6",
          "fa-book",
          "fa-desktop",
          "fa-heartbeat",
          "fa-globe",
          "fa-globe",
          "fa-compass",
          "fa-users",
          "fa-arrows-alt",
          "progress",
          "gatsby-color",
          "node-color",
          "react-color",
          "SJ",
          "SB",
          "CR",
          "text-sec",
        ], // Don't remove this selector
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
