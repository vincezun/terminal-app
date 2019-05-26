const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        postCssPlugins: [
          autoprefixer({
            grid: true,
            flexbox: true,
            browsers: ['last 2 version']
          })
        ]
      }
    }
  ]
};
