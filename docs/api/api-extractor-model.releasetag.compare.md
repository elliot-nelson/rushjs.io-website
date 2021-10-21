---
layout: page
navigation_source: api_nav
improve_this_button: false
---


[Home](./index.md) &gt; [@microsoft/api-extractor-model](./api-extractor-model.md) &gt; [ReleaseTag](./api-extractor-model.releasetag.md) &gt; [compare](./api-extractor-model.releasetag.compare.md)

## ReleaseTag.compare() function

Compares two `ReleaseTag` values. Their values must not be `ReleaseTag.None` .

<b>Signature:</b>

```typescript
function compare(a: ReleaseTag, b: ReleaseTag): number;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  a | [ReleaseTag](./api-extractor-model.releasetag.md) |  |
|  b | [ReleaseTag](./api-extractor-model.releasetag.md) |  |

<b>Returns:</b>

number

0 if `a` and `b` are equal, a positive number if `a` is more public than `b` .

## Remarks

For example, `compareReleaseTag(ReleaseTag.Beta, ReleaseTag.Alpha)` will return a positive number because beta is more public than alpha.
