const ghpages = require('gh-pages');

ghpages.publish(
  'public',
  {
    branch: 'gatsby-page',
    repo: 'https://github.com/nick0916/blog.git',
  },
  () => {
    console.log('Deploy Complete!');
  }
);