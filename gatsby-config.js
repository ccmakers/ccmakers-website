module.exports = {
  siteMetadata: {
    title: 'Cape Cod Makers',
    description: '',
    author: 'ccmakers',
    authorLink: 'https://github.com/ccmakers',
    socialMediaLinks: [
      { name: 'Facebook', url: 'https://www.facebook.com/CapeCodMakers' },
      { name: 'LinkedIn', url: 'http://www.linkedin.com/company/cape-cod-makers-inc-' },
      { name: 'Twitter', url: 'https://twitter.com/capecodmakers' }
    ],
    author: `@ccmakers`,
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
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#0093D0`,
        theme_color: `#0093D0`,
        display: `minimal-ui`,
        icon: `src/images/ccmakers-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        google: {
          families: ['Source Sans Pro:300,300i,400,400i,700,700i', 'Droid Serif:300,300i,400,400i,700,700i']
        }
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
