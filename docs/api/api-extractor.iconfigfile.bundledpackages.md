---
layout: page
navigation_source: api_nav
improve_this_button: false
---


[Home](./index.md) &gt; [@microsoft/api-extractor](./api-extractor.md) &gt; [IConfigFile](./api-extractor.iconfigfile.md) &gt; [bundledPackages](./api-extractor.iconfigfile.bundledpackages.md)

## IConfigFile.bundledPackages property

A list of NPM package names whose exports should be treated as part of this package.

<b>Signature:</b>

```typescript
bundledPackages?: string[];
```

## Remarks

For example, suppose that Webpack is used to generate a distributed bundle for the project `library1` . To avoid this, we can specify:

```js
  "bundledPackages": [ "library2" ],

```
This would direct API Extractor to embed those types directly in the .d.ts rollup, as if they had been local files for `library1` .
