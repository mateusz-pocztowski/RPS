const path = require('path')

module.exports = {
  siteMetadata: {
    title: `Rock Paper Scissors Game`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Barlow Semi Condensed:600,700`],
        display: 'swap',
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
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        components: path.join(__dirname, 'src/components'),
        layouts: path.join(__dirname, 'src/layouts'),
        theme: path.join(__dirname, 'src/theme'),
        steps: path.join(__dirname, 'src/steps'),
        hooks: path.join(__dirname, 'src/hooks'),
        store: path.join(__dirname, 'src/store'),
        context: path.join(__dirname, 'src/context'),
        icons: path.join(__dirname, 'src/assets/icons'),
      },
    },
  ],
}
