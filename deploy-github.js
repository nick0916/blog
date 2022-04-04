const ghpages = require('gh-pages');

ghpages.publish(
  'build',
  {
    branch: 'docusaurus-page',
    repo: 'https://github.com/nick0916/blog.git',
  },
  (error) => {
      if (error){
          console.log(error)
      }
      else {
          console.log('Deploy Complete!');
      }
  }
);