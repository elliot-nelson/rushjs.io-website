---
layout: page
navigation_source: api_nav
improve_this_button: false
---


[Home](./index.md) &gt; [@rushstack/rig-package](./rig-package.md) &gt; [RigConfig](./rig-package.rigconfig.md) &gt; [rigProfile](./rig-package.rigconfig.rigprofile.md)

## RigConfig.rigProfile property

The `"rigProfile"` value that was loaded from `rig.json` , or `""` if the file was not found.

<b>Signature:</b>

```typescript
readonly rigProfile: string;
```

## Remarks

The name must consist of lowercase alphanumeric words separated by hyphens, for example `"sample-profile"` .

Example: `example-profile`
