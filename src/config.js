module.exports = {
  email: 'thanigai128@gmail.com',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/Thannzz',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/thanigaivel-ambalavanan-3b4a30120/',
    },
    {
      name: 'Medium',
      url: 'https://medium.com/@thanigai128',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/geekey_boy/',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    // {
    //   name: 'Skills',
    //   url: '#',
    // },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
  emailConfig: {
    EMAIL_SERVICE_ID: 'service_glgpfp9',
    EMAIL_TEMPLATE_ID: 'template_h9l5wbk',
    EMAIL_PUBLIC_KEY: 'GT1_I1r-C7i_akEfp',
  },
};
