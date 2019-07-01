const autoprefixer = require('autoprefixer');

module.exports = {
  siteMetadata: {
    title: `Terminal`,
    description: `Terminal is time tracking web app and iPhone app that will change your life.`,
    author: `Vince Zuño`,
    social: {
      twitter: `@vincezun`
    }
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-remove-serviceworker`,
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        postCssPlugins: [
          autoprefixer({
            grid: true,
            flexbox: true
          })
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: `Terminal`,
        short_name: `Terminal`,
        start_url: `/`,
        background_color: `#1d1f21`,
        theme_color: `#1d1f21`,
        display: `standalone`,
        orientation: `landscape`,
        icon: `src/images/terminal.png`
      }
    },
    `gatsby-plugin-offline`
  ]
};
