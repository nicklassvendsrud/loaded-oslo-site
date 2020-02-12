export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5e44336eda09f901841152f5',
                  title: 'Sanity Studio',
                  name: 'loaded-oslo-site-studio',
                  apiId: '842d2148-bb11-4c99-8a43-f71cd15bd7b0'
                },
                {
                  buildHookId: '5e44336e267d8e01771a2eb0',
                  title: 'Landing pages Website',
                  name: 'loaded-oslo-site',
                  apiId: 'dc5ad2ff-a173-40b9-9be4-1c622fbcd7df'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nicklassvendsrud/loaded-oslo-site',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://loaded-oslo-site.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
