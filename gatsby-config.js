require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})


module.exports = {
  siteMetadata: {
    siteUrl: `https://capecodmakers.org`,
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
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-yaml`,
    `gatsby-plugin-use-query-params`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/posts`,
        name: 'posts',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              // This lets you set up language aliases.  For example,
              // setting this to '{ sh: "bash" }' will let you use
              // the language "sh" which will highlight using the
              // bash highlighter.
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
            },
          },
          `gatsby-remark-copy-linked-files`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 740,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-autolink-headers`,
        ]
      }
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
          families: ['Open Sans:300,300i,400,400i,700,700i', 'Lora:300,300i,400,400i,700,700i']
        }
      }
    },
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-136958368-1",
        // Puts tracking script in the head instead of the body
        head: false,
        respectDNT: true
      },
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
        token: process.env.MY_SANITY_TOKEN,
      },
    },
    {
      resolve: 'gatsby-source-google-spreadsheets',
      options: {
        spreadsheetId: '1Jxz6rslfLS-aQDo-wt7jX8fZ8NjHerPy7o2bCgNc72M',
        credentials: {
          type: 'service_account',
          project_id: process.env.G_PROJECT_ID,
          private_key_id: process.env.G_PRIVATE_KEY_ID,
          private_key: process.env.G_PRIVATE_KEY.replace(/(\\r)|(\\n)/g, '\n'),
          client_email: process.env.G_CLIENT_EMAIL,
          client_id: '',
          auth_uri: 'https://accounts.google.com/o/oauth2/auth',
          token_uri: 'https://oauth2.googleapis.com/token',
          auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
          client_x509_cert_url: `https://www.googleapis.com/robot/v1/metadata/x509/${process.env.G_PROJECT_ID}%40appspot.gserviceaccount.com`,
        },
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-offline',
  ],
  mapping: {
    "MarkdownRemark.frontmatter.author": `AuthorsYaml.id`,
  },
}