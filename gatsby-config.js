const config = require('./config');
if (process.env.NODE_ENV !== 'production') require('./secrets');
console.log('PROCESS.ENV IS ', process.env.NODE_ENV)
console.log(process.env.CONTENT_DELIVERY_API_KEY)
module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    title: config.siteTitle,
    author: `${config.firstName} ${config.lastName}`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.manifestName,
        short_name: config.manifestShortName,
        start_url: config.pathPrefix || config.manifestStartUrl,
        background_color: config.manifestBackgroundColor,
        theme_color: config.manifestThemeColor,
        display: config.manifestDisplay,
        icon: config.manifestIcon, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `qyqrc6zt88co`,
        accessToken:
          process.env.NODE_ENV !== 'production'
            ? process.env.CONTENT_DELIVERY_API_KEY
            : CONTENT_DELIVERY_API_KEY,
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
};
