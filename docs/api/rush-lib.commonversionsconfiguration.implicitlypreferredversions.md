---
layout: page
navigation_source: api_nav
improve_this_button: false
---


[Home](./index.md) &gt; [@microsoft/rush-lib](./rush-lib.md) &gt; [CommonVersionsConfiguration](./rush-lib.commonversionsconfiguration.md) &gt; [implicitlyPreferredVersions](./rush-lib.commonversionsconfiguration.implicitlypreferredversions.md)

## CommonVersionsConfiguration.implicitlyPreferredVersions property

When set to true, for all projects in the repo, all dependencies will be automatically added as preferredVersions, except in cases where different projects specify different version ranges for a given dependency. For older package managers, this tended to reduce duplication of indirect dependencies. However, it can sometimes cause trouble for indirect dependencies with incompatible peerDependencies ranges.

If the value is `undefined` .

<b>Signature:</b>

```typescript
get implicitlyPreferredVersions(): boolean | undefined;
```
