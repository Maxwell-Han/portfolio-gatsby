module.exports = {
  siteTitle: 'Max Han Portfolio', // <title>
  manifestName: 'Resume',
  manifestShortName: 'Landing', // max 12 characters
  manifestStartUrl: '/',
  manifestBackgroundColor: '#663399',
  manifestThemeColor: '#663399',
  manifestDisplay: 'standalone',
  manifestIcon: 'src/assets/img/website-icon.png',
  pathPrefix: `/gatsby-starter-resume/`, // This path is subpath of your hosting https://domain/portfolio
  firstName: 'Max',
  lastName: 'Han',
  // social
  socialLinks: [
    {
      icon: 'fa-github-square',
      name: 'Github',
      url: 'https://github.com/Maxwell-Han',
    },
    {
      icon: 'fa-linkedin-in',
      name: 'Linkedin',
      url: 'https://linkedin.com/in/maxwellhan/',
    },
    {
      icon: 'far fa-file',
      name: 'Resume',
      url: '//assets.ctfassets.net/qyqrc6zt88co/7zF1JK2ZMPcpkQCKURPaYt/f178d8bbe5f12addf9280f2fb9a73975/MaxHanResume.pdf',
    },
    {
      icon: 'far fa-envelope',
      name: 'Email',
      url: 'mailto:maxwell.h.han@gmail.com',
    },
  ],
  email: 'maxwell.h.han@gmail.com',
  address: 'NYC',
};
