/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  rush: [
    {
      type: 'category',
      label: 'Developer tutorials',
      items: [
        'developer/new_developer',
        'developer/everyday_commands',
        'developer/modifying_package_json',
        'developer/other_commands',
        'developer/tab_completion',
        'developer/selecting_subsets'
      ]
    },
    {
      type: 'category',
      label: 'Maintainer tutorials',
      items: [
        'maintainer/setup_new_repo',
        'maintainer/add_to_repo',
        'maintainer/enabling_ci_builds',
        'maintainer/recommended_settings',
        'maintainer/package_managers',
        'maintainer/setup_policies',
        'maintainer/git_hooks',
        'maintainer/enabling_prettier',
        'maintainer/custom_commands',
        'maintainer/publishing',
        'maintainer/deploying',
        'maintainer/build_cache',
        'maintainer/npm_registry_auth'
      ]
    }
  ]

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
};
