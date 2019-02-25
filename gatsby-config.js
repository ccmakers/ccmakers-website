require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

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
    },
    {
      resolve: `gatsby-source-meetup`,
      options: {
        // Learn about environment variables: https://gatsby.app/env-vars
        // Your Meetup.com API key can be retrieved here: https://secure.meetup.com/fr-FR/meetup_api/key/
        key: process.env.MEETUP_API_KEY,
        fields: 'featured_photo',
        // Mandatory: the URL name of a Meetup Group.
        // See the URL of the group page, e.g. https://www.meetup.com/fr-FR/jamstack-paris
        groupUrlName: "cape-cod-makers",
        // Optional parameters for retrieving Events, see full documentation at
        // https://www.meetup.com/meetup_api/docs/:urlname/events/?uri=%2Fmeetup_api%2Fdocs%2F%3Aurlname%2Fevents%2F#list
        status: "upcoming,past",
        desc: "true",
        page: 6
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
