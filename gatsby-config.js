module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-sass'
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
