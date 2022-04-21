export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '62618330cd61831352751063',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-fzh7bqfo',
                  apiId: '55adaaa7-d74a-4029-9266-5184ed476216'
                },
                {
                  buildHookId: '626183319e4352147a4e90d9',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-yd3vsdhc',
                  apiId: 'e0501e55-d1c2-4049-8fce-b84b0a52b60e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/treffner/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-yd3vsdhc.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
