const path = require('path')
const axios = require('axios')
const crypto = require('crypto')

exports.sourceNodes = async ({ actions }) => {
  const { createNode } = actions

  // fetch raw data from the randomuser api
  const fetchEvents = () =>
    axios.get(`https://api.meetup.com/cape-cod-makers/events?fields=featured_photo`)
  // await for results
  const res = await fetchEvents()

  console.log(res.data.length);

  res.data.map((event, i) => {
    // Create your node object
    const eventNode = {
      // Required fields
      id: `${event.id}`,
      parent: `__SOURCE__`,
      internal: {
        type: `MeetupEvent`,
      },
      children: [],

      // Other fields that you want to query with graphQl
      title: `${event.name}`,
      summary: `${event.description}`,
      local_date: `${event.local_date}`,
      local_time: `${event.local_time}`,
      venue: {
        id: `${event.venue.id}`,
        created: `${event.venue.created}`,
        duration: `${event.venue.duration}`,
        name: `${event.venue.name}`,
        lat: `${event.venue.lat}`,
        lon: `${event.venue.lon}`,
        repinned: `${event.venue.repinned}`,
        address_1: `${event.venue.address_1}`,
        address_2: `${event.venue.address_2}`,
        city: `${event.venue.city}`,
        country: `${event.venue.country}`,
        localized_country_name: `${event.venue.localized_country_name}`,
        zip: `${event.venue.zip}`,
        state: `${event.venue.state}`
      },
      visibility: `${event.visibility}`,
      link: `${event.link}`,
      how_to_find_us: `${event.how_to_find_us}`,
      featured_photo: {
        id: `${event.featured_photo.id}`,
        highres_link: `${event.featured_photo.highres_link}`,
        photo_link: `${event.featured_photo.photo_link}`,
        thumb_link: `${event.featured_photo.thumb_link}`,
        type: `${event.featured_photo.type}`,
        base_url: `${event.featured_photo.base_url}`,
      },
    }

    // Get content digest of node. (Required field)
    const contentDigest = crypto
      .createHash(`md5`)
      .update(JSON.stringify(eventNode))
      .digest(`hex`)
    // add it to eventNode
    eventNode.internal.contentDigest = contentDigest

    // Create node with the gatsby createNode() API
    createNode(eventNode)
  })
  return
}


exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                slug
              }
            }
          }
        }

        allSanityPost {
          edges {
            node {
              slug {
                current
              }
              publishedAt(formatString: "YYYY-MM-DD")
            }
          }
        }
      }
    `).then(results => {

      results.data.allMarkdownRemark.edges.forEach(({node}) => {
        const { slug } = node.frontmatter
        createPage({
          path: `/blog${slug}`,
          component: path.resolve('./src/components/post.js'),
          context: {
            slug: slug,
          }
        });
      })

      results.data.allSanityPost.edges.forEach(({node}) => {
        const { slug, publishedAt } = node
        createPage({
          path: `/blog/${publishedAt}-${slug.current}`,
          component: path.resolve('./src/components/sanityPost.js'),
          context: {
            slug: slug.current,
          }
        });
      })

      resolve();
    })
  });
}