const YAML = require('js-yaml');
const fs = require('fs');
const util = require('util');

const original = YAML.load(fs.readFileSync('api_nav.yaml', 'utf8'));

const items = original.api_nav.map(category => {
    if (category.subitems) {
        return {
            type: 'category',
            label: category.title,
            items: category.subitems.map(subitem => {
                let id = subitem.url.replace(/^\/pages\//, '');
                if (id.endsWith('/')) id += 'index';
                return {
                    type: 'doc',
                    id,
                    label: subitem.title
                };
            })
        };
    } else {
        let id = category.url.replace(/^\/pages\//, '');
        if (id.endsWith('/')) id += 'index';
        return {
            type: 'doc',
            id,
            label: category.title
        };
    }
});

fs.writeFileSync('api_nav.json', JSON.stringify(items, undefined, 2), 'utf8');

console.log('Converted Jekyll source api_nav.yaml to Docusaurus format api_nav.json');

/*
type: 'category',
label: 'Maintainer tutorials',
items: [
  'maintainer/setup_new_repo',
  'maintainer/add_to_repo',
  'maintainer/enabling_ci_builds',
  'maintainer/recommended_settings',
  'maintainer/package_managers',
  'maintainer/setup_policies',

api_nav:
- title: API Reference
url: /pages/api/
- title: '@microsoft/api-documenter'
url: /pages/api/api-documenter
subitems:
- title: IApiDocumenterPluginManifest
  url: /pages/api/api-documenter.iapidocumenterpluginmanifest
  subitems:
    - title: features
      url: /pages/api/api-documenter.iapidocumenterpluginmanifest.features
    - title: manifestVersion
      url: /pages/api/api-documenter.iapidocumenterpluginmanifest.manifestversion
- title: IFeatureDefinition
  url: /pages/api/api-documenter.ifeaturedefinition
  subitems:
    - title: featureName
      url: /pages/api/api-documenter.ifeaturedefinition.featurename
    - title: kind
      url: /pages/api/api-documenter.ifeaturedefinition.kind
    - title: subclass
      url: /pages/api/api-documenter.ifeaturedefinition.subclass
- title: IMarkdownDocumenterFeatureOnBeforeWritePageArgs
  url: /pages/api/api-documenter.imarkdowndocumenterfeatureonbeforewritepageargs
  subitems:
    - title: apiItem
      url: /pages/api/api-documenter.imarkdowndocumenterfeatureonbeforewritepageargs.apiitem
    - title: outputFilename
      url: /pages/api/api-documenter.imarkdowndocumenterfeatureonbeforewritepageargs.outputfilename
    - title: pageContent
*/
