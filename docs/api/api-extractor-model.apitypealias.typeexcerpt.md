---
layout: page
navigation_source: api_nav
improve_this_button: false
---


[Home](./index.md) &gt; [@microsoft/api-extractor-model](./api-extractor-model.md) &gt; [ApiTypeAlias](./api-extractor-model.apitypealias.md) &gt; [typeExcerpt](./api-extractor-model.apitypealias.typeexcerpt.md)

## ApiTypeAlias.typeExcerpt property

An [Excerpt](./api-extractor-model.excerpt.md) that describes the type of the alias.

<b>Signature:</b>

```typescript
readonly typeExcerpt: Excerpt;
```

## Remarks

In the example below, the `typeExcerpt` would correspond to the subexpression `T extends any[] ? BoxedArray<T[number]> : BoxedValue<T>;` :

```ts
export type Boxed<T> = T extends any[] ? BoxedArray<T[number]> : BoxedValue<T>;

```
