export default {
  src: './',
  title: 'Gympass | Front-end test assignment',
  menu: [
    'Página inicial',
    'BaseView',
    'Divider',
    {
      name: 'GitHub',
      href: 'https://github.com/CristianeMayara/my-repositories'
    },
    {
      name: 'Acesse a aplicação',
      href: 'https://my-repositories.herokuapp.com/'
    }
  ],
  themeConfig: {
    logo: {
      src: 'https://avatars3.githubusercontent.com/u/26311162?s=200&v=4',
      width: 75
    }
  },
  htmlContext: {
    favicon: 'https://avatars3.githubusercontent.com/u/26311162?s=200&v=4'
  },
  notUseSpecifiers: true,
  codeSandbox: false
};
