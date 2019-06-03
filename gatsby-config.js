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
            browsers: ['> 1%', 'not ie < 11', 'last 2 versions', 'not dead']
          })
        ]
      }
    }
  ]
};
