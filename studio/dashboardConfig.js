export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5defc2268e289193a71924a2',
                  title: 'Sanity Studio',
                  name: 'useo-blog-studio',
                  apiId: '25906bba-2849-4b21-bc04-31c460e24968'
                },
                {
                  buildHookId: '5defc2260e8d60d7682416a5',
                  title: 'Blog Website',
                  name: 'useo-blog',
                  apiId: 'da907fce-6661-4bf5-95df-97fa0ead22b1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/peelar/useo-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://useo-blog.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
